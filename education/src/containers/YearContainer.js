import React from 'react';
import InfoContainer from './InfoContainer.js'
import _ from "lodash";
import "./TimeLineContainer.css";

const YearContainer = (props) =>{
  let index = parseInt(props.match.params.year, 10);
  let orderedList = _.orderBy(props.women, ["year"], ["asc"]);
  let womenSubList = [];
  for (let item of orderedList) {
    if (item.year === index) {
      womenSubList.push(item);
    }
  }

  return(
    <div className="timeline" id="one_time">
      {womenSubList.map((lady, index)=>{
        return(
          <InfoContainer
            index="one"
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

export default YearContainer;
