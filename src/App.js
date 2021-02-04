import React, { useState } from "react";
import './styles/App.scss';
import Header from "./components/Header";
import MemoryCardContainer from "./components/MemoryCardContainer";

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const incrementCurrentScore = () => {
    setCurrentScore((prevCurrentScore) =>
      prevCurrentScore + 1
    )
  }

  const [highScore, setHighScore] = useState(0);
  const handleHighScore = () => {
    if (currentScore > highScore) {
      setHighScore(currentScore);
    }
  }
  
  const [maxScore, setMaxScore] = useState(12);
  const setMaxScoreGame = (arrayLength) => {
    setMaxScore(arrayLength);
  }

  const resetCurrentScore = () => {
    setCurrentScore(0);
  }

  const handleGameOver = () => {
    resetCurrentScore();
  }

  return (
    <div className="App">
      <Header currentScore={currentScore} highScore={highScore} maxScore={maxScore}/>
      <MemoryCardContainer 
        incrementCurrentScore={incrementCurrentScore}
        handleHighScore={handleHighScore}
        handleGameOver={handleGameOver}
        currentScore={currentScore}
        setMaxScoreGame={setMaxScoreGame}
      />
    </div>
  );
}

export default App;
