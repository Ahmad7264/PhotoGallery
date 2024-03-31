import React from "react";

import "./PhotoGallery.css";
import image1 from "./imagegallery/medical-camp1.png";
import image3 from "./imagegallery/medical-camp3.png";
import image4 from "./imagegallery/medical-camp4.png";
import image5 from "./imagegallery/medical-camp5.png";
import image6 from "./imagegallery/medical-camp6.png";
import image7 from "./imagegallery/medical-camp7.png";
import image8 from "./imagegallery/medical-camp8.png";
import image9 from "./imagegallery/medical-camp9.png";
import image10 from "./imagegallery/medical-camp10.png";
import PhotoGalleryData from "./PhotoGalleryData";
import Hero from "./Hero";
import Main from "./components/herosection/Main";

const PhotoGallery = () => {
  return (
    <>
      <Main />
      <div className="photo-gallery">
        <h1>PhotoGallery </h1>
        <p>
          ADM Education & Welfare Society stands as a beacon of hope, dedicated
          to Empowering Change and Transforming Lives through its multifaceted
          initiatives. At the heart of our organization lies an unwavering
          commitment to create positive and lasting impacts, driven by fresh
          perspectives and innovative ideas
        </p>
        <PhotoGalleryData
          heading="Medical camp"
          description=" ADM Educational and Welfare Society prioritizes your well-being,
      promoting awareness of medical issues and informed health choices
      for better outcomes."
          img1={image1}
          img2={image3}
        />
        <PhotoGalleryData
          heading="Medical camp"
          description=" ADM Educational and Welfare Society prioritizes your well-being,
      promoting awareness of medical issues and informed health choices
      for better outcomes."
          img1={image4}
          img2={image5}
        />
        <PhotoGalleryData
          heading="Medical camp"
          description=" ADM Educational and Welfare Society prioritizes your well-being,
      promoting awareness of medical issues and informed health choices
      for better outcomes."
          img1={image6}
          img2={image7}
        />
      </div>
    </>
  );
};

export default PhotoGallery;
