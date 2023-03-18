const typeDefs = `#graphql
  
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    businessName: String
    income: [Income]
    expense: [Expense]
  }

  type Income {
    text: String
    amount: Int
    createdAt: String
  }

  type Auth {
    token: ID
    user: User
  }
  type Expense{
    text: String
    amount: Int
    createdAt: String
  }

  type Query {
   
    user: User
    income(amount: Int!): Income
    expense(amount: Int!): Expense
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!, businessName: String!): Auth
    login(email: String!, password: String!): Auth
    addIncome(text: String!,amount: Int!, createdAt: String!): Income
    addExpense(text: String!,amount: Int!, createdAt: String!): Expense
    updateIncome(amount: Int!, createdAt: String!): Income
    updateExpense(amount: Int!, createdAt: String!):Expense
    
  }
`;

module.exports = typeDefs;
