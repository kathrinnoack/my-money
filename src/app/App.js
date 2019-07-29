import React from "react";
import GlobalStyles from "./GlobalStyles";
import ListItem from "../components/ListItem";

function App() {
  return (
    <div>
      <GlobalStyles />
      <ListItem amount="-1" />
      <ListItem amount="1" />
    </div>
  );
}

export default App;
