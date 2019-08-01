import React from "react";
import Header from "../components/Header";
import Saldo from "../components/Saldo";
import styled from "styled-components";

const StyledLandingPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: 10px;
`;

function LandingPage({ size, background, color }) {
  return (
    <>
      <Header title="My Money" />
      <StyledLandingPage>
        <Saldo size="L" background="dark" color="light" />
        <div>
          <StyledButton>Add expense</StyledButton>
          <StyledButton>Add income</StyledButton>
        </div>
      </StyledLandingPage>
    </>
  );
}

export default LandingPage;
