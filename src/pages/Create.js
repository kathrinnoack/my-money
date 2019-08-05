import React from "react";
import Header from "../components/Header";
import CreateForm from "../components/CreateForm";

function Create({ history }) {
  return (
    <>
      <Header title="My Money" />
      <CreateForm />
    </>
  );
}

export default Create;
