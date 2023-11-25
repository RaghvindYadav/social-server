import { buildSchema } from "graphql";

const schema = buildSchema(`
  type User {
    id: ID
    firstName: String
    lastName: String
    email: String
    accessToken: String
    oauthProvider: String
  }

  type Query {
    user(email: String!): User
  }

  type Mutation {
    signUp(firstName: String!, lastName: String, accessToken: String!, email: String!,oauthProvider: String!): String
    signIn(firstName: String!, lastName: String, accessToken: String!, email: String!,oauthProvider: String!): String
  }
`);

export default schema
