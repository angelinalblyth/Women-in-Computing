import React from 'react';
import InnerComponent from '../components/InnerComponent.js';
import ImageComponent from '../components/ImageComponent.js';
import InfoComponent from '../components/InfoComponent.js';

const InfoContainer = (props) => {
  return(
      // <React.Fragment>
      //   <InnerComponent/>
      // </React.Fragment>
      <div>
        <img src={props.image} alt="Image"/>
      <p>{props.name}</p>
      <p>{props.year}</p>
      </div>
    )
  }



  export default InfoContainer;
