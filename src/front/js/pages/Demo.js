import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Image from "../../img/bg.jpg";
import { SearchBar } from "../component/searchbarEq";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="Equipment" style={{justifyContent: 'center', alignItems: 'center', backgroundImage: `url(${Image})`, backgroundSize: 'cover', height:'85.5vh'}}>
			<div className="searchBar" style={{marginBottom:'5px'}}>
				<SearchBar />
			</div>
			<div className="searchResults" style={{width:'60%', height:'70vh', margin:'auto', backgroundColor:'black', opacity:'0.8'}}>
				
			</div>
		</div>
	);
};
