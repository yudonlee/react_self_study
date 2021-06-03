import React, { Componenet } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Componenet {
  render() {
    return (
      <div ClassName="App">
        <header>
          <img src={logo} className="logo" alt="logo" />
          <p>
            Edit <codee>src/App.js</codee> and save to reload.
          </p>
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
              Learn React
            </a>
        </header>
      </div>
    )
  }
}

export default App;
