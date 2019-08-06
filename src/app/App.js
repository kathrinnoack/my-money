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

  //function handleOnClicked(transactionType) {
  //setTransactionType(transactionType);

  function handleCreate(transaction) {
    const newTrans = transaction;
    console.log(transaction);

    //console.log(newTrans);
    setTransactions([newTrans, ...transactions]);
    // console.log(setTransactions);
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
          // onClicked={handleOnClicked}
        />
        <Route
          path="/list"
          render={props => <List {...props} transactions={transactions} />}
        />
        } />
        <Route
          path="/create"
          render={props => <Create {...props} onCreate={handleCreate} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
