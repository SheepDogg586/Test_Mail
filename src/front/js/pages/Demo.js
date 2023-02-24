import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/bg.jpg";
import { Context } from "../store/appContext";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="Equipment" style={{backgroundImage:'url("https://images.pexels.com/photos/4321085/pexels-photo-4321085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize:'cover'}}>
			<div className="Searcher" style={{width:'50%',height:'45px',justifyContent:'center', alignContent:'center', margin:'auto'}}>
				<form class="d-flex" role="search">
        			<input class="form-control me-2" type="search" placeholder="Search...." aria-label="Search" style={{textAlign:'center', marginTop:'2px'}}></input>
        			<button class="btn btn-success" type="submit" style={{marginTop:'2px'}}>Search</button>
      			</form>
			</div>
			<div className="results" style={{width:'60%', height:'85vh', opacity:'0.4', background:'black', margin:'auto'}}>

			</div>
		</div>
	);
};
