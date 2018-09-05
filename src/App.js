import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React + Redux</h1>
          <span>Todo App</span>
        </header>

        <Routes />
      </div>
    );
  }
}

export default App;