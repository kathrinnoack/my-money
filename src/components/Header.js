import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #4b5454;
  padding: 5px;
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

function Header() {
  return (
    <StyledHeader>
      <StyledHeadTitle>My Money</StyledHeadTitle>
      <StyledIcon src="Icon.png" alt="Geldsack" />
    </StyledHeader>
  );
}

export default Header;
