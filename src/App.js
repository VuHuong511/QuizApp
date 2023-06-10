import React, { useState } from "react";
import QuizScreen from "./QuizScreen";

const App = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [nameError, setNameError] = useState("");

  const handleStartQuiz = () => {
    if (playerName.trim() === "") {
      setNameError("Please enter your name");
    } else {
      setQuizStarted(true);
    }
  };

  const handleNameChange = (event) => {
    setPlayerName(event.target.value);
    setNameError("");
  };

  return (
    <div>
      <h1>Quiz Application</h1>
      {!quizStarted ? (
        <div>
          <label htmlFor="nameInput">Enter Your Name:</label>
          <input
            type="text"
            id="nameInput"
            value={playerName}
            onChange={handleNameChange}
            required
          />
          <span className="error">{nameError}</span>
          <button onClick={handleStartQuiz}>Start Quiz</button>
        </div>
      ) : (
        <QuizScreen playerName={playerName} />
      )}
    </div>
  );
};

export default App;
