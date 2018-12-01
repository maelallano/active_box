import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Icons from '../Icons/Icons';
import Images from '../Images/Images';
import Team from '../Team/Team';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Icons />
        <Images />
        <Team />
      </div>
    );
  }
}

export default App;
