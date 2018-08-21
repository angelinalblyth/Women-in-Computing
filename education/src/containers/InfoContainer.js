import React from 'react';
import "../style/InfoContainer.css";

const InfoContainer = (props) => {

  const redirect = () => {
    window.location.href = props.wiki;
  }

  return(
      // <React.Fragment>
      //   <InnerComponent/>
      // </React.Fragment>
      <div className="info_tile" id={props.index}>
        <div className="info_container">
          <div className="image_container" style={{backgroundImage: `url(${props.image})` }} onClick={redirect}>
            <div className="bottom-left">
              <p><strong>{props.name}</strong></p>
              <p><strong>{props.year}</strong></p>
            </div>
          </div>
          <div className="info_div">
            <p>{props.info}</p>
            <p>{props.contribution}</p>
            <p><a href={props.wiki} target="_blank">See More</a></p>
          </div>
        </div>
      </div>
    )
  }




  export default InfoContainer;
