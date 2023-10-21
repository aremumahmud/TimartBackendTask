const { Sequelize } = require('sequelize');
//load environment varibles
const dotenv = require('dotenv')
dotenv.config()

const host = process.env.MySQL_HOST
const user = process.env.MySQL_USER
const database = process.env.MySQL_DATABASE
const password = process.env.MySQL_PASSWORD
const dialect = process.env.DIALECT

const sequelize = new Sequelize(database, user, password, {
    host,
    dialect,
});

module.exports = sequelize;