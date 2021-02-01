import React, { useState } from "react";
import './styles/App.scss';
import Header from "./components/Header";
import MemoryCardContainer from "./components/MemoryCardContainer";
// import MemoryCardImages from "./components/MemoryCardImages";

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

  // const [memoryCardImages] = useState(MemoryCardImages);
  // const [maxScore] = useState(memoryCardImages.length);

  const [maxScore, setMaxScore] = useState(12);
  const setMaxScoreGame = (arrayLength) => {
    setMaxScore(arrayLength);
  }

  const resetCurrentScore = () => {
    setCurrentScore(0);
  }

  const handleGameOver = () => {
    // handleHighScore()
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
        highScore={highScore}
        setMaxScoreGame={setMaxScoreGame}
      />
    </div>
  );
}

export default App;


/*
Pseudo Code

Memory card game
(free graphic resources: https://www.freepik.com/)
Make use of functional components and hooks

1.  Component Game: holds logic for cards and highscores
2.  Component Header: Header with Title, score, highscore and maxscore
3.  Component MemoryCard: with cards (and card title under it)
4.  Add function that displays images in a random order everytime the user clicks.
    invoke it when the component mounts

Make use of functional components and hooks


*/