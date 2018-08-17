import React from 'react';
import InfoContainer from './InfoContainer.js'

const TimeLineContainer = (props) => {
const individualwoman = props.women.map((lady, index)=>{
  return <InfoContainer key={index} lady={lady}/>
})

console.log(individualwoman.name);

  return(
    <p>
    {individualwoman.name}

  </p>
  )
}

export default TimeLineContainer;
