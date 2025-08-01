namespace microservices.db;

entity Customers {
    key ID : UUID;
    name : String(100);
    email : String(100);
    createdAt : Timestamp;
    orders : Association to many Orders on orders.customer = $self;
}

entity Orders {
    key ID : UUID;
    orderNumber : String(20);
    amount : Decimal(10,2);
    status : String(20);
    customer : Association to Customers;
    createdAt : Timestamp;
}