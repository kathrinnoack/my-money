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

function DropdownCategory({ type, onChange }) {
  const categories = [
    { type: "Einnahme", name: "Gehalt" },
    { type: "Einnahme", name: "Bareinzahlung" },
    { type: "Einnahme", name: "Ersparnis" },
    { type: "Ausgabe", name: "Miete" },
    { type: "Ausgabe", name: "Nebenkosten" },
    { type: "Ausgabe", name: "Lebensmittel" },
    { type: "Ausgabe", name: "Kleidung" },
    { type: "Ausgabe", name: "Versicherung" },
    { type: "Ausgabe", name: "Kosmetik & Hygiene" },
    { type: "Ausgabe", name: "Weggehen" },
    { type: "Ausgabe", name: "Sport" },
    { type: "Ausgabe", name: "Urlaub" },
    { type: "Ausgabe", name: "Sonstiges" }
  ];

  const filteredCategories = categories.filter(
    category => category.type === type
  );

  function handleChange(event) {
    onChange(event);
  }

  return (
    <StyledCategory type="select" name="category" onChange={handleChange}>
      <option value="">Bitte auswählen!</option>
      {filteredCategories.map(item => (
        <option value={item.name}>{item.name}</option>
      ))}
    </StyledCategory>
  );
}

export default DropdownCategory;
