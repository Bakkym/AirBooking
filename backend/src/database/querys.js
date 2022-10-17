export const querys = {

    // Customers
    getAllCustomers: 'SELECT * FROM Customers',
    createCustomer: 
    'INSERT INTO Customers (profile_id, customer_name, address, tel_no, email) VALUES (@profile_id, @customer_name, @address, @tel_no, @email)',
    getCustomer: 'SELECT * FROM Customers WHERE profile_id = @profile_id',
    deleteCustomer: 'DELETE FROM Customers WHERE profile_id = @profile_id',
    updateCustomer: 'UPDATE Customers SET customer_name = @customer_name, address = @address, tel_no = @tel_no, email = @email WHERE profile_id = @profile_id',

    // Tickets
    getAllTickets: 'SELECT * FROM Tickets_Info',
    getTicket: 'SELECT * FROM Tickets_Info WHERE ticket_id = @ticket_id',
    getTicket_SeatId: 'SELECT seat_id FROM Tickets_Info WHERE ticket_id = @ticket_id',
    createTicket:
    'INSERT INTO Tickets_Info (profile_id, seat_id) VALUES (@profile_id, @seat_id); UPDATE Seats SET status = @seat_status WHERE seat_id = @seat_id',
    deleteTicket:
    'DELETE FROM Tickets_Info WHERE ticket_id = @ticket_id; UPDATE Seats SET status = @seat_status WHERE seat_id = @seat_id',
    deleteAllTicketbyProfile_id: 'DELETE FROM Tickets_Info WHERE profile_id = @profile_id',

    // Seats
    getAllSeats: 'SELECT * FROM Seats',
    getAllAvailableSeats: 'SELECT * FROM Seats WHERE status = 1',
    getSeat: 'SELECT * FROM Seats WHERE seat_id = @seat_id',


    //Middeleware
    countTicketsperCustomer: 'SELECT COUNT(*) as count FROM Tickets_info where profile_id = @profile_id',


}