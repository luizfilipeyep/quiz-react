// react, components, statics

import React from "react";
import "./style.css";
import "./App.css"

import Welcome from "./components/Welcome/Welcome"

export default function App() {
  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      <Welcome />
    </div>
  );
}
