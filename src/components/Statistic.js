import React from "react";
import styled from "styled-components";
import SelectMonth from "./StatisticMonth";
import CheckCategory from "./StatisticCategory";

const StatisticHeadline = styled.h3`
  margin: 10px;
`;

function Statistic({ transactions, handleMonth, handleCategory }) {
  console.log(transactions);

  return (
    <>
      <StatisticHeadline>Auswahl:</StatisticHeadline>
      <SelectMonth
        handleMonth={handleMonth}
        transactions={transactions}
        handleCategory={handleCategory}
      />

      <CheckCategory
        handleCategory={handleCategory}
        transactions={transactions}
      />
    </>
  );
}

export default Statistic;
