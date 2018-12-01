import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Icons from '../Icons/Icons';
import Images from '../Images/Images';
import Team from '../Team/Team';
import Testimonial from '../Testimonial/Testimonial';
import Download from '../Download/Download';
import Footer from '../Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Icons />
        <Images />
        <Team />
        <Testimonial />
        <Download />
        <Footer />
      </div>
    );
  }
}

export default App;
