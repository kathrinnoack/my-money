import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import List from "../pages/List";
import Create from "../pages/Create";
import listData from "../pages/__mock__/list.json";

import LandingPage from "../pages/LandingPage";
import Dinero from "dinero.js";
import StatisticPage from "../pages/StatisticPage";

Dinero.defaultCurrency = "EUR";
Dinero.globalLocale = "de-DE";

function App() {
  const [transactions, setTransactions] = React.useState(listData);
  //const [minusCategory, setMinusCategory] = React.useState("");
  //const [plusCategory, setPlusCategory] = React.useState("");

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
            <LandingPage {...props} transactions={transactions} />
          )}
        />
        <Route
          path="/list"
          render={props => <List {...props} transactions={transactions} />}
        />
        } />
        <Route
          path="/create/:type"
          render={props => (
            <Create
              {...props}
              onCreate={handleCreate}
              transactions={transactions}
            />
          )}
        />
        <Route path="/statistic" excat component={StatisticPage} />
      </Switch>
    </Router>
  );
}

export default App;
