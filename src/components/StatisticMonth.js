import React from "react";
import styled from "styled-components";
import { InputTitle } from "./StyledCreateForm";

const SelectMonth = styled.select`
  display: flex;
  margin: 10px 10px 10px 10px;
  padding-left: 10px;
  font-size: 18px;
  border: 1px rgba(75, 84, 84, 0.6) solid;
  color: #4b5454;
`;

function CheckboxMonth({ handleMonth, month, transactions }) {
  console.log(transactions);
  return (
    <>
      <InputTitle>Monat</InputTitle>
      <SelectMonth
        onChange={handleMonth}
        value={month}
        name="month"
        type="select"
      >
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
    </>
  );
}

export default CheckboxMonth;
