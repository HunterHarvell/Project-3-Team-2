import React from "react";
import { Table } from "antd";
import { useQuery } from "@apollo/client";
import { GET_EXPENSE } from "../../utils/query";
const ExpenseList = () => {
  const { data } = useQuery(GET_EXPENSE);
  console.log(data);
  const userData = data?.singleUser || [];
  const expenseList = userData.expense;

  let originalExpenseArray = expenseList;
  console.log("expense array: ", originalExpenseArray);

  let tableArray = originalExpenseArray?.map((item) => {
 
    return {
      key: item.createdAt,
      text: item.text,
      amount: item.amount,
      createdAt: item.createdAt,
    };
  });

  const columns = [
    {
      title: "Expense Description",
      dataIndex: "text",
    },
    {
      title: "Amount in USD",
      dataIndex: "amount",
      sorter: (a, b) => a.amount - b.amount,
    },
    {
      title: "Date Posted",
      dataIndex: "createdAt",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: () => <button>Delete</button>,
    },
  ];
  const thingdata = [
    {
      key: "1",
      text: "Expense A",
      amount: 32,
      createdAt: "2-13-2023",
    },
    {
      key: "2",
      text: "Expense B",
      amount: 42,
      createdAt: "3-12-2022",
    },
    {
      key: "3",
      text: "Expense C",
      amount: 44,
      createdAt: "4-20-2021",
    },
    {
      key: "5",
      text: "Expense D",
      amount: 200,
      createdAt: "3-22-2021",
    },
    {
      key: "6",
      text: "Expense E",
      amount: 3,
      createdAt: "3-22-2021",
    },
    {
      key: "7",
      text: "Expense F",
      amount: 100,
      createdAt: "3-22-2021",
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    //This table will create new pagnation if there are more than 10 items//
    <div>
      <h2>Expense List</h2>
      <Table
        style={{
          // maxWidth: 600,
          paddingTop: 20,
        }}
        columns={columns}
        dataSource={tableArray}
        onChange={onChange}
        pagination={{ pageSize: 10 }} 
      />
      <h2>Total Expense</h2>
    </div>
  );
};
export default ExpenseList;
