import React from "react";
import { useState } from "react";






const Home = () => {

	const [luzColor, setLuzColor] = useState(["red", "yellow", "green"]);
	const [encenderLuz, setEncenderLuz] = useState(null);


	function cambiarLuz(index) {
		setEncenderLuz(index);
	}


	return (
		<div className="text-center">
			
			<div className="bg-dark d-flex flex-column justify-content-center align-items-center m-3 py-3" style={{width: "100px"}}>
				{luzColor.map((color, index) =>
					<div
						key={index}
						style={{
							background: color,
							width: "50px", height: "50px",
							margin: "10px",
							borderRadius: "50%",
							boxShadow: encenderLuz === index ? `0px 0px 20px 10px ${color}` : "none",
						}} onClick={() => cambiarLuz(index)}></div>
				)}
				<div className="palo"></div>
			</div>
		</div>

	);
};

export default Home;