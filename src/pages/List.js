import React from "react";
import listData from "./__mock__/list.json";
import ListItem from "../components/ListItem.js";
import Header from "../components/Header.js";
import Saldo from "../components/Saldo.js";

function List({ transactions }) {
  function renderListItem(transaction) {
    return (
      <ListItem
        type={transaction.type}
        date={transaction.date}
        description={transaction.description}
        amount={transaction.amount.replace(".", ",")}
        category={transaction.tag}
      />
    );
  }
  console.log(transactions);
  return (
    <>
      <Header title="My Money" />
      {transactions && transactions.map(item => renderListItem(item))}
      <Saldo saldoTitle="Saldo" transactions={transactions} />
    </>
  );
}

export default List;
