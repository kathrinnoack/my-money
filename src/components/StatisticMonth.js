import React from "react";
import styled from "styled-components";
import { InputTitle } from "./StyledCreateForm";

const StyledLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 15px;
`;

const SelectMonth = styled.select`
  margin: 15px;
  border: 1px rgba(75, 84, 84, 0.6) solid;
  color: #4b5454;
`;

function CheckMonth({ handleMonth, month, transactions }) {
  console.log(transactions);
  return (
    <StyledLayout>
      <InputTitle>Monat</InputTitle>
      <SelectMonth
        onChange={handleMonth}
        value={month}
        name="month"
        type="select"
      >
        <option value="">bitte auswählen</option>
        <option value="01">Januar</option>
        <option value="02">Februar</option>
        <option value="03">März</option>
        <option value="04">April</option>
        <option value="05">Mai</option>
        <option value="06">Juni</option>
        <option value="07">Juli</option>
        <option value="08">August</option>
        <option value="09">September</option>
        <option value="10">Oktober</option>
        <option value="11">November</option>
        <option value="12">Dezember</option>
      </SelectMonth>
    </StyledLayout>
  );
}

export default CheckMonth;
