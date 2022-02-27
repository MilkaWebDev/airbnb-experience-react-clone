import React from "react";
import slider from "../img/slider.png"

export default function Hero(){
    return(
        <div className="hero-container">
            <img src={slider}
            alt="solo un slider" 
            className="main-img"
            />

            <h1>Online Experiences</h1>

            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home. </p>
        
        </div>
    )
}