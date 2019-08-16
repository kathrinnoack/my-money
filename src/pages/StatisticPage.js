import React from "react";
import Statistic, { WhiteSpace } from "../components/Statistic";
import Header from "../components/Header";
import CalculateSaldo from "../components/CalculateSaldo";

function StatisticPage({ transactions }) {
  console.log(transactions);

  return (
    <>
      <Header title="My Money" />
      <Statistic transactions={transactions} />
      <WhiteSpace />

      <CalculateSaldo transactions={transactions} />
    </>
  );
}

export default StatisticPage;
