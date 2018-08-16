import React from 'react';
import TimeLineContainer from './TimeLineContainer.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import InfoContainer from './InfoContainer.js';

class MainContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = [
      {name:'Ada Lovelace',
      year: 1842,
      dob:1815,
      dod:1851,
      info:"was an English mathematician and writer, chiefly known for her work on Charles Babbage's proposed mechanical general-purpose computer, the Analytical Engine. She was the first to recognise that the machine had applications beyond pure calculation, and published the first algorithm intended to be carried out by such a machine.",
      contribution: "As a result, she is sometimes regarded as the first to recognise the full potential of a computing machine and the first computer programmer",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ada_Lovelace_portrait.jpg/1024px-Ada_Lovelace_portrait.jpg",
      wiki:"https://en.wikipedia.org/wiki/Ada_Lovelace"}
    ]
  }
  render(){
    return (
      <React.Fragment>
        <Header/>
        <TimeLineContainer/>
        <Footer/>
      </React.Fragment>
    );
  }
}


export default MainContainer;
