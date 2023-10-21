// src/routes/graphql.js

const express = require('express');
const { GraphQLSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');
const schema = require('../graphql/schema');
const resolvers = require('../graphql/resolvers');

const app = express();

const rootSchema = new GraphQLSchema({
    query: schema,
    mutation: resolvers,
});

app.use(
    '/graphql',
    graphqlHTTP({
        schema: rootSchema,
        graphiql: true,
    })
);

module.exports = app;