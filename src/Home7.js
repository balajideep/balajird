import React from "react";
import main from './image/main.jpg'
import main1 from './image/main1.jpg'
import main2 from './image/main2.jpg'
import './Home7.css'
import { AiOutlineArrowRight } from "react-icons/ai";
export default function Ourblog(){
    return(
        <div className="ourblog container-fluid">
            <br></br>
        <div className="container ourblog-width">
            <h5>Our Blog</h5>
            <h2><b>Lates News and Articles</b></h2>
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
          <div className="ourblog-how">
        <div className="row">
            <div className="col-md-4">
                <div className="card " style={{borderRadius:"10px"}}><img src={main} alt="##" style={{ objectFit: "cover", height: "300px",width:"100%", borderRadius:"10px",paddingLeft:"0px"}}  /></div>
                <div className="card-body" style={{paddingLeft:"0px"}}>
                    <p style={{textAlign:"left", paddingTop:"12px"}}>Travel</p>
                    <a style={{fontSize:"20px"}}><b>The Top 10 Destinations You Should Visit In 2022</b></a>
                    <p style={{textAlign:"left",paddingTop:"8px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <a href="#"><b>READMORE <AiOutlineArrowRight/></b></a>
                </div>
            </div>
            <div className="col-md-4 ourblog-next">
                <div className="card"style={{borderRadius:"10px"}}><img src={main1} alt="##" style={{ objectFit: "cover", height: "300px",width:"100%", borderRadius:"10px",paddingLeft:"0px"}} /></div>
                <div className="card-body" style={{paddingLeft:"0px"}}>
                    <p style={{textAlign:"left", paddingTop:"12px"}}>Travel</p>
                    <a style={{fontSize:"20px"}}><b>The Top 10 Destinations You Should Visit In 2022</b></a>
                    <p style={{textAlign:"left",paddingTop:"8px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <a href="#"><b>READMORE <AiOutlineArrowRight/></b></a>
                </div>
            </div>
            <div className="col-md-4 ourblog-next">
                <div className="card"style={{borderRadius:"10px"}}><img src={main2} alt="##" style={{ objectFit: "cover", height: "300px",width:"100%", borderRadius:"10px",paddingLeft:"0px"}}  /></div>
                <div className="card-body" style={{paddingLeft:"0px"}}>
                    <p style={{textAlign:"left", paddingTop:"12px"}}>Travel</p>
                    <a style={{fontSize:"20px"}}><b>The Top 10 Destinations You Should Visit In 2022</b></a>
                    <p style={{textAlign:"left",paddingTop:"8px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <a href="#"><b>READMORE <AiOutlineArrowRight/></b></a>
                </div>
            </div>
            </div>
        </div>
        <br/>
        </div>
    )
    }