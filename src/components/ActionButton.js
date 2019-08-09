import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const buttonSizes = {
  S: {
    fontSize: "20px",
    width: "50px",
    height: "50px"
  },
  M: {
    fontSize: "35px",
    width: "65px",
    height: "65px"
  },
  L: {
    fontSize: "50px",
    width: "80px",
    height: "80px"
  }
};

function getSize(buttonSize) {
  return buttonSizes[buttonSize] || buttonSizes.L;
}

const StyledMinusButton = styled.button`
  border: none;
  width: ${props => getSize(props.buttonSize).width};
  height: ${props => getSize(props.buttonSize).height};
  border-radius: 50%;
  margin: 10px;
  background-color: #db4141;
  color: #fffcf2;
  font-size: ${props => getSize(props.buttonSize).fontSize};
`;

const StyledPlusButton = styled.button`
  margin: 10px;
  border: none;
  background-color: #037b49;
  color: #fffcf2;
  width: ${props => getSize(props.buttonSize).width};
  height: ${props => getSize(props.buttonSize).height};
  border-radius: 50px;
  font-size: ${props => getSize(props.buttonSize).fontSize};
`;

export function MinusButton({ className, buttonSize, onClick, ...props }) {
  return (
    <div>
      <StyledMinusButton
        className={className}
        onClick={onClick}
        buttonSize={buttonSize}
        {...props}
      >
        <i className="fas fa-minus" />
      </StyledMinusButton>
    </div>
  );
}

export function PlusButton({ className, buttonSize, onClick, ...props }) {
  return (
    <div>
      <StyledPlusButton
        className={className}
        buttonSize={buttonSize}
        onClick={onClick}
        {...props}
      >
        <i className="fas fa-plus" />
      </StyledPlusButton>
    </div>
  );
}

PlusButton.propTypes = {
  buttonSize: PropTypes.oneOf(["S", "M", "L"])
};

PlusButton.defaultProp = {
  buttonSize: "S"
};
