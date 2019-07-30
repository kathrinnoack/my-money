import React from "react";
import listData from "../pages/__mock__/list.json";
import Dinero from "dinero.js";

function CalculateSaldo() {
  const [list, setList] = React.useState(listData);
  const total = list
    .map(element => parseInt(element.amount * 10))
    .reduce((acc, current) => {
      return acc.add(Dinero({ amount: current }));
    }, Dinero({ amount: 0 }));
  console.log(total.toFormat("$0,0.00"));
  return <div>{list.map(element => element.amount)}</div>;
}

export default CalculateSaldo;
