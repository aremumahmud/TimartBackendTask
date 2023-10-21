const User = require('../models/Users'); // Import your Sequelize model

const usersToInsert = [
    { id: 1, username: 'user1', email: 'user1@example.com' },
    { id: 2, username: 'user2', email: 'user2@example.com' },
    { id: 3, username: 'user3', email: 'user3@example.com' },
    { id: 4, username: 'user4', email: 'user4@example.com' },
];

User.bulkCreate(usersToInsert)
    .then(() => {
        console.log('Users inserted successfully.');
    })
    .catch((error) => {
        console.error('Error inserting users:', error);
    });