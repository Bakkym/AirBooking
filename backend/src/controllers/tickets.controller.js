import { getConnection, sql, querys } from '../database'

export const getTickets = async (req, res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request().query(querys.getAllTickets)
        res.json(result.recordset)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const getTicket = async (req, res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request()
            .input('ticket_id', sql.VarChar, req.params.ticket_id)
            .query(querys.getTicket)
        res.json(result.recordset[0])

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const createTicket = async (req, res) => {
    try {
        const pool = await getConnection()
        await pool.request()
            .input('profile_id', sql.VarChar, req.body.profile_id)
            .input('seat_id', sql.VarChar, req.body.seat_id)
            .input('seat_status', sql.Bit, 0)
            .query(querys.createTicket && querys.updateSeatStatus)
        res.json('New Ticket Created')
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}


export const updateTicket = (req, res) => {
    res.json('Ticket Updated')
}

export const deleteTicket = async (req, res) => {
    try {
        const pool = await getConnection()
        await pool.request()
            .input('ticket_id', sql.VarChar, req.params.ticket_id)
            .query(querys.deleteTicket)
        res.json('Ticket Deleted')

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}