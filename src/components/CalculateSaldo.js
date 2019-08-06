import React from "react";
import Dinero from "dinero.js";

function CalculateSaldo({ transactions }) {
  const total = transactions
    .map(element => parseInt(element.amount * 100))
    .reduce((acc, current) => {
      return acc.add(Dinero({ amount: current }));
    }, Dinero({ amount: 0 }));

  return <p>{total.toFormat("$0,0.00")}</p>;
}

export default CalculateSaldo;
