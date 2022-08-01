"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const { gql } = require('apollo-server-express');
const typeDefs = gql `
  type Person {
    name : String
    height : String
    mass : String
    gender : String
    homeworld : String
  }

  type Query {
    people(search: String, page: Int) : [Person]
  }
`;
exports.typeDefs = typeDefs;
