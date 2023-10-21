const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLFloat } = require('graphql');

const OrderType = new GraphQLObjectType({
    name: 'Order',
    fields: {
        id: { type: GraphQLID },
        userId: { type: GraphQLID },
        orderDate: { type: GraphQLString },
        totalAmount: { type: GraphQLFloat },
    },
});

module.exports = OrderType;