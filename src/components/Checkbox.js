import React from "react";
import styled from "styled-components";
//import CalculateSaldo from "./CalculateSaldo";

const StyledCheckbox = styled.div`
  display: grid;
  grid-template-rows: 25px 25px 25px 25px;
  grid-template-columns: 20px 3fr 20px 3fr 20px 3fr;
  margin: 10px 10px 10px 10px;
`;

function CheckboxMonth({ handleMonth, month }) {
  return (
    <>
      <StyledCheckbox onChange={handleMonth} value={month}>
        <input type="checkbox" value="01" />
        <label for="01">Januar</label>

        <input type="checkbox" value="02" />
        <label for="02" value="02">
          Februar
        </label>
        <input type="checkbox" value="03" />
        <label for="03" value="03">
          März
        </label>
        <input type="checkbox" value="04" />
        <label for="04" value="04">
          April
        </label>
        <input type="checkbox" value="05" />
        <label for="05" value="05">
          Mai
        </label>
        <input type="checkbox" value="06" />
        <label for="06" value="06">
          Juni
        </label>
        <input type="checkbox" value="07" />
        <label for="07" value="07">
          Juli
        </label>
        <input type="checkbox" value="08" />
        <label for="08" value="08">
          August
        </label>
        <input type="checkbox" value="09" />
        <label for="09" value="09">
          September
        </label>
        <input type="checkbox" value="10" />
        <label for="10" value="10">
          Oktober
        </label>
        <input type="checkbox" value="11" />
        <label for="11" value="11">
          November
        </label>
        <input type="checkbox" value="12" />
        <label for="12" value="12">
          Dezember
        </label>
      </StyledCheckbox>
    </>
  );
}

export default CheckboxMonth;
