import React from "react";
import listData from "./__mock__/list.json";
import ListItem from "../components/ListItem.js";

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

  return list.map(item => renderListItem(item));
}

export default List;
