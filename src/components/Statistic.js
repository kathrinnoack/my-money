import React from "react";
import styled from "styled-components";
import SelectMonth from "./StatisticMonth";
import CheckCategory from "./StatisticCategory";

const StatisticHeadline = styled.h3`
  margin: 10px;
`;

function Statistic({ handleMonth, handleCategory }) {
  return (
    <>
      <StatisticHeadline>Auswahl:</StatisticHeadline>
      <SelectMonth handleMonth={handleMonth} />

      <CheckCategory handleCategory={handleCategory} />
    </>
  );
}

export default Statistic;
