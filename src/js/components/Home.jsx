import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="d-flex justify-content-center">
			<div className="bg-black w-75 text-center">
				<div className="text-danger">hi</div>
				<div className="text-warning">hi</div>
				<div className="text-success">hi</div>
			</div>
		</div>
	);
};

export default Home;