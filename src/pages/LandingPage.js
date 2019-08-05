import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Saldo from "../components/Saldo";
import { PlusButton, MinusButton } from "../components/ActionButton";
import { Link } from "react-router-dom";
import { stringLiteralTypeAnnotation } from "@babel/types";

const Page = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
`;

function LandingPage() {
  //const [type, setType] = React.useState();

  function handleClick() {
    console.log("clicked");
  }

  return (
    <>
      <Header title="My Money" />
      <Page>
        <Saldo title="Saldo" size="L" background="dark" color="light" />
      </Page>
      <Link to="/create">
        <MinusButton type="button" onClick={handleClick} value="Ausgabe" />
      </Link>
      <Link to="/create">
        <PlusButton onClick={handleClick} value="Einnahme" />
      </Link>
    </>
  );
}

export default LandingPage;
