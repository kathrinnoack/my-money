import React from "react";
import listData from "../pages/__mock__/list.json";

function CalculateSaldo() {
  const [list, setList] = React.useState(listData);

  console.log(list.map(element => element.amount));
  return <div>{list.map(element => element.amount)}</div>;
}

export default CalculateSaldo;
