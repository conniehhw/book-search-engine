const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: array
  }

  type Book {
    bookId: ID
    authors: String
    descriptions: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: 
    user: String
  }

  type Query {
    me: [User]
  }

  type Mutation {
    login:
    addUser:
    saveBook:
    removeBook:
    bookId: 

  }

 
`;

module.exports = typeDefs;
