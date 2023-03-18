import React, { useState } from 'react';
import "/workspace/Waves/src/front/styles/share.css";
import { PermMedia, Room } from "@material-ui/icons";
import Profile from "../../../img/profile.png";

export function Share() {
  const [photo, setPhoto] = useState(null);
  const [caption, setCaption] = useState("");
  const [location, setLocation] = useState("");

  const handlePhotoUpload = (event) => {
    setPhoto(event.target.files[0]);
  }

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  }

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  }

  const handleShareClick = () => {
  }

  return (
    <div className='share'>
      <div className="shareWrapper" style={{backgroundColor:'whitesmoke', opacity:'0.9'}}>
        <div className="shareTop" >
          <a href='/profile'>
            <img className='shareProfileImg' src={Profile}  />
          </a>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handlePhotoUpload} 
            className='shareInput'
          />
          <textarea 
            placeholder="Write a caption..." 
            value={caption} 
            onChange={handleCaptionChange} 
            className='shareInput'
          />
          <input 
            type="text" 
            placeholder="Where are you?" 
            value={location} 
            onChange={handleLocationChange} 
            className='shareInput'
          />
        </div>
        <hr className='shareHr'/>
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor='purple' className='shareIcon'/>
              <span className='shareOptionText'>Add Photo or Video</span>
            </div>
          </div>
          <div className="shareOptions">
            <div className="shareOption">
              <Room htmlColor='purple' className='shareIcon'/>
              <span className='shareOptionText'>Add Location</span>
            </div>
          </div>
          <button className='shareButton' onClick={handleShareClick}>Share</button>
        </div>
      </div>
    </div>
  )
}


