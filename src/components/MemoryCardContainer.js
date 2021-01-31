import React, { useState, useEffect } from "react";
import '../styles/MemoryCardContainer.scss';
import MemoryCardImages from "./MemoryCardImages";
import MemoryCard from "./MemoryCard";

const MemoryCardContainer = (props) => {
  const { incrementCurrentScore, handleHighScore, handleGameOver, currentScore, highScore } = props;

  const [cards, setCards] = useState(MemoryCardImages);
  const memoryCardIsClicked = (e) => {
    console.log(e.target.id);
    // console.log(cards)

    const clonedMemoryCardImages = cards;
    if (clonedMemoryCardImages[e.target.id].clicked === true) {
      handleGameOver()
      setCards(MemoryCardImages)
    }
    else {
      // console.log(cards);
      clonedMemoryCardImages[e.target.id].clicked = true
      incrementCurrentScore()
      // handleHighScore()
      setCards(
        clonedMemoryCardImages
      )
    }
    console.log(cards)
  }

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }

  useEffect(() => {
    const newCards = [...cards];
    shuffleArray(newCards);
    setCards(newCards);
    console.log("useffect below----")
    console.log(cards);
  }, [currentScore, highScore]);

  // useEffect(() => {
  //   setMaxScoreGame(cards.length);
  // }, [cards.length, setMaxScoreGame]);


  return (
    // <div className="memory-card-container">
    //     {cards.map((card, index) => (
    //       <div key={index} className="memory-card-container-item" style={{backgroundImage: `url(${card.image})`}}></div>
    //     ))}
    // </div>
    
    // <div className="memory-card-container">
    //     {cards.map((card) => (
    //       // <div key={card.id} className="memory-card-container-item" style={{backgroundImage: `url(${card.image})`}}></div>
    //       <div key={card.id}>
    //         <MemoryCard 
    //           // key={card.id}
    //           id={card.id} 
    //           backgroundImage={`url(${card.image})`} 
    //           memoryCardIsClicked={memoryCardIsClicked}
    //         />
    //       </div>
    //     ))}
    // </div>

    <div className="memory-card-container">
        {cards.map((card, index) => (
          // <div key={card.id} className="memory-card-container-item" style={{backgroundImage: `url(${card.image})`}}></div>
          // <div key={index} name={"yo"}>
            <MemoryCard 
              key={index}
              id={index} 
              backgroundImage={`url(${card.image})`} 
              memoryCardIsClicked={memoryCardIsClicked}
            />
          // </div>
        ))}
    </div>
  )
}

export default MemoryCardContainer;
