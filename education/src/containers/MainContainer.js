import React from 'react';
import TimeLineContainer from './TimeLineContainer.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import InfoContainer from './InfoContainer.js';

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
      <React.Fragment>
        <Header/>
        <TimeLineContainer women={this.state.women}/>
        <Footer/>
      </React.Fragment>
    );
  }
}


export default MainContainer;
