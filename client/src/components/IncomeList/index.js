import React from "react";
import { Table } from "antd";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_INCOME } from "../../utils/query";
// import Auth from '../utils/auth';

const IncomeList = () => {
  const { data } = useQuery(GET_INCOME);
  console.log(data);
  const userData = data?.singleUser || [];
  console.log("client income data", userData);
  const incomeList = userData.income;

  let originalIncomeArray = incomeList;

  console.log("income array", originalIncomeArray);

  let tableArray = originalIncomeArray?.map((item) => {
    for (var i = 0; i < originalIncomeArray.length; i++) {
    }
    return {
      key: item.createdAt,
      text: item.text,
      amount: item.amount,
      createdAt: item.createdAt,
    };
  });
  
  console.log(tableArray);
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
        dataSource={tableArray}
        onChange={onChange}
      />
      <h2>Total Income</h2>
    </div>
  );
};
export default IncomeList;
