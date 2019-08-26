import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Dinero from "dinero.js";
import { StyledSaldoTitle } from "../components/Saldo";
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

    setCategory(category);
  }

  const filteredTransactions = transactions
    .filter(item => (month ? item.month === month : true))
    .filter(item => (category ? item.category === category : true))
    .sort((a, b) => a.category.localeCompare(b.category));

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

  const groupedByCategory = filteredTransactions.reduce(
    (allCategories, { category, amount }) => {
      if (!allCategories[category]) allCategories[category] = 0;
      allCategories[category] = allCategories[category] + Number(amount);
      return allCategories;
    },
    {}
  );

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
      <div>
        {groupedByCategory &&
          Object.keys(groupedByCategory).map(key => (
            <Table key={key}>
              <tbody>
                <StyledTableRow>
                  <TableData>{key}</TableData>
                  <TableDataAmount>
                    {Math.round(groupedByCategory[key] * 100) / 100}
                    {" €"}
                  </TableDataAmount>
                </StyledTableRow>
              </tbody>
            </Table>
          ))}
      </div>
    </>
  );
}

export default FilterMonth;
