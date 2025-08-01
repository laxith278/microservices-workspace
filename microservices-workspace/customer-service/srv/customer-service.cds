using microservices.db as db from '../../shared-database/db/schema';

service CustomerService {
    entity Customers as projection on db.Customers;
    entity Orders as projection on db.Orders;
    
    action createCustomer(name: String, email: String) returns Customers;
    function getCustomerOrders(customerID: UUID) returns array of Orders;
}