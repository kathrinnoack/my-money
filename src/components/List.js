import React from "react";
import styled from "styled-components";

const StyledList = styled.div`
  background-color: #fffcf2;
  color: #4b5454;
  border: #4b5454 solid 2px;
  border-radius: 25px;
  padding: 5px 15px 5px 15px;
`;

const StyledDate = styled.p``;

function List() {
  return (
    <StyledList>
      <>
        <p>10.07.2019 </p>
        <p> - 12,50 </p>
        <p>Edeka, Lebensmittel</p>
      </>
    </StyledList>
  );
}

export default List;
