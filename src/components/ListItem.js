import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fffcf2;
  color: #4b5454;
  border: #4b5454 solid 2px;
  font-size: 20px;
  border-radius: 25px;
  margin: 10px;
  padding: 10px 15px 10px 15px;
`;

const StyledListHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledDate = styled.div``;

const StyledAmount = styled.div`
  color: ${props => (Number(props.amount) > 0 ? "#037B49" : "#DB4141")};
`;

const StyledDescription = styled.p``;

const StyledTag = styled.button`
  background-color: #4b5454;
  color: #fffcf2;
  font-size: 20px;
  border-radius: 25px;
  margin-left: 5px;
`;

function ListItem({ date, amount, description, tag }) {
  return (
    <>
      <StyledList>
        <>
          <StyledListHead>
            <StyledDate>{date}</StyledDate>
            <StyledAmount amount={amount}>{amount}</StyledAmount>
          </StyledListHead>
          <StyledDescription>
            {description}
            <StyledTag>{tag}</StyledTag>
          </StyledDescription>
        </>
      </StyledList>
    </>
  );
}

ListItem.propTypes = {
  description: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired
};

export default ListItem;
