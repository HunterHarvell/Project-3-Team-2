import { gql } from "@apollo/client";
export const GET_PROFIT = gql`
  query userProfit {
    singleUser {
      _id
      username
      email
      income {
        amount
      }
      expense {
        amount
      }
    }
  }
`;

export const GET_INCOME = gql`
  query getIncome {
    singleUser {
      _id
      email
      income {
        amount
        createdAt
        text
      }
    }
  }
`;

export const GET_EXPENSE = gql`
  query getExpense {
    singleUser {
      _id
      expense {
        amount
        createdAt
        text
      }
    }
  }
`;
export const DELETE_INCOME = gql`
  query expense {
    expense {
      text
      amount
    }
  }
`;
export const DELETE_EXPENSE = gql`
  query income {
    income {
      text
      amount
    }
  }
`;
