import React, { useState, useEffect, useLayoutEffect } from "react";
import '../styles/MemoryCardContainer.scss';
import MemoryCardImages from "./MemoryCardImages";
import MemoryCard from "./MemoryCard";

const MemoryCardContainer = (props) => {
  const { incrementCurrentScore, handleHighScore, handleGameOver, currentScore, setMaxScoreGame } = props;

  const [cards, setCards] = useState(MemoryCardImages);

  const memoryCardIsClicked = (e) => {
    const clonedMemoryCardImages = cards;
    // Check if the memory card has already been clicked
    if (clonedMemoryCardImages[e.currentTarget.id].clicked === true) {
      handleGameOver()
      // Reset the memorycards to its original state for a new game so that all card clicked values are false
      clonedMemoryCardImages.map((card) => (
        card.clicked = false
      ))
    } else {
      // Update the clicked card in the cards state with a clicked key value of true
      clonedMemoryCardImages[e.currentTarget.id].clicked = true
      incrementCurrentScore()
    }
    setCards(
      clonedMemoryCardImages
    )
  }

  const shuffleArray = (array) => {
    // Shuffle the memorycards in a random order
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }

  useLayoutEffect(() => {
    // Set the maxScoreGame state to the amount of memorycards to display the maximum score when the components mounts
    // useLayoutEffect is used here instead of useEffect to prevent the maxScore scss positioning from changing on display when updating
    setMaxScoreGame(cards.length);
  }, []);

  useLayoutEffect(() => {
    // Update the highscore after the currentscore has been changed
    // useLayoutEffect is used here instead of useEffect to display the updated highScore at the same time on display as the currentScore gets updated
    handleHighScore()
  }, [currentScore]);

  useEffect(() => {
    // Shuffle the array of cards in cards state after the currentscore has been changed
    const newCards = [...cards];
    shuffleArray(newCards);
    setCards(newCards);
  }, [currentScore]);

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
