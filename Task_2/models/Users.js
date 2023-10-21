const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid'); // Import the UUID generator
const sequelize = require('../db');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.UUID, // Use UUID data type
        defaultValue: DataTypes.UUIDV4, // Generate a UUID for new records
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
});

// Add a hook to generate a UUID for new records if one is not provided
User.beforeCreate((user) => {
    if (!user.id) {
        user.id = uuidv4();
    }
});

module.exports = User;