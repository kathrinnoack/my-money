import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Saldo from "../components/Saldo";
import { PlusButton, MinusButton } from "../components/ActionButton";

const Page = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
`;

function LandingPage({ size, background, color }) {
  return (
    <>
      <Header title="My Money" />
      <Page>
        <Saldo size="L" background="dark" color="light" />
      </Page>
      <MinusButton />
      <PlusButton />
    </>
  );
}

export default LandingPage;
