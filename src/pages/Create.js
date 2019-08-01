import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

const Container = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 35px 10px 10px 10px;
  font-size: 26px;
`;

const StyledDate = styled.input`
  background-color: #fffdf6;
  border: 2px #4b5454 solid;
  font-size: 26px;
  border-radius: 25px;
  margin-bottom: 20px;

  ::placeholder {
    font-size: 20px;
    color: #4b5454;
    opacity: 0.5;
    padding-left: 10px;
  }
`;

const StyledAmount = styled.input`
  background-color: #fffdf6;
  border: 2px #4b5454 solid;
  font-size: 26px;
  border-radius: 25px;
  margin-bottom: 20px;
  ::placeholder {
    font-size: 20px;
    color: #4b5454;
    opacity: 0.5;
    padding-left: 10px;
  }
`;

const Button = styled.button`
  font-size: 26px;
  background-color: #4b5454;
  color: #fffcf2;
  border-radius: 25px;
  margin: 5px 0 5px 0;
`;

const StyledCategory = styled.select`
  background-color: #fffdf6;
  border: 2px #4b5454 solid;
  font-size: 22px;
  border-radius: 25px;
  margin-bottom: 20px;
  ::placeholder {
    font-size: 20px;
    color: #4b5454;
    opacity: 0.5;
    padding-left: 10px;
  }
`;

const StyledTextarea = styled.textarea`
  background-color: #fffdf6;
  border: 2px #4b5454 solid;
  font-family: sans-serif;
  font-size: 22px;
  border-radius: 25px;
  ::placeholder {
    font-size: 20px;
    color: #4b5454;
    opacity: 0.5;
    padding-left: 10px;
  }
`;

const StyledSubmitButton = styled.button`
  position: fixed;
  display: flex;
  justify-content: center;
  align-self: center;
  font-size: 26px;
  width: 150px;
  background-color: #4b5454;
  color: #fffcf2;
  border-radius: 25px;
  bottom: 120px;
`;

function Create() {
  return (
    <>
      <Header title="My Money" />
      <Container>
        <Button>Datum:</Button>
        <StyledDate type="text" placeholder="Datum" />
        <Button>Kategorie:</Button>
        <StyledCategory name="category" placeholder="Bitte auswählen">
          <option value="">Bitte auswählen!</option>
          <option value="Gehalt">Gehalt</option>
          <option value="Bareinzahlung">Bareinzahlung</option>
        </StyledCategory>
        <Button>Betrag:</Button>
        <StyledAmount type="text" placeholder="Betrag xx,yy" />
        <Button>Kommentar:</Button>
        <StyledTextarea
          type="text"
          placeholder="sonstige Kommentare (z.B. REWE, Freibad Eintritt, etc.)?"
        />
        <StyledSubmitButton type="submit">Hinzufügen</StyledSubmitButton>
      </Container>
    </>
  );
}

export default Create;
