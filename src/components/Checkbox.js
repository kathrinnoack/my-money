import React from "react";
import styled from "styled-components";
import CalculateSaldo from "./CalculateSaldo";

const StyledCheckbox = styled.div`
  display: grid;
  grid-template-rows: 25px 25px 25px 25px 25px;
  grid-template-columns: 20px 3fr 20px 3fr 20px 3fr;
  margin: 15px 10px 15px 10px;
`;

function CheckboxMonth({ transactions }) {
  /* const [selectMonth, setSelectMonth] = React.useState(false);

  function handleMonth(event) {
    setSelectMonth(event.target.value);
  }*/
  console.log(transactions);

  return (
    <>
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
      <CalculateSaldo transactions={transactions} />
    </>
  );
}

export default CheckboxMonth;
