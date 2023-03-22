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
    addIncome(text: String!,amount: Int!): Income
    addExpense(text: String!,amount: Int!): Expense
    updateIncome(amount: Int!, text: String!): Income
    updateExpense(amount: Int!, text: String!):Expense
    deleteIncome(amount: Int!,text: String!): Income
    deleteExpense(amount: Int!,text: String!): Expense
    
  }
`;

module.exports = typeDefs;
