import React from "react";
import GlobalStyles from "./GlobalStyles";
import List from "../components/List";

function App() {
  return (
    <div>
      <GlobalStyles />
      <List amount="-1" />
      <List amount="1" />
    </div>
  );
}

export default App;
