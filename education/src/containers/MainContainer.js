import React from 'react';
import TimeLineContainer from './TimeLineContainer.js';
// import YearContainer from "./YearContainer.js";
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../style/App.css";
import "../style/Button.css";
import { Redirect } from 'react-router-dom';
import _ from "lodash";


class MainContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      women: [],
      dropList: []
    };
    this.handleBackClick = this.handleBackClick.bind(this);
    this.handleForwardClick = this.handleForwardClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }


  generateDropList(){
    let orderedList = _.orderBy(this.state.women, ["year"], ["asc"]);
    let listItems = [];
    for (let item of orderedList) {
      if (_.includes(listItems), item.year ) {
        listItems.push(item.year);
      }
    }
    let uniqList = _.uniq(listItems);
    this.setState({dropList: uniqList});
  }

  componentDidMount(){
    fetch("http://localhost:3001/timeline")
    .then(responseText => responseText.json())
    // .then(women => console.log({women}))
    .then(women => this.setState({women}, this.generateDropList));
  }

  handleKeyPress = (e) => {
    console.log(e);
    document.onKeyDown = checkKey;

    function checkKey(key) {
      key = key || window.event;
      if (key.keyCode === '37') {
        alert("left clicked");
       // left arrow
       //it minus the index of the url by 1
      }
      else if (key.keyCode === '39') {
        alert("right clicked");
       // right arrow
       //it pluses the index of the url by 1
      }
    }
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

  createSelect(){
    return (
      this.state.dropList.map((item, index)=>{
        return(
          <option key={index} value={item}>{item}</option>
        );
      })
    );
  }

  onDropdownSelected = (event) => {
    event.preventDefault();
    let action = event.target.value;
    let year = parseInt(action, 10);

    let search = _.findIndex(this.state.women, {"year": year});

    window.location.href = "http://localhost:3000/timeline/" + search;
    // window.location.href = "http://localhost:3000/timeline/year/" + year;
    // let routeString = "/year/" + year;
    // this.redirect(routeString);
  }

  // redirect(route){
  //   return <Redirect to= {route} />
  // }


  render(){
    return (

        <Router>
          <React.Fragment>
            <Header/>
            <Route exact path="/" render= {({match}) =>
            //<TimeLineContainer women={this.state.women} match={match}/>
            <Redirect push to="/timeline/0" />
            }/>

            {/* <Route path="/timeline/year/:year" render = {({match}) =>
              <YearContainer women={this.state.women} match={match}/>
            }/> */}
            <Route path="/timeline/:index" render = {({match}) =>
              <TimeLineContainer women={this.state.women} match={match}/>
            }/>

            <Route exact path="/timeline" render={({match}) =>
              <Redirect push to="/timeline/0" />
            }/>


      <div className="button-div">
        <button id="back" type="button" onClick={this.handleBackClick}> &laquo; </button>

        <select className="select" onChange={this.onDropdownSelected} style={{fontSize: 20}}>
          {this.createSelect()}
        </select>

        <button id="forward" type="button" onClick={this.handleForwardClick}> &raquo; </button>

        <button id="hidden" type="button" onKeyDown={(e) => this.handleKeyPress(e)} style={{display: "none"}}/>
      </div>
      <Footer/>
    </React.Fragment>
  </Router>



);
}

}




export default MainContainer;
