import React from 'react';
import TimeLineContainer from './TimeLineContainer.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../App.css";

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
    .then(women => this.setState({women}));
  }


  handleBackClick = (event) =>{
    event.preventDefault();
    let action = window.location.pathname.split("/").slice(-1)[0];
    let newIndex = parseInt(action, 10);
    newIndex -=1
    window.history.pushState({path:newIndex},'',newIndex);
    window.location.reload()
  }

  handleForwardClick = (event) =>{
    event.preventDefault();
    let action = window.location.pathname.split("/").slice(-1)[0];
    let newIndex = parseInt(action, 10);
    newIndex +=1
    window.history.pushState({path:newIndex},'',newIndex);
    window.location.reload()
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

      <div class="button-div">
        <button id="back" type="button" onClick={this.handleBackClick}> &laquo; </button>
        <button id="forward" type="button" onClick={this.handleForwardClick}> &raquo; </button>
      </div>
      <Footer/>
    </React.Fragment>
  </Router>



);
}

}




export default MainContainer;
