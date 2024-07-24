const typeDefs = gql`
  type Book {
    authors: String
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type User {
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }

  type Query {
    me: User
    user(id: ID, username: String): User
  }

  type Mutation {
    login(username: String, email: String, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth
    saveBook(book: BookInput!): User
    deleteBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
