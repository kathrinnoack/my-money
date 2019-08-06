import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Saldo from "../components/Saldo";
import { PlusButton, MinusButton } from "../components/ActionButton";
import { Link } from "react-router-dom";

const Page = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
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
      </Page>
      <Link to="/create">
        <MinusButton onClick={handleClick} value="Ausgabe" />
      </Link>
      <Link to="/create">
        <PlusButton onClick={handleClick} value="Einnahme" />
      </Link>
    </>
  );
}

export default LandingPage;
