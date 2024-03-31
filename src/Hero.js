// import "./PhotoGallery.css";
// import imageSlider from "./data";
// import { useEffect, useState } from "react";

import React from "react";
import "./Hero.css";
import image2 from "./imagegallery/medical-camp2.png";
import image8 from "./imagegallery/pexels-eberhard-grossgasteiger-443446.jpg";

function Hero() {
  return (
    <div className="hero">
      <img src={image8} alt="image1" />
      <div className="content">
        <h1>MEDICAL CAMP</h1>
        <p>
          ADM Educational and Welfare Society prioritizes your well-being,
          promoting awareness of medical issues and informed health choices for
          better outcomes."
        </p>
        <a href="#" className="btn">
          SEE more
        </a>
      </div>
    </div>
  );
}
// const [currentState, setCurrentState] = useState(0);
// useEffect(() => {
//   const timer = setTimeout(() => {
//     if (currentState === 2) {
//       setCurrentState(0);
//     } else {
//       setCurrentState(currentState + 1);
//     }
//   }, 4000);
//   return () => clearTimeout(timer);
// }, [currentState]);
// const bgImageStyle = {
//   backgroundImage: `url(${imageSlider[currentState].url}`,
//   backgroundSize: "cover",
//   height: "100%",
//   backgroundPosition: "center",
// };

// const goToNext = (currentState) => {
//   setCurrentState(currentState);
// };
// return (
//   <>
//     <div className="container-style">
//       <div style={bgImageStyle}></div>
//       <div className="transparent-background"></div>
//       <div className="description">
//         <div>
//           <h1>{imageSlider[currentState].title}</h1>
//           <p>{imageSlider[currentState].body}</p>
//         </div>
//         <div className="carousel-boult">
//           {imageSlider.map((imageSlider, currentState) => (
//             <span
//               key={currentState}
//               onClick={() => goToNext(currentState)}
//             ></span>
//           ))}
//         </div>
//       </div>
//     </div>
//   </>

export default Hero;
