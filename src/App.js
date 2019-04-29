//imports
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import CharCard from "./components/CharCard";
import Jumbotron from "./components/Jumbotron";
import characters from "./characters.json";
//import Image from 'react-bootstrap/Image';
import "./App.css";

class App extends Component {
  //initial setup
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <CharCard>
          id={characters.id}
          key={characters.id}
          image={characters.image}
        </CharCard>
      </div>
    );
  }
}

export default App;
