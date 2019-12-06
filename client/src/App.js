import React from "react";
import axios from "axios";
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
        />
      </div>
    );
  }
}

export default App;
