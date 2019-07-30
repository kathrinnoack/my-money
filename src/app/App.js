import React from "react";
import GlobalStyles from "./GlobalStyles";
import List from "../pages/List";
import Header from "../components/Header";
import Saldo from "../components/Saldo";

function App({ title }) {
  return (
    <div>
      <GlobalStyles />
      <Header title="My Money" />
      <List />
      <Saldo />
    </div>
  );
}

export default App;
