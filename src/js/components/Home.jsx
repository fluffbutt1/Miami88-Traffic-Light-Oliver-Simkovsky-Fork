import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="d-flex justify-content-center">
			<div className="bg-black w-25 text-center d-flex flex-column justify-content-center align-items-center">
				<div className="text-danger circle1"></div>
				<div className="text-warning circle2"></div>
				<div className="text-success circle3"></div>
			</div>
		</div>
	);
};

export default Home;