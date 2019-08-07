import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const StyledInput = styled.input`
  border: 1px gray solid;
  border-radius: 3px;
  font-size: 20px;
  width: 100%;
`;

const Error = styled.div`
  color: #db4141;
  background: rgba(255, 0, 0, 0.4);
`;

function InputError({ error, className, ...props }) {
  return (
    <Container className={className}>
      <StyledInput {...props} />
      {error && <Error>{error}</Error>}
    </Container>
  );
}

export default InputError;