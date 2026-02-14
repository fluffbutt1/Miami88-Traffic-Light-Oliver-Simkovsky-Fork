import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

  //const [isActive, setIsActive] = useState(false); 
  // for future reference don't use a bool. check for the color. not  if it's true.
  // maybe try useEffect

  const [activeColor, setActiveColor] = useState(null);

  const changeColor = (color) =>{
    setActiveColor(color);
    console.log("clicked");
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="bg-black w-25 text-center d-flex flex-column justify-content-center align-items-center">
        <div className={`circle1 ${activeColor === "Green" ? "glow1" : ""}`} onClick={() => changeColor("Green")}></div>
        <div className={`circle2 ${activeColor === "Yellow" ? "glow2" : ""}`} onClick={() => changeColor("Yellow")}></div>
        <div className={`circle3 ${activeColor === "Red" ? "glow3" : ""}`} onClick={() => changeColor("Red")}></div>
      </div>
    </div>
  );
};

export default Home;
