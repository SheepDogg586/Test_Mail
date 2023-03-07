import React from 'react';
import "/workspace/Waves/src/front/styles/share.css";
import {PermMedia, Room} from "@material-ui/icons";

export default function Share() {
  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
            <img className='shareProfileImg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLkMwkK_sXb8umT6qkgVgaOhmpyl43r702vwd7zlzsgw&s" alt="" />
            <input placeholder="Share about your experience!" className='shareInput'/>
        </div>
        <hr className='shareHr'/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia htmlColor='purple' className='shareIcon'/>
                    <span className='shareOptionText'>Photo or video</span>
                </div>
            </div>
            <div className="shareOptions">
                <div className="shareOption">
                    <Room htmlColor='purple' className='shareIcon'/>
                    <span className='shareOptionText'>Location</span>
                </div>
            </div>
            <button className='shareButton'>Share</button>
        </div>
      </div>
    </div>
  )
}