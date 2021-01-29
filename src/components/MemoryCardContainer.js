import React, { useState } from "react";
import '../styles/MemoryCardContainer.scss';
import MemoryCardImages from "./MemoryCardImages";
import MemoryCard from "./MemoryCard";
// import bellatrix from "../images/Bellatrix.jpeg";
// import draco from "../images/Draco.jpeg";
// import dumbledore from "../images/Dumbledore.jpeg";
// import hagrid from "../images/Hagrid.jpeg";
// import harry from "../images/Harry.jpeg";
// import hermione from "../images/Hermione.jpeg";
// import lupin from "../images/Lupin.jpeg";
// import ron from "../images/Ron.jpeg";
// import sirius from "../images/Sirius.jpeg";
// import slughorn from "../images/Slughorn.jpeg";
// import snape from "../images/Snape.jpeg";
// import voldemort from "../images/Voldemort.jpeg";


const MemoryCardContainer = (props) => {
  // const { incrementCurrentScore, handleHighScore, handleGameOver } = props;

  const [cards, setCards] = useState(MemoryCardImages);
  // console.log(cards);

  const memoryCardIsClicked = (e) => {
    const clonedMemoryCardImages = cards;
    // console.log(clonedMemoryCardImages)
    // console.log(clonedMemoryCardImages[e.target.id - 1]);

    if (clonedMemoryCardImages[e.target.id - 1].clicked === true) {
      props.handleGameOver()
      setCards(MemoryCardImages)
    }
    else {
      clonedMemoryCardImages[e.target.id - 1].clicked = true
      props.incrementCurrentScore()
      props.handleHighScore()
      setCards(
        clonedMemoryCardImages
      )
    }
    console.log(cards)
  }


  return (
    // <div className="memory-card-container">
    //     {cards.map((card, index) => (
    //       <div key={index} className="memory-card-container-item" style={{backgroundImage: `url(${card.image})`}}></div>
    //     ))}
    // </div>
    <div className="memory-card-container">
        {cards.map((card) => (
          // <div key={card.id} className="memory-card-container-item" style={{backgroundImage: `url(${card.image})`}}></div>
          <div key={card.id}>
            <MemoryCard 
              // key={card.id}
              id={card.id} 
              backgroundImage={`url(${card.image})`} 
              memoryCardIsClicked={memoryCardIsClicked}
            />
          </div>
        ))}
    </div>
  )
}

export default MemoryCardContainer;
