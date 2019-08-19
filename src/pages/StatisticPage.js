import React from "react";
import Statistic, { WhiteSpace } from "../components/Statistic";
import Header from "../components/Header";
import styled from "styled-components";

const Filtered = styled.div`
  margin: 10px;
  font-size: 22px;
  display: grid;
  height: auto;
  grid-template-columns: 180px 1fr;
`;

const StyledCategory = styled.p``;

const StyledAmount = styled.p``;

function StatisticPage({ transactions }) {
  const [month, setMonth] = React.useState();
  const [category, setCategory] = React.useState();
  console.log(transactions);
  console.log(month, "ein Monat");

  function handleCategory(event) {
    const category = event.target.value;
  }

  function handleMonth(event) {
    const month = event.target.value;

    setMonth(month);
    console.log(event.target.value);
    console.log(month);
  }
  const filteredTransactions = transactions.filter(
    item => item.month === month
  );

  const filteredMonth = filteredTransactions.filter(
    item => item.category === category
  );

  return (
    <>
      <Header title="My Money" />
      <Statistic transactions={transactions} handleMonth={handleMonth} />
      <WhiteSpace />
      <WhiteSpace />
      <Filtered>
        {filteredTransactions &&
          filteredTransactions.map(transaction => (
            <>
              <StyledCategory>{transaction.category}</StyledCategory>
              <StyledAmount>
                {transaction.amount.replace(".", ",")}
              </StyledAmount>
            </>
          ))}

        {filteredMonth &&
          filteredMonth.map(item => (
            <div>
              {item.category} {item.amount}
            </div>
          ))}
      </Filtered>
    </>
  );
}

export default StatisticPage;
