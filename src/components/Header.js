import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import logo from "../assets/Icon.png";
import statistic from "../assets/new_stati.png";

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #4b5454;
  padding: 10px 15px 10px 15px;
  z-index: 1;
`;

const StyledHeadTitle = styled.h1`
  color: #fffcf2;
  font-size: 30px;
  margin: 0px;
`;

const StyledIcon = styled.img`
  height: 60px;
  width: 55px;
  margin-left: 25px;
`;

function Header({ title, onClick, onClickHome }) {
  return (
    <StyledHeader>
      <StyledHeadTitle onClick={onClickHome}>{title}</StyledHeadTitle>
      <StyledIcon src={logo} alt="Geldsack" />
      <StyledIcon onClick={onClick} src={statistic} alt="Statistik Icon" />
    </StyledHeader>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
