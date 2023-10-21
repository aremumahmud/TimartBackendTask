// src/app.js

const express = require('express');
const graphqlRoutes = require('./routes/graphql');
const { handleErrors } = require('./middleware/error');

//load environment varibles
const dotenv = require('dotenv')
dotenv.config()


const app = express();

// Middleware for handling JSON data
app.use(express.json());

// Set up GraphQL routes
app.use('/', graphqlRoutes);

// Error handling
app.use(handleErrors);

const port = process.env.PORT || 2000

// uncomment to test the app
// app.listen(port, () => {
//     console.log('server listening at port: ' + port)
// })

module.exports = app;