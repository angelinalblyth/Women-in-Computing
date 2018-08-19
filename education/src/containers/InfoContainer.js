import React from 'react';
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



          </div>
          <div className="info_div">
            <p>{props.name}</p>
            <p>{props.year}</p>
            <p>{props.info}</p>
            <p>{props.contribution}</p>
          </div>
        </div>
      </div>
    )
  }



  export default InfoContainer;
