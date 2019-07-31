import React from "react";
import Header from "../components/Header";
import Saldo from "../components/Saldo";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: 10px;
`;

const StyledSaldo = styled(Saldo)`
  border-radius: 25px;
`;

function LandingPage({ size, background, color }) {
  return (
    <>
      <Header title="My Money" />
      <StyledSaldo size="L" background="dark" color="light" />
      <div>
        <StyledButton>Add expense</StyledButton>
        <StyledButton>Add income</StyledButton>
      </div>
    </>
  );
}

export default LandingPage;
