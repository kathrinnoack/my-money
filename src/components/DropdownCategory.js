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
    { id: "01", type: "Einnahme", name: "Gehalt" },
    { id: "02", type: "Einnahme", name: "Bareinzahlung" },
    { id: "03", type: "Einnahme", name: "Ersparnis" },
    { id: "04", type: "Ausgabe", name: "Miete" },
    { id: "05", type: "Ausgabe", name: "Nebenkosten" },
    { id: "06", type: "Ausgabe", name: "Lebensmittel" },
    { id: "07", type: "Ausgabe", name: "Kleidung" },
    { id: "08", type: "Ausgabe", name: "Versicherung" },
    { id: "09", type: "Ausgabe", name: "Kosmetik & Hygiene" },
    { id: "10", type: "Ausgabe", name: "Weggehen" },
    { id: "11", type: "Ausgabe", name: "Sport" },
    { id: "12", type: "Ausgabe", name: "Urlaub" },
    { id: "13", type: "Ausgabe", name: "Sonstiges" }
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
        <option key={item.id} value={item.name}>
          {item.name}
        </option>
      ))}
    </StyledCategory>
  );
}

export default DropdownCategory;
