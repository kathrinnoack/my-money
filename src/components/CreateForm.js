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
  border: 1px rgba(75, 84, 84, 0.6) solid;
  border-radius: 5px;
  font-size: 22px;
  margin-bottom: 20px;
  padding: 5px 5px 5px 10px;
  font-family: sans-serif;
  color: #4b5454;
  ::placeholder {
    font-size: 18px;
    color: rgba(75, 84, 84, 0.6);
    padding: 5px 5px 5px 10px;
  }
`;

const StyledDate = styled.input`
  background-color: #fffdf6;
  border: 1px rgba(75, 84, 84, 0.6) solid;
  font-size: 18px;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 5px 5px 5px 10px;
  font-family: sans-serif;
  color: #4b5454;
`;
const StyledAmount = styled.input`
  background-color: #fffdf6;
  border: 1px rgba(75, 84, 84, 0.6) solid;
  font-size: 18px;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 5px 5px 5px 10px;
  ::placeholder {
    font-size: 18px;
    color: #4b5454;
    opacity: 0.5;
    padding: 5px 5px 5px 10px;
  }
`;

const InputTitle = styled.span`
  padding: 5px 5px 5px 10px;
  font-size: 22px;
  background-color: #4b5454;
  border: none;
  color: #fffcf2;
  border-radius: 5px;
  margin: 12px 0 12px 0;
  opacity: 0.6;
`;

const StyledCategory = styled.select`
  background-color: #fffdf6;
  border: 1px rgba(75, 84, 84, 0.6) solid;
  font-size: 18px;
  padding: 5px 5px 5px 10px;
  margin-bottom: 20px;
  font-family: sans-serif;
  color: #4b5454;
`;

const StyledTextarea = styled.textarea`
  background-color: #fffdf6;
  border: 1px rgba(75, 84, 84, 0.6) solid;
  font-family: sans-serif;
  font-size: 18px;
  border-radius: 5px;
  padding: 5px 5px 5px 10px;
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
  padding: 5px;
  background-color: #4b5454;
  color: #fffcf2;
  border-radius: 25px;
  border: none;
`;

const StyledError = styled.span`
  font-size: 22px;
  font-weight: bold;
  background-color: rgba(219, 65, 65, 0.5);
  color: rgba(219, 65, 65);
  width: 100%;
  padding-left: 10px;
  margin: 0;
`;

function CreateForm({ onCreate, minusType, plusType }) {
  const [errors, setErrors] = React.useState({});
  const [listValues, setListValues] = React.useState({
    type: "",
    date: "",
    description: "",
    amount: "",
    category: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setListValues({
      ...listValues,
      [name]: value
    });
  }

  function validate() {
    const errors = {};

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

    const transaction = {
      type: listValues.type,
      date: listValues.date,
      category: listValues.category,
      amount: listValues.amount,
      description: listValues.description
    };

    onCreate(transaction);
    //console.log(transaction);
  }

  return (
    <>
      <Container onSubmit={handleSubmit}>
        <InputTitle>Typ:</InputTitle>
        {errors.type && <StyledError>{errors.type}</StyledError>}
        <StyledType
          type="text"
          name="type"
          placeholder="Einnahme oder Ausgabe"
          value={minusType || plusType}
          error={errors.type}
          onChange={handleChange}
        />

        <InputTitle>Datum:</InputTitle>
        {errors.date && <StyledError>{errors.date}</StyledError>}
        <StyledDate
          type="date"
          name="date"
          onChange={handleChange}
          value={listValues.date}
          error={errors.date}
        />
        <InputTitle>Kategorie:</InputTitle>
        {errors.category && <StyledError>{errors.category}</StyledError>}
        <StyledCategory
          type="select"
          name="category"
          placeholder="Bitte auswählen"
          onChange={handleChange}
          value={listValues.category}
          error={errors.category}
        >
          <option value="">Bitte auswählen!</option>
          <option value="Gehalt">Gehalt</option>
          <option value="Bareinzahlung">Bareinzahlung</option>
          <option value="Lebensmittel">Lebensmittel</option>
          <option value="Kleidung">Kleidung</option>
        </StyledCategory>

        <InputTitle>Betrag:</InputTitle>
        {errors.amount && <StyledError>{errors.amount}</StyledError>}
        <StyledAmount
          name="amount"
          type="number"
          step="0.01"
          min="-99999"
          max="99999"
          placeholder="Betrag xx,yy"
          onChange={handleChange}
          value={listValues.amount}
          error={errors.amount}
        />

        <InputTitle>Kommentar:</InputTitle>
        <StyledTextarea
          type="text"
          name="description"
          placeholder="sonstige Kommentare (z.B. REWE, Freibad Eintritt, etc.)?"
          onChange={handleChange}
          value={listValues.description}
        />
        <StyledSubmitButton type="submit">Hinzufügen</StyledSubmitButton>
      </Container>
    </>
  );
}

export default CreateForm;
