const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const { v4: uuidv4 } = require('uuid'); // Import the UUID generator

const Order = sequelize.define('Order', {
    id: {
        type: DataTypes.UUID, // Use UUID data type
        defaultValue: DataTypes.UUIDV4, // Generate a UUID for new records
        primaryKey: true,
    },
    userId: {
        type: DataTypes.UUID, // Use UUID data type
        defaultValue: DataTypes.UUIDV4, // Generate a UUID for new records
    },
    orderDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    totalAmount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
});

// Add a hook to generate a UUID for new records if one is not provided
Order.beforeCreate((order) => {
    if (!order.id) {
        order.id = uuidv4();
    }
});

module.exports = Order;