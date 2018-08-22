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
import KeyboardEventHandler from 'react-keyboard-event-handler';
import "../style/MainContainer.css"


class MainContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      women: [],
      dropList: []
    };
    this.handleBackClick = this.handleBackClick.bind(this);
    this.handleForwardClick = this.handleForwardClick.bind(this);
    this.handleArrowPress = this.handleArrowPress.bind(this);
  }


  //orders the list so the logic works, years in correct order
  //loops through and adds any new year (only returns unique results)
  //puts it into the state as the drop list

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

  //pulls back the entire db from the back end and puts it in to the state
  //also calls the function to generate the years drop down
  componentDidMount(){
    fetch("http://localhost:3001/timeline")
    .then(responseText => responseText.json())
    // .then(women => console.log({women}))
    .then(women => this.setState({women}, this.generateDropList));
  }


  //still working on this
  //should allow us to use left and right arrows to move through timeline

  handleArrowPress = (event) => {
    if(event === 'left'){
      let action = window.location.pathname.split("/").slice(-1)[0];
      let newIndex = parseInt(action, 10);
      if(newIndex === 0){
        newIndex = 0;
      }else {
        newIndex -=1
      }
      window.history.pushState({path:newIndex},'',newIndex);
      window.location.reload()
    }
    else if(event === 'right'){
      let action = window.location.pathname.split("/").slice(-1)[0];
      let newIndex = parseInt(action, 10);
      if(newIndex === this.state.women.length - 1){
        newIndex === this.state.women.length -1
      }else{
        newIndex +=1
      }
      window.history.pushState({path:newIndex},'',newIndex);
      window.location.reload()
    }
  }

  //event.prevent stops it doing anything at the beginning
  //split takes off anything after the /
  //turned into an integer, takes off 1 or adds on 1
  //pushes the new number on the the url
  //tells the window it should reload the new page.
  handleBackClick = (event) =>{
    event.preventDefault();
    let action = window.location.pathname.split("/").slice(-1)[0];
    let newIndex = parseInt(action, 10);
    if(newIndex === 0){
      newIndex = 0;
    }else {
      newIndex -=1
    }


    window.history.pushState({path:newIndex},'',newIndex);
    window.location.reload()
  }

  handleForwardClick = (event) =>{
    event.preventDefault();
    let action = window.location.pathname.split("/").slice(-1)[0];
    let newIndex = parseInt(action, 10);
      if(newIndex === this.state.women.length - 1){
        newIndex === this.state.women.length -1
      }else{
        newIndex +=1
      }
      window.history.pushState({path:newIndex},'',newIndex);
      window.location.reload()
    }

    //this uses the map function to create a new array of select options
    //for the dropdown menu. within the map it loops over drop list in the state,
    //pulls the value of the list to populate the option value and what is displayed
    //on screen by the option, and the key is the index position within the loop
    createSelect(){
      return (
        this.state.dropList.map((item, index)=>{
          return(
            <option key={index} value={item}>{item}</option>
          );
        })
      );
    }

    //this is what happens when you select something from the onDropdownSelected
    //action is getting the value selected by the user
    //it then turns it into an integer
    //it once again orders the list
    //search uses lodash to find first instance of search
    //ONLY finds one!
    //window.laocation... forces it to location inputted then adds the result of the search
    onDropdownSelected = (event) => {
      event.preventDefault();
      let action = event.target.value;
      let year = parseInt(action, 10);
      let orderedList = _.orderBy(this.state.women, ["year"], ["asc"]);

      let search = _.findIndex(orderedList, {"year": year});
      console.log(search);

      window.location.href = "http://localhost:3000/timeline/" + search;
      // window.location.href = "http://localhost:3000/timeline/year/" + year;
      // let routeString = "/year/" + year;
      // this.redirect(routeString);
    }

    // redirect(route){
    //   return <Redirect to= {route} />
    // }

    //uses the react router to declare 3 paths.
    //1st is redirect (below) takes us from the home route to the timeline/0 route
    //3rd one does the same
    //the middle one - match - is what allows it to pull data back from the url

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

      <select className="select" onChange={this.onDropdownSelected}>
        <option key="null" value="null">Please Select a Year</option>
        {this.createSelect()}
      </select>
      <button id="forward" type="button" onClick={this.handleForwardClick}> &raquo; </button>



      <KeyboardEventHandler
        handleKeys={['left', 'right']}
        onKeyEvent={(key, e) => this.handleArrowPress(key)} />
      </div>

      <Footer/>
    </React.Fragment>
  </Router>




);
}

}




export default MainContainer;
