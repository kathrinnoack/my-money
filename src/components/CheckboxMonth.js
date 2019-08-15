import React from "react";
import styled from "styled-components";

const StyledCheckbox = styled.div`
  display: grid;
  grid-template-rows: 25px 25px 25px 25px 25px;
  grid-template-columns: 20px 3fr 20px 3fr 20px 3fr;
  margin: 15px 10px 15px 10px;
`;

export function StyledCheckboxMonth() {
  /* const [selectMonth, setSelectMonth] = React.useState(false);

  function handleMonth(event) {
    setSelectMonth(event.target.value);
  }*/

  return (
    <StyledCheckbox>
      <input
        type="checkbox"
        /* checked={selectMonth === "01"}
  onChange={handleMonth}*/
      />
      <label for="01">Januar</label>

      <input type="checkbox" />
      <label for="02">Februar</label>
      <input type="checkbox" />
      <label for="03">März</label>
      <input type="checkbox" />
      <label for="04">April</label>
      <input type="checkbox" />
      <label for="05">Mai</label>
      <input type="checkbox" />
      <label for="06">Juni</label>
      <input type="checkbox" />
      <label for="07">Juli</label>
      <input type="checkbox" />
      <label for="08">August</label>
      <input type="checkbox" />
      <label for="09">September</label>
      <input type="checkbox" />
      <label for="10">Oktober</label>
      <input type="checkbox" />
      <label for="11">November</label>
      <input type="checkbox" />
      <label for="12">Dezember</label>
    </StyledCheckbox>
  );
}

export function StyledCheckboxCategory() {
  return (
    <>
      <StyledCheckbox>
        <input type="checkbox" />
        <label for="Gehalt">Gehalt</label>
        <input type="checkbox" />
        <label for="Bareinzahlung">Bareinzahlung</label>
        <input type="checkbox" />
        <label for="Miete">Miete</label>
        <input type="checkbox" />
        <label for="Ersparnis">Ersparnis</label>
        <input type="checkbox" />
        <label for="Versicherung">Versicherung</label>
        <input type="checkbox" />
        <label for="Nebenkosten">Nebenkosten</label>
        <input type="checkbox" />
        <label for="Urlaub">Urlaub</label>
        <input type="checkbox" />
        <label for="Lebensmittel">Lebensmittel</label>
        <input type="checkbox" />
        <label for="Kleidung">Kleidung</label>
        <input type="checkbox" />
        <label for="Sport">Sport</label>

        <input type="checkbox" />
        <label for="Weggehen">Weggehen</label>

        <input type="checkbox" />
        <label for="Sonstiges">Sonstiges</label>
        <input type="checkbox" />
        <label for="Kosmetik & Hygiene">Kosmetik & Hygiene</label>
      </StyledCheckbox>
    </>
  );
}
