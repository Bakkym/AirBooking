import { getConnection, sql, querys } from '../database'

export const verifyMaxTickets = async (req, res, next) => {
    const pool = await getConnection()
    const ticketsPerCustomer = await pool.request().
    input('profile_id', sql.VarChar, req.body.profile_id)
    .query(querys.countTicketsperCustomer)

    const countedTickets = ticketsPerCustomer.recordset[0].count

    if (countedTickets > 3) {
        res.status(400)
        res.json('You have reached the maximum number of tickets')
    } else {
       next()
    }

}

