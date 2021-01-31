import React from "react";
import styled from "styled-components";
import SearchName from "./Components/SearchName";
import PersonDisplayContainer from "./Components/PersonDisplayContainer";
import "./App.css";

const AppStyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  padding-bottom: 10px;
`;

const StyledHeader = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  padding-bottom: 10px;
  color: midnightblue;
`;

function App() {
  return (
    <AppStyleContainer>
      <StyledHeader className="App">The Person Finder</StyledHeader>
      <StyledText>
        If you just can't find someone and need to know what they look like,
        you've come to the right place! Just type the name of the person you are
        looking for below into the search box!
      </StyledText>
      <SearchName />
      <PersonDisplayContainer />
    </AppStyleContainer>
  );
}

export default App;
