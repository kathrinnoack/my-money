import React from "react";
import GlobalStyles from "./GlobalStyles";
import List from "../pages/List";
import Header from "../components/Header";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <List />
    </div>
  );
}

export default App;
