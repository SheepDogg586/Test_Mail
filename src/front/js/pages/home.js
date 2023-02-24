import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="HomePage">
			<div className="map" style={{width:'100%', height:'80%'}}>
				<iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCiBrtiZK1x072QJ5-d1d8fWXmJhfZSkrs&q=FL" style={{width:'100%', height:'100vh', border:'0', frameBorder:'0'}}></iframe>
			</div>
		</div>
	);
};
