import React from "react";
import GlobalStyles from "./GlobalStyles";
import List from "../pages/List";
import Header from "../components/Header";

function App({ title }) {
  return (
    <div>
      <GlobalStyles />
      <Header title="My Money" />
      <List />
    </div>
  );
}

export default App;
