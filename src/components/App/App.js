import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Icons from '../Icons/Icons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Icons />
      </div>
    );
  }
}

export default App;
