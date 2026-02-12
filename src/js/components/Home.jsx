import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

  const [isActive, setIsActive] = useState(false);
  
  const Colors = () =>{
	setIsActive(true);
	if(isActive === true){
		console.log("triggered");
	}
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="bg-black w-25 text-center d-flex flex-column justify-content-center align-items-center">
        <div className="circle1" onClick={(Colors)}></div>
        <div className="circle2"></div>
        <div className="circle3"></div>

		<div className={`circle4 ${isActive ? "active" : ""}`} onClick={(Colors)}></div>
      </div>
    </div>
  );
};

export default Home;
