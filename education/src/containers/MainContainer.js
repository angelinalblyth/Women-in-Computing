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
  }

  componentDidMount(){
    fetch("http://localhost:3001/timeline")
    .then(responseText => responseText.json())
    // .then(women => console.log({women}))
    .then(women => this.setState({women}))
  }


  render(){
    return (
        <Router>
          <React.Fragment>
            <Header/>
            <Route exact path="/" render= {() =>
              <TimeLineContainer women={this.state.women}/>
            }/>
            <Route path="/:index" render = {() =>
              <TimeLineContainer women={this.state.women}/>
            }/>

          <Footer/>
        </React.Fragment>
      </Router>



  );
}

}


export default MainContainer;
