export function getFromLocal(transactions) {
  return JSON.parse(localStorage.getItem(transactions));
}

export function setToLocal(transactions, listdata) {
  return localStorage.setItem(transactions, JSON.stringify(listdata));
}
