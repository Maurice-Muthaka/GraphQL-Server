const { typeDefs } = require("./Schema/TypeDefs");
const { resolvers } = require("./Schema/Resolvers")
const { ApolloServer } = require("apollo-server-express");
const express = require("express");

const app = express();
const port = process.env.PORT || 3001

const server = new ApolloServer({ typeDefs, resolvers });

server.start().then(() => {
    server.applyMiddleware({ app });

    app.listen({ port: port }, () => {
        console.log(`Server running on port ${port}`);
    })
})