import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Dinero from "dinero.js";
import { StyledSaldoTitle } from "../components/Saldo";
import CheckCategory from "../components/StatisticCategory";
import CheckMonth from "../components/StatisticMonth";

const StyledFilteredSaldo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  font-size: 22px;
`;

const Table = styled.table`
  margin: 10px;
  font-size: 22px;
`;
const StatisticHeadline = styled.h3`
  margin: 10px;
`;

function StatisticPage({ transactions, history }) {
  const [month, setMonth] = React.useState();
  const [category, setCategory] = React.useState();

  function handleHome() {
    history.push("/");
  }

  function handleStatistic() {
    history.push("/statistic");
  }

  function handleCategory(event) {
    const category = event.target.value;
    setCategory(category);
  }

  function handleMonth(event) {
    const month = event.target.value;
    setMonth(month);
  }

  const filteredTransactions = transactions
    .filter(item => (category ? item.category === category : true))
    .filter(item => (month ? item.month === month : true));

  const totalFilteredMonth = filteredTransactions
    .map(elem => parseInt(elem.amount * 100))
    .reduce(
      (acc, curr) => {
        return acc.add(Dinero({ amount: curr }));
      },
      Dinero({
        amount: 0
      })
    );

  /* const groupedByCategory = filteredTransactionsMonth.reduce(
    (allCategories, { category, amount }) => {
      if (!allCategories[category]) allCategories[category] = [];
      allCategories[category].push(amount);
      return allCategories;
    },
    [{}]
  );
  console.log(groupedByCategory);
*/
  return (
    <>
      <Header
        title="My Money"
        onClickHome={handleHome}
        onClick={handleStatistic}
      />
      <StatisticHeadline>Auswahl:</StatisticHeadline>
      <CheckCategory
        transactions={transactions}
        handleMonth={handleMonth}
        handleCategory={handleCategory}
      />
      <CheckMonth
        transactions={transactions}
        handleMonth={handleMonth}
        handleCategory={handleCategory}
      />

      <StyledFilteredSaldo>
        <StyledSaldoTitle>Saldo</StyledSaldoTitle>
        <p>{totalFilteredMonth.toFormat("$0,0.00")}</p>
      </StyledFilteredSaldo>
      <div>
        {filteredTransactions &&
          filteredTransactions.map(transaction => (
            <Table>
              <tbody>
                <tr>
                  <td>{transaction.description}</td>
                  <td> {transaction.amount.replace(".", ",")}</td>
                </tr>
              </tbody>
            </Table>
          ))}
      </div>
    </>
  );
}

export default StatisticPage;
