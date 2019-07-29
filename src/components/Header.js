import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  background-color: #4b5454;
  color: #fffcf2;
  font-size: 20px;
`;

function Header() {
  return <StyledHeader>My Money</StyledHeader>;
}

export default Header;
