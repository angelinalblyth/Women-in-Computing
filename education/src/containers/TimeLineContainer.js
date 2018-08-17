import React from 'react';
import InfoContainer from './InfoContainer.js'

const TimeLineContainer = (props) => {
  console.log(props);
  const array = [];
  for(let lady of props.women){
    array.push(<InfoContainer woman = {lady}/>)
  }
  console.log(array);
// const individualwoman = props.women.map((lady, index)=>{
//   return <InfoContainer key={index} lady={lady}/>
// })



  return(
    <p>
    {array}

  </p>
  )
}

export default TimeLineContainer;
