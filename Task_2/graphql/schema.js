// src/graphql/schema.js

const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt } = require('graphql');
const { Op } = require('sequelize');
const UserType = require('../types/UserType');
const OrderType = require('../types/OrderType');
const Order = require('../models/Orders');
const User = require('../models/Users');

const RootQuery = new GraphQLObjectType({
    name: 'Query',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLInt } },
            resolve(parent, args) {
                return User.findByPk(args.id);
            },
        },
        orders: {
            type: new GraphQLList(OrderType),
            args: { userId: { type: GraphQLInt } },
            resolve(parent, args) {
                return Order.findAll({
                    where: { userId: args.userId },
                });
            },
        },
    },
});

module.exports = RootQuery;