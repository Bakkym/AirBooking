import { getConnection, sql, querys } from '../database';
import config from '../config';
import QRCode from 'qrcode'
import nodemailer from 'nodemailer'

export const getDetails = async (req, res) => {
    const pool = await getConnection()
    

    const detailsbyId = await pool.request()
        .input('profile_id', sql.VarChar, req.params.profile_id)
        .query(querys.getDetailsbyProfileId)

   
    res.json(detailsbyId.recordset)

}

 export const detailsQRCode = async (req, res) => {
    const pool = await getConnection()
    
    const getEmail = await pool.request().
    input('profile_id', sql.VarChar, req.body.profile_id)
    .query(querys.getEmailbyProfileId)
    const customerEmail = getEmail.recordset[0].email

    const generateQRCode = await QRCode.toDataURL(`http://localhost:3001/details/${req.body.profile_id}`)
    console.log(generateQRCode)

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: config.gmEmail,
            pass: config.gmPassword
        }
    });

    var mailOptions = {
        from: config.gmEmail,
        to: customerEmail,
        subject: 'QRCODE for tickets details!',
        attachDataUrls: true,
        html:'<h1>This is your QRCODE!</h1></br><img src="' + generateQRCode + '"/>'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    res.json({message: 'Email sent!'})
}



    





