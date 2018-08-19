import React from 'react';
import TimeLineContainer from './TimeLineContainer.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import InfoContainer from './InfoContainer.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../App.css";
import _ from "lodash";

class MainContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      women: []
    };
  }

  componentDidMount(){
    fetch("http://localhost:3001/timeline")
    .then(responseText => responseText.json())
    // .then(women => console.log({women}))
    .then(women => this.setState({women}));
  }

  handleSelectedChange(event){
    //get back the event
    //check the number of the key
    //if left minus the index
    //if right add to the index
    console.log(event);

    document.onkeydown = checkKey;

    function checkKey(key) {

        key = key || window.event;
        if (key.keyCode == '37') {
          alert("left clicked");
           // left arrow
           //it minus the index of the url by 1
        }
        else if (key.keyCode == '39') {
          alert("right clicked");
           // right arrow
           //it pluses the index of the url by 1
        }

        // props.match.params.index turn into int

    }


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


          <Footer/>
        </React.Fragment>
      </Router>



  );
}

}




export default MainContainer;
