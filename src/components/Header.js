import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #4b5454;
  padding: 5px;
  z-index: 1;
`;

const StyledHeadTitle = styled.h1`
  color: #fffcf2;
  font-size: 30px;
  margin: 0px;
`;

const StyledIcon = styled.img`
  height: 65px;
  width: 60px;
  margin-left: 25px;
`;

function Header({ title, icon }) {
  return (
    <StyledHeader>
      <StyledHeadTitle>{title}</StyledHeadTitle>
      <StyledIcon src="Icon.png" alt="Geldsack">
        {icon}
      </StyledIcon>
    </StyledHeader>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.symbol
};

export default Header;
