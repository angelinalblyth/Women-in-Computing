import React from 'react';
import InfoContainer from './InfoContainer.js'
import "../style/TimeLineContainer.css";
import _ from "lodash";

const TimeLineContainer = (props) => {
  if (props.match.params !== 0) {
    let index = parseInt(props.match.params.index, 10);
    let orderedList = _.orderBy(props.women, ["year"], ["asc"]);
    let womenSubList = orderedList.slice(index, index+3);
    let position = "";
    let timelinePosition = ""
    if (index % 2 === 0) {
      position = "zero";
      timelinePosition = "zero_time";
    } else {
      position = "one";
      timelinePosition = "one_time"
    }

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
