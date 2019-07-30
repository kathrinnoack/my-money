import React from "react";
import GlobalStyles from "./GlobalStyles";
import List from "../pages/List";
import Header from "../components/Header";
import Saldo from "../components/Saldo";
import CalculateSaldo from "../components/CalculateSaldo";

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
