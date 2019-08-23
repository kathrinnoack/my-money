import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Dinero from "dinero.js";
import { StyledSaldoTitle } from "../components/Saldo";
import CheckCategory from "../components/StatisticCategory";
import CheckMonth from "../components/StatisticMonth";
import {
  Table,
  StyledTableRow,
  TableData,
  TableDataAmount
} from "../components/StyledTable";

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
    .filter(item => (month ? item.month === month : true))
    .sort((a, b) => a.description.localeCompare(b.description));

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

  const groupedByDescription = filteredTransactions.reduce(
    (allCategories, { description, amount }) => {
      if (!allCategories[description]) allCategories[description] = [];
      allCategories[description].push(Number(amount));
      return allCategories;
    },
    {}
  );
  console.log(groupedByDescription);

  const groupedDescriptionAmount = Object.keys(groupedByDescription).map(
    key => {
      return {
        [key]: groupedByDescription[key].reduce((acc, curr) => {
          return acc + curr;
        }, 0)
      };
    }
  );

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

      <Table>
        <tbody>
          <StyledTableRow>
            <TableData>
              <StyledSaldoTitle>Saldo</StyledSaldoTitle>
            </TableData>
            <TableDataAmount>
              {totalFilteredMonth.toFormat("$0,0.00")}
            </TableDataAmount>
          </StyledTableRow>
        </tbody>
      </Table>

      {groupedDescriptionAmount &&
        groupedDescriptionAmount.map(elem => (
          <Table>
            <tbody>
              <tr>
                <TableData>{Object.keys(elem)}</TableData>
                <TableDataAmount>
                  {Math.round(elem[Object.keys(elem)] * 100) / 100}
                  {" €"}
                </TableDataAmount>
              </tr>
            </tbody>
          </Table>
        ))}
    </>
  );
}

export default StatisticPage;
