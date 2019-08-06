import React from "react";
import styled from "styled-components";

const Container = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 35px 10px 10px 10px;
  font-size: 26px;
`;

const StyledType = styled.input`
  background-color: #fffdf6;
  border: 2px rgba(75, 84, 84, 0.6) solid;
  font-size: 22px;
  border-radius: 10px;
  margin-bottom: 20px;
  padding-left: 15px;
  ::placeholder {
    font-size: 18px;
    color: #4b5454;
    opacity: 0.5;
    padding-left: 10px;
  }
`;

const StyledDate = styled.input`
  background-color: #fffdf6;
  border: 2px rgba(75, 84, 84, 0.6) solid;
  font-size: 22px;
  border-radius: 10px;
  margin-bottom: 20px;
  padding-left: 15px;
  [type="date"] {
    font-family: sans-serif;
    font-size: 18px;
    color: #4b5454;
    opacity: 0.5;
    padding-left: 10px;
  }
`;

const StyledAmount = styled.input`
  background-color: #fffdf6;
  border: 2px rgba(75, 84, 84, 0.6) solid;
  font-size: 22px;
  border-radius: 10px;
  margin-bottom: 20px;
  padding-left: 15px;
  ::placeholder {
    font-size: 18px;
    color: #4b5454;
    opacity: 0.5;
    padding-left: 10px;
  }
`;

const Button = styled.span`
  padding-left: 15px;
  font-size: 22px;
  background-color: #4b5454;
  color: #fffcf2;
  border-radius: 10px;
  margin: 12px 0 12px 0;
  opacity: 0.6;
`;

const StyledCategory = styled.select`
  background-color: #fffdf6;
  border: 2px rgba(75, 84, 84, 0.6) solid;
  font-size: 22px;
  border-radius: 10px;
  padding-left: 15px;
  margin-bottom: 20px;
  ::placeholder {
    font-size: 18px;
    color: #4b5454;
    opacity: 0.5;
    padding-left: 10px;
  }
`;

const StyledTextarea = styled.textarea`
  background-color: #fffdf6;
  border: 2px rgba(75, 84, 84, 0.6) solid;
  font-family: sans-serif;
  font-size: 22px;
  border-radius: 10px;
  padding-left: 15px;
  margin-bottom: 20px;
  ::placeholder {
    font-size: 18px;
    color: #4b5454;
    opacity: 0.5;
    padding-left: 10px;
  }
`;

const StyledSubmitButton = styled.button`
  justify-content: center;
  align-self: center;
  font-size: 22px;
  width: 150px;
  background-color: #4b5454;
  color: #fffcf2;
  border-radius: 25px;
  border: none;
`;

function CreateForm({ onCreate }) {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const transaction = {
      type: form.type.value,
      date: form.date.value,
      category: form.category.value,
      amount: form.amount.value,
      description: form.description.value
    };
    onCreate(transaction);
    //console.log(transaction);
  }

  return (
    <>
      <Container onSubmit={handleSubmit}>
        <Button>Typ:</Button>
        <StyledType
          name="type"
          type="text"
          placeholder="Einnahme oder Ausgabe"
        />
        <Button>Datum:</Button>
        <StyledDate type="date" name="date" />
        <Button>Kategorie:</Button>
        <StyledCategory name="category" placeholder="Bitte auswählen">
          <option value="">Bitte auswählen!</option>
          <option value="Gehalt">Gehalt</option>
          <option value="Bareinzahlung">Bareinzahlung</option>
        </StyledCategory>
        <Button>Betrag:</Button>
        <StyledAmount name="amount" type="text" placeholder="Betrag xx,yy" />
        <Button>Kommentar:</Button>
        <StyledTextarea
          type="text"
          name="description"
          placeholder="sonstige Kommentare (z.B. REWE, Freibad Eintritt, etc.)?"
        />
        <StyledSubmitButton type="submit">Hinzufügen</StyledSubmitButton>
      </Container>
    </>
  );
}

export default CreateForm;
