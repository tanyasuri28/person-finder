import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import SearchName from "./Components/SearchName";
import PersonDisplayContainer from "./Components/PersonDisplayContainer";
import "./App.css";

const AppStyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <AppStyleContainer>
      <div className="App">the person finder</div>
      <div className="App">
        if you cant find someone you came to the right place
      </div>
      <SearchName />
      <PersonDisplayContainer />
    </AppStyleContainer>
  );
}

export default App;
