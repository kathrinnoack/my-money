import styled from "styled-components";

export const Table = styled.table`
  margin: 10px;
  font-size: 22px;
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  td:nth-child(2) {
    padding-left: 10px;
  }
`;

export const StyledTableRow = styled.tr`
  margin: 0 10px 0 10px;
`;

export const TableData = styled.td`
  padding-left: 10px;
  width: 60%;
`;

export const TableDataAmount = styled.td`
  padding-right: 30px;
  text-align: right;
`;
