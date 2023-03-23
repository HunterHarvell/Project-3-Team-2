import React from "react";
import IncomeForm from "../components/IncomeForm";
import IncomeList from "../components/IncomeList";
import TotalIncomeModal from "../components/IncomeTotal";
const Income = () => {
  return (
    <div className="container">
      <div
        style={{
          paddingTop: "20px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignContent: "stretch",
          columnGap: "10px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h2>Log your incomes here</h2>
          <IncomeForm />
        </div>
        <div
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        }}>
          <h2>Total Income</h2>
          <TotalIncomeModal />
        </div>
      </div>
      <div
      style={{
        paddingTop: "20px",
      }}>
        <h2>Income List</h2>
        <IncomeList />
      </div>
    </div>
  );
};

export default Income;
