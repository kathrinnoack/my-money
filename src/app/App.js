import React from "react";
import GlobalStyles from "./GlobalStyles";
import List from "../pages/List";
import Header from "../components/Header";
import Saldo from "../components/Saldo";
import CalculateSaldo from "../components/CalculateSaldo";
import Dinero from "dinero.js";

const price = Dinero({ amount: 5000, currency: "EUR" });
console.log(price.toFormat("$0,0.00"));

function App({ title }) {
  return (
    <div>
      <GlobalStyles />
      <Header title="My Money" />
      <List />
      <Saldo />
      <CalculateSaldo />
    </div>
  );
}

export default App;
