import React from "react";
import styled from "styled-components";

const StyledSaldo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
  padding: 10px 15px 10px 15px;
`;

const StyledSaldoTitle = styled.p`
  display: flex;
  flex-direction: flex-start;
`;

const StyledSaldoAmount = styled.p`
  display: flex;
  flex-direction: flex-end;
`;

function Saldo() {
  return (
    <StyledSaldo>
      <StyledSaldoTitle>Saldo</StyledSaldoTitle>
      <StyledSaldoAmount>+123,45</StyledSaldoAmount>
    </StyledSaldo>
  );
}

export default Saldo;
