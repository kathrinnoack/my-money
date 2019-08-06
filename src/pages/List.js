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

function List({ transactions }) {
  function renderListItem(transaction) {
    return (
      <ListItem
        type={transaction.type}
        date={transaction.date}
        description={transaction.description}
        amount={transaction.amount.replace(".", ",")}
        category={transaction.category}
      />
    );
  }
  console.log(transactions);
  return (
    <>
      <Header title="My Money" />
      {transactions && transactions.map(item => renderListItem(item))}
      <Saldo saldoTitle="Saldo" transactions={transactions} />
      <StyledPlacedButtons>
        <Link to="/create">
          <MinusButton buttonSize="M" />
        </Link>
        <Link to="/create">
          <PlusButton buttonSize="M" />
        </Link>
      </StyledPlacedButtons>
    </>
  );
}

export default List;
