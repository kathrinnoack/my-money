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

function DropdownCategory({ minusType }) {
  const plusCategory = ["Gehalt", "Bareinzahlung", "Ersparnis"];
  const minusCategory = [
    "Miete",
    "Nebenkosten",
    "Kleidung",
    "Versicherung",
    "Kosmetik & Hygieneartikel",
    "Weggehen",
    "Sport",
    "Urlaub",
    "Sonstiges"
  ];

  return (
    <StyledCategory type="select" name="category" placeholder="Bitte auswählen">
      <option value="">Bitte auswählen!</option>
      {plusCategory.map(item => (
        <option>{item}</option>
      ))}
      {minusCategory.map(item => (
        <option>{item}</option>
      ))}
      ;<option value="neu">... neue Kategorie hinzufügen</option>
    </StyledCategory>
  );
}

export default DropdownCategory;
