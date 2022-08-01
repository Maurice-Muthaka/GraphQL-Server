const { gql } = require('apollo-server-express');

const typeDefs = gql`
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

export { typeDefs };