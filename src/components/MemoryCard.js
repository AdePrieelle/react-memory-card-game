import React from "react";
import '../styles/MemoryCard.scss';

const MemoryCard = (props) => {
  return (
    <div id={props.id} className="memory-card-container-item" onClick={e => props.memoryCardIsClicked(e)}>
      <div className="memory-card-container-item-bg-image" style={{backgroundImage: `url(${props.card.image})`}}></div>
      <div className="memory-card-container-item-name">{props.card.name}</div>
    </div>
  )
}

export default MemoryCard;
