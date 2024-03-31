import React from "react";
import "./PhotoGallery.css";

function PhotoGalleryData (props) {
  
    return (
      <div className="first-des">
        <div className="content-text">
          <h2>{props.heading}</h2>
          <p>
            {props.description}
          </p>
        </div>
        <div className="photo">
          <img alt="img" src={props.img1} />
          <img alt="img" src={props.img2} />
        </div>
      </div>
    );
  }

export default PhotoGalleryData;
