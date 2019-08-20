import React from "react";
import Statistic from "../components/Statistic";
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

function StatisticPage({ transactions, history }) {
  const [month, setMonth] = React.useState();
  const [category, setCategory] = React.useState();
  console.log(category);

  function handleHome() {
    history.push("/");
  }

  function handleCategory(event) {
    const category = event.target.value;
    setCategory(category);
  }

  const filteredTransactionsCategory = transactions.filter(
    item => item.category === category
  );
  console.log(filteredTransactionsCategory);

  const totalFilteredCategory = filteredTransactionsCategory
    .map(elem => parseInt(elem.amount * 100))
    .reduce((acc, curr) => {
      return acc.add(Dinero({ amount: curr }));
    }, Dinero({ amonut: 0 }));

  function handleMonth(event) {
    const month = event.target.value;
    setMonth(month);
  }
  const filteredTransactionsMonth = transactions.filter(
    item => item.month === month
  );

  /* const filteredMonth = filteredTransactions.filter(
    item => item.category === category
  );*/

  const totalFilteredMonth = filteredTransactionsMonth
    .map(elem => parseInt(elem.amount * 100))
    .reduce(
      (acc, curr) => {
        return acc.add(Dinero({ amount: curr }));
      },
      Dinero({
        amount: 0
      })
    );

  const groupedByCategory = filteredTransactionsMonth.reduce(
    (allCategories, { category, amount }) => {
      if (!allCategories[category]) allCategories[category] = [];
      allCategories[category].push(amount);
      return allCategories;
    },
    [{}]
  );
  console.log(groupedByCategory);

  return (
    <>
      <Header title="My Money" onClickHome={handleHome} />
      <Statistic
        transactions={transactions}
        handleMonth={handleMonth}
        handleCategory={handleCategory}
      />

      <StyledFilteredSaldo>
        <StyledSaldoTitle>Saldo</StyledSaldoTitle>
        <p>{totalFilteredMonth.toFormat("$0,0.00")}</p>
      </StyledFilteredSaldo>
      <div>
        {filteredTransactionsMonth &&
          filteredTransactionsMonth.map(transaction => (
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
      <p>{totalFilteredCategory.toFormat("$0,0.00")}</p>
      {filteredTransactionsCategory &&
        filteredTransactionsCategory.map(transactions => (
          <Table>
            <tbody>
              <tr>
                <td>{transactions.description}</td>
                <td>{transactions.amount.replace(".", ",")}</td>
              </tr>
            </tbody>
          </Table>
        ))}
      <div />
    </>
  );
}

export default StatisticPage;
