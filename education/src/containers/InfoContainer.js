import React from 'react';
import InnerComponent from '../components/InnerComponent.js';
import ImageComponent from '../components/ImageComponent.js';
import InfoComponent from '../components/InfoComponent.js';

const InfoContainer = (props) => {
  return(
      // <React.Fragment>
      //   <InnerComponent/>
      // </React.Fragment>
      <div className="info_container">
        <div className="image_container">
          <img src={props.image} alt="Image"/>
          <p>{props.name}</p>
          <p>{props.year}</p>
        </div>
        <div className="info_div">
          <p>{props.info}</p>
          <p>{props.contribution}</p>
        </div>
      </div>
    )
  }



  export default InfoContainer;
