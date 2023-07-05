import React from "react";
import './Home6.css'
import green from './image/green.jpg'
import water from './image/water.jpg'
import snow from './image/snow.webp'
import beach from './image/beach.jpg'
import building from './image/building.webp'
import { Card, CardImg } from "react-bootstrap";
export default function Destination() {
    return (
        <div className="destination container-fluid">
            <div className="container destination-width">
                <h5>Best Destination</h5>
                <h2 style={{paddingTop:"6px"}}><b>Discover The Best Destination</b></h2>
                <p style={{color:"#646974",paddingTop:"6px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
            
              
           <div className="row best-destinate">
                 <div className="col-4 kings king1">
                    <div className="cardjing " style={{borderRadius:"10px"}}><img src={green} style={{objectFit:"cover",paddingLeft:"0px",width:"100%", borderRadius:"10px"}}></img> </div>
                   <div className="cardpe text-center">india</div> 
                 </div><br></br>
                 <div className="col-4 kings king2">
                    <div className="card" style={{borderRadius:"10px"}}><img src={water} style={{objectFit:"cover",paddingLeft:"0px",width:"100%",borderRadius:"10px"}}></img></div>
                 </div> <br></br>
                 <div className="col-4 kings king3">
                    <div className="card" style={{borderRadius:"10px"}}><img src={snow} style={{objectFit:"cover",paddingLeft:"0px",width:"100%", borderRadius:"10px"}}></img></div>
                 </div>
           </div> 
           
           <br></br>

           <div className="row best-destinate1">
                 <div className="col-8 kings king4">
                     <div className="card" style={{borderRadius:"10px"}}><img src={beach} style={{objectFit:"cover",paddingLeft:"0px",width:"100%",borderRadius:"10px"}}></img></div>
                 </div><br></br>
                <div className="col-4 kings  king5">
                    <div className="card" style={{borderRadius:"10px"}} > <img src={building} style={{objectFit:"cover",paddingLeft:"0px",width:"100%",borderRadius:"10px"}}></img></div>
                </div><br></br>
           </div>
        </div>
    )
}