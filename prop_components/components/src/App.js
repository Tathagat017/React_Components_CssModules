import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Greetings } from "./Components/Greeting";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <h1>Log</h1>
      <Greetings />
    </div>
  );
}

export default App;
