import React from "react";
import './Home8.css'

export default function Subscribe(){
    return(
        <div className="subscribe-page">
        <div className="container-fluid subscribe">
            <div className="container sub-1">
                <h2><b>Subscribe Our Newsletter & Get Latest News</b></h2>
            </div>
            <div className="container sub-2">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
            <div className="container sub-3  text-center">
                <div>
                <input placeholder="your email address" style={{paddingLeft:"30px"}}/>
                <button>SUBSCRIBE</button></div>
            </div>
            
        </div>
        </div>
    )
}   