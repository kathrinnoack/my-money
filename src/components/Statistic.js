import React from "react";
import styled from "styled-components";
import CheckboxMonth from "./CheckboxMonth";
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
      <CheckboxMonth handleMonth={handleMonth} transactions={transactions} />
      <WhiteSpace />
      <CheckboxCategory
        handleCategory={handleCategory}
        transactions={transactions}
      />
    </>
  );
}

export default Statistic;
