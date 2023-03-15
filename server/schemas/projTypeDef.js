const typeDefs = `#graphql
  
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    income: Income
    expense: Expense
  }

  type Income {
    text: String
    amount: Int
    createdAt: Date
  }

  type Auth {
    token: ID
    user: User
  }
  type Expense{
    text: String
    amount: Int
    createdAt: Date
  }

  type Query {
   
    user: User
    income(amount: Int!): Income
    expense(amount: Int!): Expense
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addIncome(text: String!,amount: Int!, createdAt: Date!): Income
    addExpense(text: String!,amount: Int!, createdAt: Date!): Expense
    updateIncome(amount: Int!, createdAt: Date!): Income
    updateExpense(amount: Int!, createdAt: Date!):Expense
    
  }
`;

module.exports = typeDefs;
