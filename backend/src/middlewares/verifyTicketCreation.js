import { getConnection, sql, querys } from '../database'

export const verifyMaxTickets = async (req, res, next) => {
    const pool = await getConnection()
    const ticketsPerCustomer = await pool.request().
        input('profile_id', sql.VarChar, req.body.profile_id)
        .query(querys.countTicketsperCustomer)

    const countedTickets = ticketsPerCustomer.recordset[0].count

    if (countedTickets < 3) {
        next()
    } else {
        res.json('You have reached the maximum number of tickets')
    }

}

export const verifySeatAvailability = async (req, res, next) => {
    const pool = await getConnection()
    const seat = await pool.request()
        .input('seat_id', sql.VarChar, req.body.seat_id)
        .query(querys.getSeat)

    const seatStatus = seat.recordset[0].status

    if (seatStatus) next()
    else res.json('Seat not available')

}

