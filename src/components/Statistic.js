import React from "react";
import styled from "styled-components";
import SelectMonth from "./StatisticMonth";
import CheckboxCategory from "./CheckboxCategory";

const StatisticHeadline = styled.h3`
  margin: 10px;
`;

export const WhiteSpace = styled.div`
  width: 100%;
  height: 10px;
`;

function Statistic({ transactions, handleMonth, handleCategory }) {
  console.log(transactions);

  return (
    <>
      <StatisticHeadline>Auswahl:</StatisticHeadline>
      <WhiteSpace />
      <SelectMonth
        handleMonth={handleMonth}
        transactions={transactions}
        handleCategory={handleCategory}
      />
      <WhiteSpace />
      <CheckboxCategory
        handleCategory={handleCategory}
        transactions={transactions}
      />
    </>
  );
}

export default Statistic;
