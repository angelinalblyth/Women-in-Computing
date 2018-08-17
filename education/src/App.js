import React, { Component } from 'react';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import TimeLineContainer from './containers/TimeLineContainer.js'
import InfoContainer from './containers/InfoContainer.js'
import MainContainer from './containers/MainContainer.js'
import './App.css'


class App extends Component {
  render() {
    return (
      <MainContainer/>
    );
  }
}

export default App;
