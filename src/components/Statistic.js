import React from "react";
import styled from "styled-components";
import { StyledCheckboxMonth, StyledCheckboxCategory } from "./CheckboxMonth";

const StatisticHeadline = styled.h3`
  margin-left: 10px;
`;

const StyledOutput = styled.div`
  margin: 25px 10px 15px 10px;
  padding: 10px;
  border: 2px solid #4b5454;
  height: 80px;
  width: 100%;
`;

function Statistic() {
  return (
    <>
      <StatisticHeadline>Auswahl:</StatisticHeadline>
      <StyledCheckboxMonth />
      <StyledCheckboxCategory />

      <StyledOutput>hier wird das Ergebnis angezeigt</StyledOutput>
    </>
  );
}

export default Statistic;
