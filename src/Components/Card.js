import React from "react";
import katie from '../images/katie.png'
import star from '../images/star.png'

const Card=(props) => {
  return(
    <div className="card">
      <img src={`../images/${props.image}`} className="card--image"/> 
      {/* {"../images/"+`${props.img}`} */}
      <div className="card--stats">
        <img src={star} className="card--star"/>
        <span>{props.rating}</span>
        <span className="grey">({props.reviewCount}) • </span>
        <span className="grey">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price"><b>From {props.price}</b> / person</p>
    </div>
  )
}
// {`../images/${props.img}`}
export default Card