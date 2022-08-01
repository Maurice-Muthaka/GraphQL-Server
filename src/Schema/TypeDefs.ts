const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Person {
    name : String
    height : String
    mass : String
    gender : String
    homeworld : String
    url : String
  }

  type Query {
    people(search: String, page: Int) : [Person]
    person(id: String) : Person
  }
`;

export { typeDefs };