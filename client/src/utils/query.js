import { gql } from "@apollo/client";
export const GET_USER = gql`
  query user {
    user {
      _id
      username
      email
      income
      expense
    }
  }
`;
export const GET_INCOME = gql`
  query income {
    income {
      text
      amount
    }
  }
`;

export const GET_EXPENSE = gql`
  query expense {
    expense {
      text
      amount
    }
  }
`;
