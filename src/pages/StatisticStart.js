import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { StyledSubmitButton } from "../components/StyledCreateForm";
import { Link } from "react-router-dom";

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledPlacedButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Text = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-weight: bold;
`;

const Whitespace = styled.div`
  height: 50px;
`;

function StatisticStart({ history }) {
  function handleHome() {
    history.push("/");
  }

  return (
    <StyledPage>
      <Header title="My Money" onClickHome={handleHome} />
      <Whitespace />
      <Text>Was möchtest du sehen?</Text>
      <Whitespace />
      <StyledPlacedButtons>
        <Link to="/statistic/month">
          <StyledSubmitButton>Monat?</StyledSubmitButton>
        </Link>
        <Link to="/statistic/category">
          <StyledSubmitButton>Kategorie?</StyledSubmitButton>
        </Link>
      </StyledPlacedButtons>
    </StyledPage>
  );
}

export default StatisticStart;
