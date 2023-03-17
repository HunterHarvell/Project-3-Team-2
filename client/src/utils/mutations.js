import { gql } from "@apollo/client";
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;
export const ADD_USER = gql`
mutation addUser ($firstName: String!, $lastName: String!, $email: String!, $password: String!){
addUser ($firstName: firstName, $lastName: lastName, $email: email, $password: password){
  token
    user {  
    _id
    firstName
    lastName
    email
    password
    income
    expense
  }
}
}
`;
export const ADD_INCOME = gql`
mutation addIncome($text: $String!,$amount: Int!, $createdAt: Date!){
    addIncome($text: $text,$amount: amount, $createdAt: createdAt){
            text
            amount
            createdAt
        }
    
}
`;
export const ADD_EXPENSE = gql`
mutation addExpense($text: $String!,$amount: Int!, $createdAt: Date!){
    addExpense($text: $text,$amount: amount, $createdAt: createdAt){
            text
            amount
            createdAt
        
    }
}
`;
export const UPDATE_INCOME = gql`
mutation updateIncome($amount: Int!, $createdAt: Date!){
    updateIncome($amount: amount, $createdAt: createdAt){
        amount
        createdAt
    }
}
`;
export const UPDATE_EXPENSE = gql`
mutation updatedExpense($amount: Int!, $createdAt: Date!){
    updatedExpense($amount: amount, $createdAt: createdAt){
        amount
        createdAt
    }
}
`;
