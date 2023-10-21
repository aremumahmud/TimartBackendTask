// src/graphql/resolvers.js

const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt, GraphQLFloat } = require('graphql');
const Order = require('../models/Orders');
const User = require('../models/Users');
const UserType = require('../types/UserType');
const OrderType = require('../types/OrderType');

// Define UserType and OrderType here as well.

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createUser: {
            type: UserType,
            args: {
                username: { type: GraphQLString },
                email: { type: GraphQLString },
            },
            resolve(parent, args) {
                return User.create(args);
            },
        },
        createOrder: {
            type: OrderType,
            args: {
                userId: { type: GraphQLInt },
                orderDate: { type: GraphQLString },
                totalAmount: { type: GraphQLFloat },
            },
            resolve(parent, args) {

                return Order.create(args);
            },
        },
    },
});

module.exports = Mutation;