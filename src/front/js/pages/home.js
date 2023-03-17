import React, { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../store/appContext";
import { Loader } from "@googlemaps/js-api-loader";
import { States } from "../store/states";
import Shark from "../../img/sharkicon.png";
import Fish from "../../img/fishingicon.png";
import Storm from "../../img/stormicon.png";
import Rip from "../../img/wavesicon.png";

import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [search, setSearch] = useState("Florida");
  const [zoom, setZoom] = useState(7);

  <States />;
  function handleSubmit(e) {
    e.preventDefault();
    setSearch(e.target.Search.value);
    let hasState = States.filter((state) =>
      state.toLowerCase().includes(e.target.Search.value.toLowerCase())
    );
    if (hasState.length) {
      setZoom(8);
    } else {
      setZoom(15);
    }
  }
  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.MAP_KEY,
      version: "weekly",
    });
    loader.load().then(() => {
      const geoCoder = new google.maps.Geocoder();
      geoCoder.geocode({ address: search }, (results, status) => {
        if (status == "OK") {
          const map = new window.google.maps.Map(
            document.getElementById("map"),
            {
              center: results[0].geometry.location,
              zoom: zoom,
              mapId: "4af5086845926c73",
            }
          );
          var markers = [
            new google.maps.Marker({
              position: { lat: 26.32905, lng: -81.83099 },
              map: map,
              title: "Fish",
              draggable: true,
              icon: {
                url: Fish,
                scaledSize: new google.maps.Size(450, 250),
              },
            }),
            new google.maps.Marker({
              position: { lat: 26.33934, lng: -81.8428 },
              map: map,
              title: "Shark",
              draggable: true,
              icon: {
                url: Shark,
                scaledSize: new google.maps.Size(450, 250),
              },
            }),
            	new google.maps.Marker({
            		position: {lat: 26.32907, lng:-81.80843 },
            		map:map,
            		title: "Storm",
            		draggable: true,
            		icon:{
            			url: Storm,
            			scaledSize: new google.maps.Size(450,250)
            		}
            	}),
            	new google.maps.Marker({
            		position: {lat: 26.36616, lng: -81.86298},
            		map:map,
            		title: "Rip",
            		draggable: true,
            		icon:{
            			url: Rip,
            			scaledSize: new google.maps.Size(450,250)
            		}
            	}),
          ];
          const bounds = new google.maps.LatLngBounds();
          markers.forEach((marker) => {
            bounds.equals(marker.getPosition());
          });
          marker.fitBounds(bounds);
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

  useEffect(() => {
    if (store.token && store.token != "" && store.token != undefined)
      actions.getMessage();
  }, [store.token]);

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
      <div className="map col-12" id="map" style={{ height: "87vh" }}></div>
    </div>
  );
};
