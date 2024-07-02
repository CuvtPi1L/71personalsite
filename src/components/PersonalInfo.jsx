import React from "react"
import ReactDOM from "react-dom"
import myPicture from "../assets/profilePiv.png"

export default function PersonalInfo(){
  return(
    <div id="PersonalInfo">
      <div>
        <h1> Sean Chen</h1>
        <p>Welcome to my personal site, there is not much here right now, but if you come back later, it's only going to get better </p>
        <p>here is a picture of mine</p>
        <p>see you in a week?</p>



      </div>

      <img src={myPicture} alt="myPicture" width="100px" />
    </div>
  )
}