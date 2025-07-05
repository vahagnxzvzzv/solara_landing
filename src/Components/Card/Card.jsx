import React from "react";
import './Card.css'
import bridge from '../Assets/bridge.svg'

const Card = ({ image, place }) => {
    return (
        <div className="cardContainer">
            <img src={image} style={{objectFit: 'fill', display: 'block'}} />
            {/* asdas */}
            {/* adasd */}
            <h2 className="cardPlaceName">{place}</h2>
        </div>
    )
}

export default Card