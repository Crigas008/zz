import logo from '../logo.png';
import '../App.css';
import {Button, Container} from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Container className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Azimkin top
        </h1>
        <a
          className="App-link"
          href="https://discord.gg/mirage-958487013907112026"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mirage the best RPG server
        </a>

        <Link to="/portfolio">
          <Button className="ButtonProtfolio" variant="dark">My portfolio</Button>
        </Link>
      </Container>
    </div>
  );
}

export default App;
