import React, { useState, useEffect, useLayoutEffect } from "react";
import '../styles/MemoryCardContainer.scss';
import MemoryCardImages from "./MemoryCardImages";
import MemoryCard from "./MemoryCard";

const MemoryCardContainer = (props) => {
  const { incrementCurrentScore, setMaxScoreGame, handleHighScore, handleGameOver, currentScore, highScore } = props;

  const [cards, setCards] = useState(MemoryCardImages);

  const memoryCardIsClicked = (e) => {
    const clonedMemoryCardImages = cards;
    if (clonedMemoryCardImages[e.currentTarget.id].clicked === true) {
      handleGameOver()
      setCards(MemoryCardImages)
    }
    else {
      clonedMemoryCardImages[e.currentTarget.id].clicked = true
      incrementCurrentScore()
      // handleHighScore()
      setCards(
        clonedMemoryCardImages
      )
    }
  }

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }

  useEffect(() => {
    handleHighScore()
    const newCards = [...cards];
    shuffleArray(newCards);
    setCards(newCards);
  }, [currentScore, highScore]);


  useLayoutEffect(() => {
    setMaxScoreGame(cards.length);
  }, [cards.length, setMaxScoreGame]);

  return (
    <div className="memory-card-container">
      {cards.map((card, index) => (
        <MemoryCard 
          key={index}
          id={index} 
          card={card} 
          memoryCardIsClicked={memoryCardIsClicked}
        />
      ))}
    </div>
  )
}

export default MemoryCardContainer;
