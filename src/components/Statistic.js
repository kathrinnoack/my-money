import React from "react";
import styled from "styled-components";

const StatisticHeadline = styled.h3`
  margin-left: 10px;
`;

const StyledCheckbox = styled.div`
  display: grid;
  grid-template-rows: 25px 25px 25px 25px 25px;
  grid-template-columns: 20px 3fr 20px 3fr 20px 3fr;
  margin: 15px 10px 15px 10px;
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
      <StyledCheckbox>
        <input type="checkbox" />
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

      <StyledOutput>hier wird das Ergebnis angezeigt</StyledOutput>
    </>
  );
}

export default Statistic;
