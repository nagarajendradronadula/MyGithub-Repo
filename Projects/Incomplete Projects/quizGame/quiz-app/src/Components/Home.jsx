/* eslint-disable no-unused-vars */
import questions from "../constants/questions.json";
import { useState } from "react";
import Question from "./question.jsx";

export const Home = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);

    const handleNextQuestion = () => {};

  return (
    <div>
    <h1>Quiz App</h1>
    <Question question={questions[currentQuestion]} onAnswerClick={handleNextQuestion}/>
    </div>
  )
}

export default Home;