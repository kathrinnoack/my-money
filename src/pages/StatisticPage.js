import React from "react";
import Statistic, { WhiteSpace } from "../components/Statistic";
import Header from "../components/Header";
import styled from "styled-components";
import Dinero from "dinero.js";

const Filtered = styled.div`
  margin: 10px;
  font-size: 22px;
  display: grid;
  height: auto;
  grid-template-columns: 180px 1fr;
`;

const StyledFilteredSaldo = styled.div`
  margin: 10px;
  font-size: 22px;
`;
const StyledCategory = styled.p``;

const StyledAmount = styled.p``;

function StatisticPage({ transactions }) {
  const [month, setMonth] = React.useState();
  const [category, setCategory] = React.useState();

  function handleCategory(event) {
    const category = event.target.value;
    setCategory(category);
    console.log(category);
  }

  function handleMonth(event) {
    const month = event.target.value;
    setMonth(month);
  }
  const filteredTransactions = transactions.filter(
    item => item.month === month
  );

  /* const filteredMonth = filteredTransactions.filter(
    item => item.category === category
  );*/

  const totalFilteredMonth = filteredTransactions
    .map(elem => parseInt(elem.amount * 100))
    .reduce((acc, curr) => {
      return acc.add(Dinero({ amount: curr }));
    }, Dinero({ amount: 0 }));
  console.log(totalFilteredMonth);

  return (
    <>
      <Header title="My Money" />
      <Statistic
        transactions={transactions}
        handleMonth={handleMonth}
        handleCategory={handleCategory}
      />
      <WhiteSpace />
      <WhiteSpace />
      <StyledFilteredSaldo>
        <p>{totalFilteredMonth.toFormat("$0,0.00")}</p>
      </StyledFilteredSaldo>
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

        {/*} {filteredMonth &&
          filteredMonth.map(item => (
            <div>
              {item.category} {item.amount}
          </div>
          ))}*/}
      </Filtered>
    </>
  );
}

export default StatisticPage;
