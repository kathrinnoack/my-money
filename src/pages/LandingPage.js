import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Saldo from "../components/Saldo";
import { PlusButton, MinusButton } from "../components/ActionButton";
import { Link } from "react-router-dom";

const Page = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 75vh;
`;

const StyledMinusButton = styled(MinusButton)`
  position: absolute;
  left: 30px;
  bottom: 50px;
`;

const StyledPlusButton = styled(PlusButton)`
  position: absolute;
  right: 30px;
  bottom: 50px;
`;

function LandingPage({ transactions }) {
  function handleClick() {}

  return (
    <>
      <Header title="My Money" />
      <Page>
        <Saldo
          title="Saldo"
          size="L"
          background="dark"
          color="light"
          transactions={transactions}
        />

        <Link to="/create">
          <StyledMinusButton onClick={handleClick} value="Ausgabe" />
        </Link>

        <Link to="/create">
          <StyledPlusButton onClick={handleClick} value="Einnahme" />
        </Link>
      </Page>
    </>
  );
}

export default LandingPage;
