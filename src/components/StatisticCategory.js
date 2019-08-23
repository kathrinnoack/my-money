import React from "react";
import styled from "styled-components";
import { InputTitle } from "./StyledCreateForm";

const StyledLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 15px;
`;

const SelectCategory = styled.select`
  flex-grow: 0.5;
  margin: 15px;
  border: 1px rgba(75, 84, 84, 0.6) solid;
  color: #4b5454;
  font-size: 18px;
`;

function CheckCategory({ handleCategory, category }) {
  return (
    <StyledLayout>
      <InputTitle>Kategorie:</InputTitle>
      <SelectCategory
        onChange={handleCategory}
        value={category}
        name="category"
        type="select"
      >
        <option value="">bitte auswählen</option>
        <option value="Gehalt">Gehalt</option>
        <option value="Bareinzahlung">Bareinzahlung</option>
        <option value="Miete">Miete</option>
        <option value="Nebenkosten">Nebenkosten</option>
        <option value="Lebensmittel">Lebensmittel</option>
        <option value="Kleidung">Kleidung</option>
        <option value="Kosmetik & Hygiene">Kosmetik & Hygiene</option>
        <option value="Erspanis">Ersparnis</option>
        <option value="Versicherung">Versicherung</option>
        <option value="Sport">Sport</option>
        <option value="Weggehen">Weggehen</option>
        <option value="Urlaub">Urlaub</option>
        <option value="Sonstiges">Sonstiges</option>
      </SelectCategory>
    </StyledLayout>
  );
}

export default CheckCategory;
