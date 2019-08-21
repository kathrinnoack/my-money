import React from "react";

import Header from "../components/Header";
import styled from "styled-components";
import Dinero from "dinero.js";
import { StyledSaldoTitle } from "../components/Saldo";
import CheckMonth from "../components/StatisticMonth";
import CheckCategory from "../components/StatisticCategory";

const Table = styled.table`
  margin: 10px;
  font-size: 22px;
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  padding: 10px;
  margin: 10px;
  td:nth-child(2) {
    padding: 10px;
  }
`;

const StatisticHeadline = styled.h3`
  margin: 10px;
`;

function FilterMonth({ transactions, history }) {
  const [month, setMonth] = React.useState("");
  const [category, setCategory] = React.useState("");

  function handleHome() {
    history.push("/");
  }

  function handleStatistic() {
    history.push("/statistic");
  }

  function handleMonth(event) {
    const month = event.target.value;
    setMonth(month);
  }

  function handleCategory(event) {
    const category = event.target.value;
    console.log(category, "yeah");
    setCategory(category);
  }

  const filteredTransactions = transactions
    .filter(item => (month ? item.month === month : true))
    .filter(item => (category ? item.category === category : true));

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
      <CheckMonth
        transactions={transactions}
        handleMonth={handleMonth}
        handleCategory={handleCategory}
      />
      <CheckCategory
        transactions={transactions}
        handleMonth={handleMonth}
        handleCategory={handleCategory}
      />
      <Table>
        <tbody>
          <tr>
            <td>
              <StyledSaldoTitle>Saldo</StyledSaldoTitle>{" "}
            </td>
            <td>{totalFilteredMonth.toFormat("$0,0.00")}</td>
          </tr>
        </tbody>
      </Table>
      <div>
        {filteredTransactions &&
          filteredTransactions.map(transaction => (
            <Table>
              <tbody>
                <tr>
                  <td>{transaction.category}</td>
                  <td> {transaction.amount.replace(".", ",")}</td>
                </tr>
              </tbody>
            </Table>
          ))}
      </div>
    </>
  );
}

export default FilterMonth;
