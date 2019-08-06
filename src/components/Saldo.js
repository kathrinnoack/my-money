import React from "react";
import styled from "styled-components";
import CalculateSaldo from "./CalculateSaldo";
import PropTypes from "prop-types";

const sizes = {
  S: "22px",
  M: "26px",
  L: "30px"
};

function getSize(size) {
  return sizes[size] || sizes.S;
}

const background = {
  light: "#fffcf2",
  dark: "#4b5454"
};

function getBackground(color) {
  return background[color] || background.light;
}

const color = {
  dark: "#4b5454",
  light: "#fffcf2"
};

function getColor(textColor) {
  return color[textColor] || color.dark;
}

const StyledSaldo = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: #4b5454 solid 4px;
  background-color: ${props => getBackground(props.background)};
  color: ${props => getColor(props.color)};
  font-size: ${props => getSize(props.size)};
  font-weight: bold;
  margin: 15px 10px 15px 10px;
  padding: 0 15px 0 15px;
`;

const StyledSaldoTitle = styled.p`
  display: flex;
  flex-direction: flex-start;
  color: ${props => getColor(props.color)};
  padding-right: 10px;
`;

function Saldo({ size, background, color, transactions }) {
  return (
    <StyledSaldo size={size} background={background} color={color}>
      <StyledSaldoTitle color={color}>Saldo</StyledSaldoTitle>
      <CalculateSaldo transactions={transactions} />
    </StyledSaldo>
  );
}

Saldo.propTypes = {
  saldoTitle: PropTypes.string,
  size: PropTypes.oneOf(["S", "M", "L"]),
  background: PropTypes.oneOf(["light", "dark"]),
  color: PropTypes.oneOf(["dark", "light"])
};

Saldo.defaultProps = {
  size: "S",
  background: "light",
  color: "dark"
};

export default Saldo;
