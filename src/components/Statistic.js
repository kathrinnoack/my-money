import React from "react";
import styled from "styled-components";
import CheckboxMonth from "./Checkbox";
import CheckboxCategory from "./CheckboxCategory";

const StatisticHeadline = styled.h3`
  margin: 10px;
`;

export const WhiteSpace = styled.div`
  width: 100%;
  height: 10px;
`;

function Statistic({ transactions }) {
  console.log(transactions);
  return (
    <>
      <StatisticHeadline>Auswahl:</StatisticHeadline>
      <WhiteSpace />
      <CheckboxMonth />
      <WhiteSpace />
      <CheckboxCategory />
    </>
  );
}

export default Statistic;
