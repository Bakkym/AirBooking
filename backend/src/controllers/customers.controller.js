import { getConnection, sql, querys } from '../database'

export const getCustomers = async (req, res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request().query(querys.getAllCustomers)
        res.json(result.recordset)

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}

export const getCustomer = async (req, res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request()
            .input('profile_id', sql.VarChar, req.params.profile_id)
            .query(querys.getCustomer)
        res.json(result.recordset[0])

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}

export const createCustomer = async (req, res) => {
    try {
        const pool = await getConnection()
        await pool.request()
            .input('profile_id', sql.VarChar, req.body.profile_id)
            .input('customer_name', sql.VarChar, req.body.customer_name)
            .input('address', sql.VarChar, req.body.address)
            .input('tel_no', sql.VarChar, req.body.tel_no)
            .input('email', sql.VarChar, req.body.email)
            .query(querys.createCustomer)

        res.json('New Customer Created')

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}

export const updateCustomer = (req, res) => {
    res.json('update Customer')
}

export const deleteCustomer = async (req, res) => {
    try {
        const pool = await getConnection()
        await pool.request()
            .input('profile_id', sql.VarChar, req.params.profile_id)
            .query(querys.deleteCustomer)

        res.json('Customer Deleted')

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}