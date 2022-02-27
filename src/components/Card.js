import React from "react";
import star from "../img/star.png"

const Card = ( {props} ) => {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card-container">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.coverImg} alt="course poster" 
            className="card-img"/>
            <div className="card-rating">
                <img src={star} alt="star" />
                <span>{props.stats.rating}</span>
                <span>({props.stats.reviewCount}) ·</span>
                <span>{props.location}</span>
            </div>
            <p className="card-title">{props.title}</p>
            <p>From ${props.price} / person</p>
        </div>
    )
}

export default Card
