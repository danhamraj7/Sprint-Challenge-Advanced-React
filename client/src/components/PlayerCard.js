import React from "react";

const PlayerCard = props => {
  return (
    <div>
      {props.playerData.map(player => {
        return (
          <div key={player.id} className="card-container">
            <h2>{player.name}</h2>

            <h4>Country: {player.country}</h4>

            <h5># of Searches: {player.searches}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default PlayerCard;
