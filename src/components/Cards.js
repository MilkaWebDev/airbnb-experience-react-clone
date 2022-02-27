import React from "react";
import Card from "./Card";
import data from "../data";

export default function Cards(){
    return(
        <div className="cards-container">
        {data.map((item) => {
            return (
                <div>
                    <Card props={item} key={item.id} />
                </div>
            )
         })
        }
    </div>
    )
    
    
}