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

function LandingPage({ history }) {
  function handleCreate() {
    history.push("/create");
  }
  console.log(handleCreate("geklickt"));
  return (
    <>
      <Header title="My Money" />
      <Page>
        <Saldo title="Saldo" size="L" background="dark" color="light" />
      </Page>
      <MinusButton onClick={handleCreate} />
      <PlusButton onClick={handleCreate} />
    </>
  );
}

export default LandingPage;
