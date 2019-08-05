import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import List from "../pages/List";
import Create from "../pages/Create";

import LandingPage from "../pages/LandingPage";
import Dinero from "dinero.js";

Dinero.defaultCurrency = "EUR";
Dinero.globalLocale = "de-DE";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/list" component={List} />
        <Route path="/create" component={Create} />
      </Switch>
    </Router>
  );
}

export default App;
