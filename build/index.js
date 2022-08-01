"use strict";
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const expressPlayground = require("graphql-playground-middleware-express").default;
const { typeDefs } = require("./Schema/TypeDefs");
const { resolvers } = require("./Schema/Resolvers");
const app = express();
const port = process.env.PORT || 3001;
const server = new ApolloServer({ typeDefs, resolvers });
server.start().then(() => {
    server.applyMiddleware({ app });
    app.get("/", expressPlayground({ endpoint: "/graphql" }));
    app.listen({ port: port }, () => {
        console.log(`Server running on port ${port}`);
    });
});
