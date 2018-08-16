import React, { Component } from 'react';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import TimeLine from './containers/TimeLine.js'
import MainContainer from './containers/MainContainer.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <MainContainer/>
    );
  }
}

export default App;
