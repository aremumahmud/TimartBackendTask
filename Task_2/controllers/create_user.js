const User = require('./models/User');

let createUser = async({ username, email }) => {
    try {
        const user = await User.query().insert({ username, email });
        return user;
    } catch (error) {
        // Handle database-related errors
        console.error(error);
        throw new Error('Could not create the user.');
    }
}


module.exports = createUser