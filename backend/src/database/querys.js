export const querys = {
    getAllCustomers: 'SELECT * FROM Customers',
    createCustomer: 
    'INSERT INTO Customers (profile_id, customer_name, address, tel_no, email) VALUES (@profile_id, @customer_name, @address, @tel_no, @email)',
    getCustomer: 'SELECT * FROM Customers WHERE profile_id = @profile_id',
    deleteCustomer: 'DELETE FROM Customers WHERE profile_id = @profile_id',
    updateCustomer: 'UPDATE Customers SET customer_name = @customer_name, address = @address, tel_no = @tel_no, email = @email WHERE profile_id = @profile_id',

    getAllTickets: 'SELECT * FROM Tickets_Info',
    getTicket: 'SELECT * FROM Tickets_Info WHERE ticket_id = @ticket_id',
    createTicket: 'INSERT INTO Tickets_Info (profile_id, seat_id) VALUES (@profile_id, @seat_id)',
    deleteTicket: 'DELETE FROM Tickets_Info WHERE ticket_id = @ticket_id',
}