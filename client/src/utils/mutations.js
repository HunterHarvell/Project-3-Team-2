import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $businessName: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      businessName: $businessName
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_INCOME = gql`
  mutation addIncome($text: String!, $amount: Int!) {
    addIncome(text: $text, amount: $amount) {
      amount
      text
    }
  }
`;
