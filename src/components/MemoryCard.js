import React, { useState } from "react";
import '../styles/MemoryCard.scss';

const MemoryCard = (props) => {
  
  return (
    // <div key={index} className="memory-card-container-item" style={{backgroundImage: `url(${card.image})`}}></div>
    <div id={props.id} className="memory-card-container-item" style={{backgroundImage: props.backgroundImage}} 
    onClick={props.memoryCardIsClicked}
    ></div>

  )
}

export default MemoryCard;
