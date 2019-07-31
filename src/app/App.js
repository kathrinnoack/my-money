import React from "react";
import GlobalStyles from "./GlobalStyles";
import List from "../pages/List";
import Header from "../components/Header";
import Saldo from "../components/Saldo";
import LandingPage from "../components/LandingPage";
import Dinero from "dinero.js";

Dinero.defaultCurrency = "EUR";
Dinero.globalLocale = "de-DE";

function App({ title }) {
  return (
    <div>
      <GlobalStyles />
      <Header title="My Money" />
      <LandingPage />
      <List />
      <Saldo saldo="Saldo" />
    </div>
  );
}

export default App;
