import React from "react";
import SearchName from "./Components/SearchName";
import PersonDisplayContainer from "./Components/PersonDisplayContainer";
import {
  AppStyleContainer,
  StyledText,
  StyledHeader,
} from "./Components/styles";
import "./App.css";

// given more time, would add tests
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
