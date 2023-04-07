// react, components, statics

import React from "react";
import "./style.css";
import "./App.css"

import { useContext } from "react"
import { QuizContext } from "./context/quiz";

import Welcome from "./components/Welcome/Welcome"
import Question from "./components/Question/Question"

export default function App() {
  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div className="App">
      <h1>Quiz de Programação</h1>

      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
    </div>
  );
}
