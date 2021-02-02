import React from "react";
import '../styles/Header.scss';

const Header = (props) => {
  return (
    <div className="header">
      <div className="header-title">
      Harry Potter<br></br>Memory Card Game
      </div>
      <div className="header-scoreboard">
        <div className="header-scoreboard-title-value">
          <div className="header-scoreboard-title">Score</div>
          <div className="header-scoreboard-value">{props.currentScore}</div>
        </div>
        <div className="header-scoreboard-title-value">
          <div className="header-scoreboard-title">High Score</div>
          <div className="header-scoreboard-value">{props.highScore}</div>
        </div>
        <div className="header-scoreboard-title-value">
          <div className="header-scoreboard-title">Max Score</div>
          <div className="header-scoreboard-value">{props.maxScore}</div>
        </div>
      </div>
    </div>
  )
}

export default Header;
