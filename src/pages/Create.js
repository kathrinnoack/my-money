import React from "react";
import Header from "../components/Header";
import CreateForm from "../components/CreateForm";

function Create({ plusType, minusType, onCreate, history }) {
  function handleCreate(transaction) {
    onCreate(transaction);
    history.push("/list");
  }

  return (
    <>
      <Header title="My Money" />
      <CreateForm
        minusType={minusType}
        plusType={plusType}
        onCreate={handleCreate}
      />
    </>
  );
}

export default Create;
