import React from "react";
import { Table } from "antd";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_INCOME } from "../../utils/query";
// import Auth from '../utils/auth';

const IncomeList = () => {
  const { data } = useQuery(GET_INCOME);
        console.log(data)
  const userData = data?.singleUser || [];
  console.log("client income data", userData);
     const incomeList = userData.income
console.log(incomeList)
   
    const TableData = (incomeList) => {
        
    }
  // {
  //           key: "1",
  //           text: "Income A",
  //           amount: 32,
  //           createdAt: "2-13-2023",
  //         },

  const deleteIncome = () => {
    console.log("delete button clicked");
  };
  const columns = [
    {
      title: "Income Description",
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
      render: () => <button onClick={deleteIncome}>Delete</button>,
    },
  ];
  //   const incomeData = [
  //     {
  //       key: "1",
  //       text: "Income A",
  //       amount: 32,
  //       createdAt: "2-13-2023",
  //     },
  //     {
  //       key: "2",
  //       text: "Income B",
  //       amount: 42,
  //       createdAt: "3-12-2022",
  //     },
  //     {
  //       key: "3",
  //       text: "Income C",
  //       amount: 44,
  //       createdAt: "4-20-2021",
  //     },
  //     {
  //       key: "5",
  //       text: "Income D",
  //       amount: 200,
  //       createdAt: "3-22-2021",
  //     },
  //     {
  //       key: "6",
  //       text: "Income E",
  //       amount: 3,
  //       createdAt: "3-22-2021",
  //     },
  //     {
  //       key: "7",
  //       text: "Income F",
  //       amount: 100,
  //       createdAt: "3-22-2021",
  //     },
  //   ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    //This table will create new pagnation if there are more than 10 items//
    <div>
      <h2>Income List</h2>
      <Table
        style={{
          // maxWidth: 600,
          paddingTop: 20,
        }}
        columns={columns}
        dataSource={data}
        onChange={onChange}
      />
      <h2>Total Income</h2>
    </div>
  );
};
export default IncomeList;
