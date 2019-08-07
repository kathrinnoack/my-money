import React from "react";
import styled from "styled-components";

const Container = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 35px 10px 10px 10px;
  font-size: 26px;
`;

const StyledType = styled.select`
  background-color: #fffdf6;
  border: 1px rgba(75, 84, 84, 0.6) solid;
  font-size: 18px;
  border-radius: 10px;
  margin-bottom: 20px;
  padding-left: 15px;
  font-family: sans-serif;
  color: #4b5454;
  opacity: 0.5;
  :focus {
    font-size: 18px;
    color: #4b5454;
    padding-left: 10px;
  }
`;

const StyledDate = styled.input`
  background-color: #fffdf6;
  border: 1px rgba(75, 84, 84, 0.6) solid;
  font-size: 18px;
  border-radius: 10px;
  margin-bottom: 20px;
  padding-left: 15px;
  font-family: sans-serif;
  color: #4b5454;
`;
const StyledAmount = styled.input`
  background-color: #fffdf6;
  border: 1px rgba(75, 84, 84, 0.6) solid;
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
  border: none;
  color: #fffcf2;
  border-radius: 10px;
  margin: 12px 0 12px 0;
  opacity: 0.6;
`;

const StyledCategory = styled.select`
  background-color: #fffdf6;
  border: 1px rgba(75, 84, 84, 0.6) solid;
  font-size: 18px;
  border-radius: 10px;
  padding-left: 15px;
  margin-bottom: 20px;
  font-family: sans-serif;
  color: #4b5454;
  opacity: 0.5;
`;

const StyledTextarea = styled.textarea`
  background-color: #fffdf6;
  border: 1px rgba(75, 84, 84, 0.6) solid;
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
  const [listValues, setListValues] = React.useState({
    type: "",
    date: "",
    description: "",
    amount: "",
    category: ""
  });

  const [errors, setErrors] = React.useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setListValues({
      ...listValues,
      [name]: value
    });
  }

  function validate() {
    const errors = {};

    if (listValues.type.trim() === "") {
      errors.type = "Bitte auswählen";
    }

    if (listValues.date.trim() === "") {
      errors.date = "Bitte Datum auswählen";
    }

    if (listValues.amount.trim() === "") {
      errors.amount = "Bitte Betrag eingeben";
    }

    if (listValues.category.trim() === "") {
      errors.category = "Bitte auswählen";
    }

    return Object.keys(errors).length === 0 ? null : errors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const errors = validate();

    if (errors) {
      setErrors(errors);
      return;
    }

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
          onChange={handleChange}
          value={listValues}
          error={errors.type}
        >
          <option value="Ausgabe">Ausgabe</option>
          <option value="Einnahme">Einnahme</option>
        </StyledType>
        <Button>Datum:</Button>
        <StyledDate type="date" name="date" onChange={handleChange} />
        <Button>Kategorie:</Button>
        <StyledCategory
          name="category"
          placeholder="Bitte auswählen"
          required
          onChange={handleChange}
        >
          <option value="">Bitte auswählen!</option>
          <option value="Gehalt">Gehalt</option>
          <option value="Bareinzahlung">Bareinzahlung</option>
          <option value="Lebensmittel">Lebensmittel</option>
          <option value="Lebensmittel">Kleidung</option>
        </StyledCategory>
        <Button>Betrag:</Button>
        <StyledAmount
          name="amount"
          required
          type="number"
          step="0.01"
          placeholder="Betrag xx,yy"
          onChange={handleChange}
        />

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
