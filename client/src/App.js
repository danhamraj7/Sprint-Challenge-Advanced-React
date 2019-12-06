import React from "react";
import axios from "axios";
import PlayerCard from "./components/PlayerCard";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      playerData: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")

      .then(res => {
        this.setState({ playerData: res.data });

        console.log(res);
      })

      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <h1>Players</h1>
        <PlayerCard
          key={this.state.playerData.id}
          playerData={this.state.playerData}
        />
        />
      </div>
    );
  }
}

export default App;
