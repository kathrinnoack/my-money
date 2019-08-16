import React from "react";
import styled from "styled-components";

const StyledCheckbox = styled.div`
  display: grid;
  grid-template-rows: 25px 25px 25px 25px 25px;
  grid-template-columns: 20px 3fr 20px 3fr 20px 3fr;
  margin: 15px 10px 15px 10px;
`;

function CheckboxCategory() {
  return (
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
  );
}

export default CheckboxCategory;
