const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() {
    const { Customers, Orders } = this.entities;
    
    this.on('createCustomer', async (req) => {
        const { name, email } = req.data;
        
        const customer = await INSERT.into(Customers).entries({
            name,
            email
        });
        
        return customer;
    });
    
    this.on('getCustomerOrders', async (req) => {
        const { customerID } = req.data;
        
        return await SELECT.from(Orders).where({ customer_ID: customerID });
    });
});