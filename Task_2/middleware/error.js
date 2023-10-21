// middleware/error.js

const handleErrors = (err, req, res, next) => {
    console.error(err.stack); // Log the error
    res.status(500).json({ error: 'Internal server error' });
};

module.exports = { handleErrors };