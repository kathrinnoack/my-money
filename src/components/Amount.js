import React from "react";
import Dinero from "dinero.js";
import styled from "styled-components";

const StyledAmount = styled.input`
  background-color: #fffdf6;
  border: 1px rgba(75, 84, 84, 0.6) solid;
  font-size: 22px;
  border-radius: 10px;
  margin-bottom: 20px;
  padding-left: 15px;
  ::placeholder {
    font-size: 18px;
    color: #4b5454;
    opacity: 0.5;
    padding-left: 10px;
  }
`;

function Amount() {
  return (
    <StyledAmount
      name="amount"
      required
      type="number"
      step="0.01"
      //value="0.00" braucht onChange oder readonly
      placeholder="Betrag xx,yy"
    />
  );
}

export default Amount;
