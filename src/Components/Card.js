import React from "react";
import katie from '../images/katie.png'
import star from '../images/star.png'

const Card=(props) => {
  let badge
  if(props.cardData.openSpots === 0){
    badge="SOLD OUT"
  }else if(props.cardData.location === "Online"){
    badge="ONLINE"
  }
  return(
    <div className="card">
      {badge && <div>{badge}</div>}
      <img src={`../images/${props.cardData.coverImg}`} className="card--image"/> 
      {/* {"../images/"+`${props.img}`} */}
      <div className="card--stats">
        <img src={star} className="card--star"/>
        <span>{props.cardData.stats.rating}</span>
        <span className="grey">({props.cardData.stats.reviewCount}) • </span>
        <span className="grey">{props.cardData.location}</span>
      </div>
      <p className="card--title">{props.cardData.title}</p>
      <p className="card--price"><b>From {props.cardData.price}</b> / person</p>
    </div>
  )
}
// {`../images/${props.img}`}
export default Card