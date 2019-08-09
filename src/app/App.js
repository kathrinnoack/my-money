import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import List from "../pages/List";
import Create from "../pages/Create";
import listData from "../pages/__mock__/list.json";

import LandingPage from "../pages/LandingPage";
import Dinero from "dinero.js";

Dinero.defaultCurrency = "EUR";
Dinero.globalLocale = "de-DE";

function App() {
  const [transactions, setTransactions] = React.useState(listData);
  const [minusType, setMinusType] = React.useState("");
  const [plusType, setPlusType] = React.useState("");

  function handleCreate(transaction) {
    const newTrans = transaction;
    console.log(transaction);
    setTransactions([newTrans, ...transactions]);
  }

  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route
          path="/"
          exact
          render={props => (
            <LandingPage
              setMinusType={setMinusType}
              setPlusType={setPlusType}
              {...props}
              transactions={transactions}
            />
          )}
        />
        <Route
          path="/list"
          render={props => (
            <List
              {...props}
              transactions={transactions}
              setMinusType={setMinusType}
              setPlusType={setPlusType}
            />
          )}
        />
        } />
        <Route
          path="/create"
          render={props => (
            <Create
              minusType={minusType}
              plusType={plusType}
              {...props}
              onCreate={handleCreate}
            />
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
