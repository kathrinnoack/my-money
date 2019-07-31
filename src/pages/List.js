import React from "react";
import listData from "./__mock__/list.json";
import ListItem from "../components/ListItem.js";
import Header from "../components/Header.js";
import Saldo from "../components/Saldo.js";

function List() {
  const [list, setList] = React.useState(listData);

  function renderListItem(list) {
    return (
      <ListItem
        date={list.date}
        description={list.description}
        amount={list.amount.replace(".", ",")}
        tag={list.tag}
      />
    );
  }

  return (
    <>
      <Header title="My Money" />
      {list.map(item => renderListItem(item))}
      <Saldo saldo="Saldo" />
    </>
  );
}

export default List;
