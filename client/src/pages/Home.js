import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import IncomeForm from "../components/IncomeForm"

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      {/* <ProductList /> */}
      <Cart />
      <IncomeForm/>
    </div>
  );
};

export default Home;
