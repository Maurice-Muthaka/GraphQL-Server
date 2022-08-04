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

  type people {
    next: String
    previous: String
    people: [Person]
  }

  type Query {
    people(search: String, page: Int) : people
    person(id: String!) : Person!
  }
`;

export { typeDefs };