import React from "react";
import Statistic, { WhiteSpace } from "../components/Statistic";
import Header from "../components/Header";
import styled from "styled-components";
import Dinero from "dinero.js";
import { StyledSaldoTitle } from "../components/Saldo";

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

function StatisticPage({ transactions }) {
  const [month, setMonth] = React.useState();
  /*const [category, setCategory] = React.useState();

  function handleCategory(event) {
    const category = event.target.value;
    setCategory(category);
    console.log(category);
  }*/

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

  return (
    <>
      <Header title="My Money" />
      <Statistic transactions={transactions} handleMonth={handleMonth} />
      <WhiteSpace />
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
                  <td>{transaction.category}</td>
                  <td> {transaction.amount.replace(".", ",")}</td>
                </tr>
              </tbody>
            </Table>
          ))}

        {/*} {filteredMonth &&
          filteredMonth.map(item => (
            <div>
              {item.category} {item.amount}
          </div>
          ))}*/}
      </div>
    </>
  );
}

export default StatisticPage;
