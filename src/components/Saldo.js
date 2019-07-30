import React from "react";
import styled from "styled-components";
import CalculateSaldo from "./CalculateSaldo";
import Dinero from "dinero.js";
Dinero.defaultCurrency = "EUR";

const StyledSaldo = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: #4b5454 solid 4px;
  font-size: 22px;
  font-weight: bold;
  margin: 15px 10px 15px 10px;
  padding: 0 15px 0 15px;
`;

const StyledSaldoTitle = styled.p`
  display: flex;
  flex-direction: flex-start;
`;

function Saldo() {
  return (
    <StyledSaldo>
      <StyledSaldoTitle>Saldo</StyledSaldoTitle>
      <CalculateSaldo />
    </StyledSaldo>
  );
}

export default Saldo;
