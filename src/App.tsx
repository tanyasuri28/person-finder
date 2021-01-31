import React from "react";
import logo from "./logo.svg";
import SearchName from "./Components/SearchName";
import PersonDisplayContainer from "./Components/PersonDisplayContainer";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">the person finder</div>
      <div className="App">
        if you cant find someone you came to the right place
      </div>
      <SearchName />
      <PersonDisplayContainer />
    </>
  );
}

export default App;
