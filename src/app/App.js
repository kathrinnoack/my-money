import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import List from "../pages/List";

import LandingPage from "../pages/LandingPage";
import Dinero from "dinero.js";

Dinero.defaultCurrency = "EUR";
Dinero.globalLocale = "de-DE";

function App({ title }) {
  return (
    <div>
      <Router>
        <GlobalStyles />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/list" exact component={List} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
