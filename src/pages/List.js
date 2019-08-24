import React from "react";
import styled from "styled-components";
import ListItem from "../components/ListItem.js";
import Header from "../components/Header.js";
import Saldo from "../components/Saldo.js";
import { MinusButton, PlusButton } from "../components/ActionButton.js";
import { Link } from "react-router-dom";

const StyledPlacedButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0 15px 0 15px;
`;

function List({ transactions, history }) {
  function renderListItem(transaction) {
    return (
      <ListItem
        key={transaction.id}
        type={transaction.type}
        date={transaction.date}
        description={transaction.description}
        amount={transaction.amount}
        category={transaction.category}
      />
    );
  }
  console.log(transactions);

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
      {transactions && transactions.map(item => renderListItem(item))}
      <Saldo saldoTitle="Saldo" transactions={transactions} />
      <StyledPlacedButtons>
        <Link to="/create/Ausgabe">
          <MinusButton buttonSize="M" />
        </Link>
        <Link to="/create/Einnahme">
          <PlusButton buttonSize="M" />
        </Link>
      </StyledPlacedButtons>
    </>
  );
}

export default List;
