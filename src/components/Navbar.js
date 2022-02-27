import React from "react";
import airbnbLogo from "../img/airbnbLogo.png";

export default function Navabar(){
    return(
        <nav className="navbar">
            <img src={airbnbLogo}
            alt='logo'
            className="nav-logo" />
        </nav>
    )
}