import React from "react";
import DropdownCategory from "./DropdownCategory";
import {
  Container,
  StyledType,
  StyledDate,
  StyledAmount,
  InputTitle,
  StyledTextarea,
  StyledSubmitButton,
  StyledError
} from "./StyledCreateForm";

function CreateForm({ onCreate, type, category }) {
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

    console.log(name, value);
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
      type,
      date: listValues.date,
      category: listValues.category,
      amount: listValues.amount,
      description: listValues.description
    };

    onCreate(transaction);
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
          value={type}
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
        <DropdownCategory
          onChange={handleChange}
          value={category}
          type={type}
          error={errors.category}
        />

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
