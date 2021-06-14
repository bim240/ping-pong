import { StyledStep2 } from "./StyledComponent";
import { Button } from "antd";
import { useState } from "react";

const Step2 = (props) => {
  const currentPlayers = localStorage.getItem("currentPlayer");
  const [playerScore, setPlayerScore] = useState(
    localStorage.getItem([currentPlayers])?.split("_") || [0, 0]
  );
  const currentPlayerInfo = currentPlayers.split("_");

  const setNewScore = (index) => {
    let newState = [...playerScore].map((item, i) =>
      i === index ? item + 1 : item
    );
    setPlayerScore(newState);
  };
  const saveData = () => {
    localStorage.setItem([currentPlayers], playerScore.join("_"));
  };
  return (
    <StyledStep2>
      {currentPlayerInfo.map((player, index) => {
        return (
          <div key={`${player}${index}`} className="single_plalyer_container">
            <h2 className="player_name">{player}</h2>
            <Button
              type="primary"
              className="add_wins_btn"
              onClick={() => {
                setNewScore(index);
              }}>
              {" "}
              Add wins
            </Button>
            <h4 className="wins_text">Wins</h4>
            <h3 className="wins">{playerScore[index]}</h3>
          </div>
        );
      })}
      <div className="winner_container">
        <h3 className="winner_name">
          {" "}
          {`Current Winner: ${
            playerScore[0] > playerScore[1]
              ? currentPlayerInfo[0]
              : playerScore[0] == playerScore[1]
              ? "Its a draw"
              : currentPlayerInfo[1]
          }`}
        </h3>
        <h3 className="winner_diff">
          Win Difference {Math.abs(playerScore[0] - playerScore[1])}
        </h3>
      </div>
      <Button onClick={saveData} type="primary">
        Save Game
      </Button>
    </StyledStep2>
  );
};

export default Step2;
