import React from 'react';
import InnerComponent from '../components/InnerComponent.js';
import ImageComponent from '../components/ImageComponent.js';
import InfoComponent from '../components/InfoComponent.js';

const InfoContainer = (props) => {
  return(
      // <React.Fragment>
      //   <InnerComponent/>
      // </React.Fragment>
      <p>{props.name}</p>
    )
  }



  export default InfoContainer;
