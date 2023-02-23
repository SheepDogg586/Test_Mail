import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";

export const Social = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="Social" style={{backgroundImage:'url("https://images.pexels.com/photos/66258/staniel-cay-swimming-pig-seagull-fish-66258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize:'cover'}}>
			<div style={{width:'100%', height:'100vh', background:'black', margin:'auto', color:'white', opacity:'0.4', textAlign:'center'}}>
                <h1>Social Coming Soon!</h1>
            </div>
		</div>
	);
};