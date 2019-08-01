import React from "react";
import styled from "styled-components";

const StyledMinusButton = styled.button`
  position: absolute;
  bottom: 80px;
  left: 40px;
  border: none;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 10px;
  background-color: #db4141;
  color: #fffcf2;
  font-size: 70px;
`;

const StyledPlusButton = styled.button`
  position: absolute;
  bottom: 80px;
  right: 40px;
  border: none;
  width: 80px;
  height: 80px;
  line-height: 80px;
  border-radius: 50%;
  margin: 10px;
  background-color: #037b49;
  color: #fffcf2;
  font-size: 70px;
`;

export function MinusButton() {
  return (
    <div>
      <StyledMinusButton>&#8722;</StyledMinusButton>
    </div>
  );
}

export function PlusButton() {
  return (
    <div>
      <StyledPlusButton>&#43;</StyledPlusButton>
    </div>
  );
}
