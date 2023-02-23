import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Contact = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="Contact">
			<div>
                <h1>Contact Page is in the Works</h1>
            </div>
		</div>
	);
};