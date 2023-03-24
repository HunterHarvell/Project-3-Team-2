import React from "react";
import IncomeForm from "../components/IncomeForm";
import IncomeList from "../components/IncomeList";
import TotalIncomeModal from "../components/IncomeTotal";
const Income = () => {
  return (
    <div className="container">
      <IncomeForm />
      <IncomeList />
      <TotalIncomeModal />
    </div>
  );
};

export default Income;
