import styled from "styled-components";

export const Container = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 35px 10px 10px 10px;
  font-size: 26px;
`;

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
  padding: 10px 10px 10px 10px;
  font-size: 22px;
  background-color: #4b5454;
  border: none;
  color: #fffcf2;
  border-radius: 5px;
  margin: 12px 0 12px 0;
  opacity: 0.6;
`;

export const StyledTextarea = styled.textarea`
  background-color: #fffdf6;
  border: 1px rgba(75, 84, 84, 0.6) solid;
  font-family: sans-serif;
  font-size: 18px;
  border-radius: 5px;
  padding: 5px 5px 5px 10px;
  margin-bottom: 20px;
  ::placeholder {
    font-size: 18px;
    color: #4b5454;
    opacity: 0.5;
    padding-left: 10px;
  }
`;

export const StyledSubmitButton = styled.button`
  justify-content: center;
  align-self: center;
  font-size: 22px;
  width: 150px;
  margin: 10px;
  padding: 5px;
  background-color: #4b5454;
  color: #fffcf2;
  border-radius: 25px;
  border: none;
`;

export const StyledError = styled.span`
  font-size: 22px;
  font-weight: bold;
  background-color: rgba(219, 65, 65, 0.5);
  color: rgba(219, 65, 65);
  width: 100%;
  padding-left: 10px;
  margin: 0;
`;
