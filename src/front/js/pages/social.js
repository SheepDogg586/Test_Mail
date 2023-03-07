import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FirstPost } from "../component/post/firstPost";
import { SecondPost } from "../component/post/secondPost";
import { ThirdPost } from "../component/post/thirdPost";
import Share from "../component/share";
import { Context } from "../store/appContext";

export const Social = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="Social" style={{backgroundImage:'url("https://images.pexels.com/photos/66258/staniel-cay-swimming-pig-seagull-fish-66258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize:'cover'}}>
			<br/> <Share/> <br/>
			<FirstPost/> <br/>
			<SecondPost/> <br/>
			<ThirdPost/> <br/>
		</div>
	);
};