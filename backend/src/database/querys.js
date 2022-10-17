export const querys = {
    getAllCustomers: 'SELECT * FROM Customers',
    createCustomer: 
    'INSERT INTO Customers (profile_id, customer_name, address, tel_no, email) VALUES (@profile_id, @customer_name, @address, @tel_no, @email)',
    getCustomer: 'SELECT * FROM Customers WHERE profile_id = @profile_id',
    deleteCustomer: 'DELETE FROM Customers WHERE profile_id = @profile_id'
}