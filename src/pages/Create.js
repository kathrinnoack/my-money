import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

const Container = styled.form`
  display: flex;
  flex-direction: column;
  margin: 10px;
  font-size: 26px;
`;

const StyledDate = styled.input`
  border: 2px #4b5454 solid;
  font-size: 26px;
  border-radius: 25px;
  margin: 5px;
`;

const StyledAmount = styled.input`
  border: 2px #4b5454 solid;
  font-size: 26px;
  border-radius: 25px;
  margin: 5px;
`;

const Button = styled.button`
  font-size: 26px;
  background-color: #4b5454;
  color: #fffcf2;
  border-radius: 25px;
`;

function Create() {
  return (
    <>
      <Header title="My Money" />

      <Container>
        <Button>Datum:</Button>
        <StyledDate />

        <span>
          Kategorie:
          <input />
        </span>
        <span>
          Betrag:
          <StyledAmount />
        </span>
        <span>
          Kommentar: <textarea />
        </span>
      </Container>
    </>
  );
}

export default Create;
