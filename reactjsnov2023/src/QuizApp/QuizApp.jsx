import React, { useState } from "react";
import questions from "./QuizQuestions";

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScores] = useState(0);

  const handleAnswerOption = (userSelectedOption) => {
    if (userSelectedOption) {
      setScores((prevScore) => prevScore + 1);
    }
    
    //moving to the next question
    const nextQuestion = currentQuestion + 1; //nextQuestion = 1
    if (nextQuestion < questions.length) {
      //1<2
      setCurrentQuestion(nextQuestion); //currentQuestion = 1
    } else {
      setShowScore(true);
    }
  };
  return (
    <div>
      {showScore ? (
        <div>
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <div>
          <span>Question {currentQuestion + 1}</span>/{questions.length}
          <div>{questions[currentQuestion].questionText}</div>
          {questions[currentQuestion].answerOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerOption(option.isCorrect)}
            >
              {option.answerText}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuizApp;
