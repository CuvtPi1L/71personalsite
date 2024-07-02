import React from "react"
import ReactDOM from "react-dom"
import myPicture from "../assets/profilePiv.png"

export default function PersonalInfo(){
  return(
    <div className="PersonalInfo">
      <div>
        <h1> Sean Chen</h1>
        <p>Welcome to my personal site, there is not much here right now, but if you come back later, there will be more items. </p>
      </div>

      <img src={myPicture} alt="myPicture" width="60px" />
    </div>
  )
}