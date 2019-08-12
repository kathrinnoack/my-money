import React from "react";
import styled from "styled-components";

const StyledCategory = styled.select`
  background-color: #fffdf6;
  border: 1px rgba(75, 84, 84, 0.6) solid;
  font-size: 18px;
  padding: 5px 5px 5px 10px;
  margin-bottom: 20px;
  font-family: sans-serif;
  color: #4b5454;
`;

function DropdownCategory() {
  return (
    <StyledCategory type="select" name="category" placeholder="Bitte auswählen">
      <option value="">Bitte auswählen!</option>
      <option value="Gehalt">Gehalt</option>
      <option value="Bareinzahlung">Bareinzahlung</option>
      <option value="Lebensmittel">Lebensmittel</option>
      <option value="Kleidung">Kleidung</option>
    </StyledCategory>
  );
}

export default DropdownCategory;
