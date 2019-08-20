import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import List from "../pages/List";
import Create from "../pages/Create";
import listData from "../pages/__mock__/list.json";
import LandingPage from "../pages/LandingPage";
import Dinero from "dinero.js";
import StatisticPage from "../pages/FilterPage";
import { getFromLocal, setToLocal } from "../services";
import StatisticStart from "../pages/StatisticStart";

Dinero.defaultCurrency = "EUR";
Dinero.globalLocale = "de-DE";

function App() {
  const [transactions, setTransactions] = React.useState(
    listData,
    getFromLocal("transactions") || []
  );

  React.useEffect(() => setToLocal("transactions", transactions), [
    transactions
  ]);

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
        <Route
          path="/statistic/month"
          render={props => (
            <StatisticPage {...props} transactions={transactions} />
          )}
        />
        <Route
          path="/statistic/category"
          render={props => (
            <StatisticPage {...props} transactions={transactions} />
          )}
        />
        <Route path="/statistic" component={StatisticStart} />
      </Switch>
    </Router>
  );
}

export default App;
