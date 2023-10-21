const Order = require("../models/Orders");

let createOrder = async({ userId, orderDate, totalAmount }) => {
    try {
        const order = await Order.query().insert({ userId, orderDate, totalAmount });
        return order;
    } catch (error) {
        // Handle database-related errors
        console.error(error);
        throw new Error('Could not create the order.');
    }
}


module.exports = createOrder