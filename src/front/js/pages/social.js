import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FirstPost } from "../component/post/firstPost";
import { SecondPost } from "../component/post/secondPost";
import { ThirdPost } from "../component/post/thirdPost";
import Share from "../component/share";
import { Context } from "../store/appContext";
import Image from "../../img/bg.jpg";

export const Social = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="social main" style={{ backgroundImage: `url(${Image})`, backgroundSize: 'cover' }}>
			<br/> <Share/> <br/>
			<FirstPost/> <br/>
			<SecondPost/> <br/>
			<ThirdPost/> <br/>
		</div>
	);
};