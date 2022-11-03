import { getConnection, sql, querys } from '../database'


export const getAllSeats = async(req, res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request().query(querys.getAllSeats)
        res.json(result.recordsets[0])
    } catch (error) {
        res.status(500)
        res.send(error.message)

    }
}

export const getAllAvailableSeats = async(req, res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request().query(querys.getAllAvailableSeats)
        res.json(result.recordsets)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const getSeat = async(req, res) => {
    const pool = await getConnection()
    const result = await pool.request()
        .input('seat_id', sql.VarChar, req.params.seat_id)
        .query(querys.getSeat)
    res.json(result.recordset[0])

}