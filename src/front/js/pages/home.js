import React, { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../store/appContext";
import { Loader } from "@googlemaps/js-api-loader";
import {States} from "../store/states"
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [search, setSearch] = useState("Florida");
	const [zoom, setZoom] = useState(7);
	<States/>
	function handleSubmit(e) {
    	e.preventDefault();
    	setSearch(e.target.Search.value);
    	let hasState = states.filter((state) =>
		state.toLowerCase().includes(e.target.Search.value.toLowerCase())
    	);
    	if (hasState.length) {
    	setZoom(7);
    	} else {
    	setZoom(12);
    	}
	}
	useEffect(() => {
		const loader = new Loader({
		apiKey: "MAP_KEY",
		version: "weekly",
	});
    loader.load().then(() => {
		const geoCoder = new google.maps.Geocoder();
    	geoCoder.geocode({ address: search }, (results, status) => {
        if (status == "OK") {
        const map = new window.google.maps.Map(
            document.getElementById("map"),
            { center: results[0].geometry.location, zoom: zoom }
        );
        const marker = new google.maps.Marker({
        	position: results[0].geometry.location,
        	map: map,
        	icon: "",
        });
        google.maps.event.addListener(map, "click", (e) => {
            console.log(e.latLng.lat(), e.latLng.lng());
        });
        } else {
        	console.log("Map was unable to load.");
        }
    });

    console.log(google);
    });
	}, [search]);
	return (
    <div className="HomePage d-flex flex-column align-items-center">
    	<form
        	className="d-flex"
        	role="search"
        	onSubmit={handleSubmit}
        	style={{
        		width: "50%",
        		position: "absolute",
        		top: "80px",
        		zIndex: "100",
        	}}
    	>
        	<input
        		className="form-control me-2"
        		type="search"
        		name="Search"
        		placeholder="Search"
        		aria-label="Search"
        	/>
        	<button className="btn btn-success" type="submit">
        		Search
        	</button>
    	</form>
		<div className="container text-center" style={{width:'45px',height:'100px', position:'absolute', zIndex:'3', marginLeft:'97%', marginTop:'40vh', paddingBottom: '5px'}}>
			<div className="row">
    			<div className="col" style={{border:'solid black', background:'white'}}>
					storm icon
    			</div>
    			<div className="col" style={{border:'solid black', background:'white'}}>
    				shark icon
    			</div>
    			<div className="col" style={{border:'solid black', background:'white'}}>
    				fish icon
    			</div>
				<div className="col" style={{border:'solid black', background:'white'}}>
    				waves icon
    			</div>
			</div>
		</div>
    <div className="map col-12" id="map" style={{ height: "90vh" }}></div>
    </div>
	);
};
