import React from 'react';
import InfoContainer from './InfoContainer.js'
import "./TimeLineContainer.css";

const TimeLineContainer = (props) => {

  if (props.match.params !== 0) {
    let index = parseInt(props.match.params.index);
    let womenSubList = props.women.slice(index, index+3);
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
  } else {
    let womenSubList = props.women.slice(0, 3);
    return(
      <div>
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
