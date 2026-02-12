import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

  const [isActive, setIsActive] = useState(false); 
  // for future reference don't use a bool. check for the color. not  if it's true.
  
  const Colors = () =>{
	setIsActive(true);
	if(isActive === true){
		console.log("triggered");
		setIsActive(prev => !prev);
	}
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="bg-black w-25 text-center d-flex flex-column justify-content-center align-items-center">
        <div className={isActive ? "circle1" : "circle4"} onClick={(Colors)}></div>
        <div className={isActive ? "circle2" : "circle4"} onClick={(Colors)}></div>
        <div className={isActive ? "circle3" : "circle4"} onClick={(Colors)}></div>
		<div className={`circle4 ${isActive ? "active" : ""}`} onClick={(Colors)}></div>
      </div>
    </div>
  );
};

export default Home;
