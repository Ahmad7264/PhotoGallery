import "./Main.css";
import imageSlider from "./data";
import React, { useEffect, useState } from "react";

function Main() {
  const [currentState, setCurrentState] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === 15) {
        setCurrentState(0);
      } else {
        setCurrentState(currentState + 1);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [currentState]);
  const bgImageStyle = {
    backgroundImage: `url(${imageSlider[currentState].url}`,
    backgroundSize: "cover",
    height: "100%",
    backgroundPosition: "center",
  };

  const goToNext = (currentState) => {
    setCurrentState(currentState);
  };
  return (
    <>
      <div className="container-style">
        <div style={bgImageStyle}></div>
        <div className="transparent-background"></div>
        <div className="description">
          <div>
            <h1>{imageSlider[currentState].title}</h1>
            <p>{imageSlider[currentState].body}</p>
          </div>
          <div className="carousel-boult">
            {imageSlider.map((imageSlider, currentState) => (
              <span
                key={currentState}
                onClick={() => goToNext(currentState)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
