const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() {
    const { Orders, Customers } = this.entities;
    
    this.on('createOrder', async (req) => {
        const { customerID, amount } = req.data;
        const orderNumber = 'ORD-' + Date.now();
        
        const order = await INSERT.into(Orders).entries({
            orderNumber,
            amount,
            status: 'PENDING',
            customer_ID: customerID
        });
        
        return order;
    });
    
    this.on('updateOrderStatus', async (req) => {
        const { orderID, status } = req.data;
        
        await UPDATE(Orders).set({ status }).where({ ID: orderID });
        return await SELECT.one.from(Orders).where({ ID: orderID });
    });
});