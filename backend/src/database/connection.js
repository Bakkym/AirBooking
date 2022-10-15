import sql from 'mssql'

const dbSettings = {
    user: 'camilo',
    password: 'password',
    server: 'localhost',
    database: 'airbooking',
    options: {
        encrypt: true,
        trustServerCertificate: true

    }


}

async function getConnection(){
    const pool = await sql.connect(dbSettings)
    const result = await pool.request().query('SELECT 1')
    console.log(result)
}

getConnection()