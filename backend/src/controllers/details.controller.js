import { getConnection, sql, querys } from '../database';
import QRCode from 'qrcode'

export const getDetails = async (req, res) => {
    const pool = await getConnection()
    const detailsbyId = await pool.request()
        .input('profile_id', sql.VarChar, req.params.profile_id)
        .query(querys.getDetailsbyProfileId)

    const generateQRCode = await QRCode.toDataURL(`http://localhost:3001/details/${req.params.profile_id}`)
    console.log(generateQRCode)
    res.json([detailsbyId.recordset, generateQRCode])


}


const sendEmail = () => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'airbooking2022@gmail.com',
            pass: 'airbooking123'
        }
    });

    var mailOptions = {
        from: 'airbooking2022@gmail.com',
        to: 'camilobh2002@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });


}