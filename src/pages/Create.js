import React from "react";
import Header from "../components/Header";
import CreateForm from "../components/CreateForm";

function Create({ onCreate, history, transactions, match }) {
  function handleCreate(transaction) {
    onCreate(transaction);
    history.push("/list");
  }
  function handleHome() {
    history.push("/");
  }

  function handleStatistic() {
    history.push("/statistic");
  }

  return (
    <>
      <Header
        title="My Money"
        onClick={handleStatistic}
        onClickHome={handleHome}
      />
      <CreateForm
        type={match.params.type}
        onCreate={handleCreate}
        transactions={transactions}
      />
    </>
  );
}

export default Create;
