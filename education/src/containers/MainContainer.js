import React from 'react';
import TimeLineContainer from './TimeLineContainer.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import InfoContainer from './InfoContainer.js';
import { BrowserRouter as Router, Route } from "react-router-dom";

class MainContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      women: []
    };
    this.handleBackClick = this.handleBackClick.bind(this);
    this.handleForwardClick = this.handleForwardClick.bind(this);
  }

  componentDidMount(){
    fetch("http://localhost:3001/timeline")
    .then(responseText => responseText.json())
    // .then(women => console.log({women}))
    .then(women => this.setState({women}))
  }


  handleBackClick({index}){
    console.log({index});
  }

  handleForwardClick({index}){
console.log({index});
  }



  render(){
    return (
      <Router>
        <React.Fragment>
          <Header/>
          <Route exact path="/" render= {({match}) =>
          <TimeLineContainer women={this.state.women} match={match}/>
        }/>

        <Route path="/:index" render = {({match}) =>
        <TimeLineContainer women={this.state.women} match={match}/>
      }/>

      <button type="button" onClick={this.handleBackClick}> &laquo; </button>
      <button type="button" onClick={this.handleForwardClick}> &raquo; </button>
      <Footer/>
    </React.Fragment>
  </Router>



);
}

}




export default MainContainer;
