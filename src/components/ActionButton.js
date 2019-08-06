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
  font-size: 50px;
`;

const StyledPlusButton = styled.button`
  position: absolute;
  bottom: 80px;
  right: 40px;
  margin: 10px;
  border: none;
  background-color: #037b49;
  color: #fffcf2;
  width: 80px;
  height: 80px;
  border-radius: 50px;
  font-size: 50px;
`;

export function MinusButton({ className, onClick, transactionType }) {
  return (
    <div>
      <StyledMinusButton
        className={className}
        onClick={onClick}
        transactionType={transactionType}
      >
        <i className="fas fa-minus" />
      </StyledMinusButton>
    </div>
  );
}

export function PlusButton({ className, onClick, transactionType }) {
  return (
    <div>
      <StyledPlusButton
        className={className}
        onClick={onClick}
        transactionType={transactionType}
      >
        <i className="fas fa-plus" />
      </StyledPlusButton>
    </div>
  );
}
