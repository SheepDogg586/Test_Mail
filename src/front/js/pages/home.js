import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="HomePage">
			<div className="map" style={{width:'100%', height:'100vh'}}>
				<iframe src="https://www.google.com/maps/embed/v1/place?key=__&q=Space+Needle+WA" style={{width:'100%', height:'100vh', border:'0', frameBorder:'0'}}></iframe>
			</div>
		</div>
	);
};
