using microservices.db as db from '../../shared-database/db/schema';

service OrderService {
    entity Orders as projection on db.Orders;
    entity Customers as projection on db.Customers;
    
    action createOrder(customerID: UUID, amount: Decimal) returns Orders;
    action updateOrderStatus(orderID: UUID, status: String) returns Orders;
}