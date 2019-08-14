import styled from "styled-components";

export const StyledType = styled.input`
  background-color: #fffdf6;
  border: 1px rgba(75, 84, 84, 0.6) solid;
  border-radius: 5px;
  font-size: 22px;
  margin-bottom: 20px;
  padding: 5px 5px 5px 10px;
  font-family: sans-serif;
  color: #4b5454;
  ::placeholder {
    font-size: 18px;
    color: rgba(75, 84, 84, 0.6);
    padding: 5px 5px 5px 10px;
  }
`;

export const StyledDate = styled.input`
  background-color: #fffdf6;
  border: 1px rgba(75, 84, 84, 0.6) solid;
  font-size: 18px;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 5px 5px 5px 10px;
  font-family: sans-serif;
  color: #4b5454;
`;

export const StyledAmount = styled.input`
  background-color: #fffdf6;
  border: 1px rgba(75, 84, 84, 0.6) solid;
  font-size: 18px;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 5px 5px 5px 10px;
  ::placeholder {
    font-size: 18px;
    color: #4b5454;
    opacity: 0.5;
    padding: 5px 5px 5px 10px;
  }
`;

export const InputTitle = styled.span`
  padding: 5px 5px 5px 10px;
  font-size: 22px;
  background-color: #4b5454;
  border: none;
  color: #fffcf2;
  border-radius: 5px;
  margin: 12px 0 12px 0;
  opacity: 0.6;
`;
