import React from 'react';
import InfoContainer from './InfoContainer.js'
import "../style/TimeLineContainer.css";
import _ from "lodash";

const TimeLineContainer = (props) => {
  //this is what tells it to look at the url and take off the last bit
  if (props.match.params !== 0) {
    //turns the bit from url into an integer, the ',10'
    //tells it it is a decimal value
    let index = parseInt(props.match.params.index, 10);
    let orderedList = _.orderBy(props.women, ["year"], ["asc"]);
    //slices a chunk out of the array that is 3 long
    //here it starts at the index and cuts 3
    let womenSubList = orderedList.slice(index, index+3);
    //these relate to css classes
    //the 'if' turns it in to even and odds (0,1) for display purposes
    let position = "";
    let timelinePosition = ""
    if (index % 2 === 0) {
      position = "zero";
      timelinePosition = "zero_time";
    } else {
      position = "one";
      timelinePosition = "one_time"
    }

//creates a page display (the background flips over on odds/evens)
//and decides the way the tiles are displayed
    return(
      <div className="timeline" id={timelinePosition}>
        {womenSubList.map((lady, index)=>{
          return(
            <InfoContainer
              index={position}
              key={index}
              name={lady.name}
              year={lady.year}
              dob={lady.dob}
              dod={lady.dod}
              info={lady.info}
              contribution={lady.contribution}
              image={lady.image}
              wiki={lady.wiki}
            />
          )
        })}
      </div>
      )
  } else {
    let womenSubList = props.women.slice(0, 3);
    return(
      <div className="timeline">
        {womenSubList.map((lady, index)=>{
          return(
            <InfoContainer
              key={index}
              name={lady.name}
              year={lady.year}
              dob={lady.dob}
              dod={lady.dod}
              info={lady.info}
              contribution={lady.contribution}
              image={lady.image}
              wiki={lady.wiki}
            />
          )
        })}
      </div>
      )
  }

}

export default TimeLineContainer;
