import React from 'react';
import InfoContainer from './InfoContainer.js'

const TimeLineContainer = (props) => {

  // const array = [];
  // for(let lady of props.women){
  //   array.push(<InfoContainer woman = {lady}/>)
  // }
  // console.log(array);



  return(
    <div>
      {props.women.map((lady, index)=>{
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

    export default TimeLineContainer;
