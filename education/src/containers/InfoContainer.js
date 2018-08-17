import React from 'react';
import InnerComponent from '../components/InnerComponent.js';
import ImageComponent from '../components/ImageComponent.js';
import InfoComponent from '../components/InfoComponent.js';
import "./InfoContainer.css";

const InfoContainer = (props) => {
  let image = props.image;
  return(
      // <React.Fragment>
      //   <InnerComponent/>
      // </React.Fragment>
      <div className="info_tile">
        <div className="info_container">
          <div className="image_container" style={{backgroundImage: `url(${props.image})` }}>
            <div className="bottom-left">
              <p><strong>{props.name}</strong></p>
              <p><strong>{props.year}</strong></p>
            </div>
          </div>
          <div className="info_div">
            <p>{props.info}</p>
            <p>{props.contribution}</p>
          </div>
        </div>
      </div>
    )
  }



  export default InfoContainer;
