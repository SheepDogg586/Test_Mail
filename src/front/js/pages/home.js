import React, { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../store/appContext";
import { Loader } from "@googlemaps/js-api-loader";

import "../../styles/home.css";
let map;
export const Home = () => {
	const { store, actions } = useContext(Context);
	const [search, setSearch] = useState("Florida");
	const [zoom, setZoom] = useState(7);
	let states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
	function handleSubmit (e){
		e.preventDefault();
		setSearch(e.target.Search.value)
		let hasState = states.filter(state => state.toLowerCase().includes(e.target.Search.value.toLowerCase()))
			if (hasState.length){
				setZoom(7)
			}else{setZoom(12)}
	}
	useEffect(() => {
		const loader = new Loader({apiKey: "AIzaSyCiBrtiZK1x072QJ5-d1d8fWXmJhfZSkrs", version: "weekly"});
		loader.load().then(() => {
			const geoCoder = new google.maps.Geocoder();
				geoCoder.geocode({address: search}, (results, status) => {
					if (status == "OK"){
						const map = new window.google.maps.Map(document.getElementById("map"), {center: results[0].geometry.location,
						zoom: zoom,})
						// const marker = new google.maps.Marker({
						// 	position: results[0].geometry.location,
						// 	map,
						// 	icon: "",
						// 	});
						google.maps.event.addListener(map, "click", (e) => {
							console.log(e.latLng.lat(), e.latLng.lng())
						})
					}else{console.log("Map was unable to load.")}
				})
			
			console.log(google)
		})
	}, [search])
	return (
		<div className="HomePage d-flex flex-column align-items-center">
			<form class="d-flex" role="search" onSubmit={handleSubmit} style={{width:'50%', position:'absolute', top: '80px', zIndex:'100'}}>
       			<input class="form-control me-2" type="search" name = "Search" placeholder="Search" aria-label="Search" />
        		<button class="btn btn-success" type="submit">Search</button>
      		</form>
			<div className="map col-12" id= "map" style={{height:'90vh'}}>
				{/* <iframe src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCiBrtiZK1x072QJ5-d1d8fWXmJhfZSkrs&q=${search ? search:"Florida"}`} style={{width:'100%', height:'100vh', border:'0', frameBorder:'0'}}></iframe> */}
			</div>
		</div>
	);
};
