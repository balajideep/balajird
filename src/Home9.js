import React from "react";
import './Home9.css'
import logo from './image/logo-footer.png'
import { ImMap2 } from "react-icons/im";
import { FaGreaterThan } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import {AiOutlineTwitter } from "react-icons/ai";
import { SiInstagram } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { FaApplePay } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { SiAmazonpay } from "react-icons/si";
import { SiPaytm } from "react-icons/si";
import {  BsTelephone } from "react-icons/bs";
export default function Bottom() {
    return (
        <div className="container-fluid footer1">
            {/* <div className="container" style={{paddingRight:"0px"}}>
                <div className="row" style={{paddingRight:"0px"}}>
                    <div className="col-md-3">
                        <img src={logo} alt="###" style={{paddingLeft:"0px"}} />
                    </div>
                    <div className="col-md-5 logo">
                        <h4>About Travella</h4>
                        <p>Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                       
                        <div className="row" style={{paddingLeft:"0px"}}>
                                  
                            <div className="col-2 icon-color"> 
                            <ImMap2 style={{ height: "20px", width: "20px", paddingLeft: "0px" }} className="logo" /></div>
                            <div className="col-10" style={{paddingTop:"6px"}}><p> Jl. Raya Ubud No.70, Ubud - Bali</p></div>
                        </div>

                    </div>
                    <div className="col-md-2 text-left" >
                        <h4>Other Pages</h4>
                        <div className="hello">
                            <p><FaGreaterThan style={{ color: "orange" }} />Home</p>
                            <p><FaGreaterThan style={{ color: "orange" }} />AboutUs</p>
                            <p><FaGreaterThan style={{ color: "orange" }} />Packages</p>
                            <p><FaGreaterThan style={{ color: "orange" }} />Destination</p>
                        </div>
                    </div>
                    <div className="col-md-2 text-left" >
                    <h4>Quick Links</h4>
                        <div className="hello1">
                            <p><FaGreaterThan style={{ color: "orange" }} />Home</p>
                            <p><FaGreaterThan style={{ color: "orange" }} />AboutUs</p>
                            <p><FaGreaterThan style={{ color: "orange" }} />Packages</p>
                            <p><FaGreaterThan style={{ color: "orange" }} />Destination</p>
                        </div>
                    </div>
                </div>
            </div>  */}

            <div className="maker" >
                <div className="row">
                    <div className="col-2  ribe"> <img src={logo} alt="###" style={{paddingLeft:"0px"}} /></div>
                    <div className="col-5   rifel">
                            <div className="rip">
                            <h4>About Travella</h4>
                             <p style={{paddingTop:"10px"}}>Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                       
                            <div className="row" style={{paddingLeft:"10px"}}>

                             <div className=" col-3 mail">
                                         < ImMap2 color="white"   className="mail-icon" style={{paddingLeft:"3px"}}/></div>
                            <div className="col-9 mailing" ><p> Jl. Raya Ubud No.70, Ubud - Bali</p></div>
                        </div>

                            </div>
                    </div>
                    <div className="col-3 cover1"> 
                          <div className="cov1">
                            <h4>About Travella</h4>  
                                  <div className="" style={{paddingTop:"12px"}}>
                             <a href=""><FaGreaterThan size={10} style={{ color: "orange" }} /><span className="" style={{paddingLeft:"10px"}}> Home</span></a> <br/></div>
                                  <div className="" style={{paddingTop:"13px"}}>
                            <a href=""><FaGreaterThan  size={10}style={{ color: "orange" }} /><span className="" style={{paddingLeft:"10px"}}> AboutUs</span></a><br/></div>
                                  <div className="" style={{paddingTop:"13px"}}>
                            <a href=""><FaGreaterThan size={10}style={{ color: "orange" }} /> <span className="" style={{paddingLeft:"10px"}}>Packages</span></a><br/></div>
                                  <div className="" style={{paddingTop:"13px"}}>
                            <a href=""><FaGreaterThan size={10}style={{ color: "orange" }} /><span className="" style={{paddingLeft:"10px"}}> Destination</span></a></div>
                    </div></div>
                    <div className="col-2 cover2">
                           <div className="cov2">
                            <h4>Quick Links</h4>
                                   <div className="" style={{paddingTop:"12px"}}>
                            <a href="" ><FaGreaterThan  size={10}style={{ color: "orange" }} /> <span className="" style={{paddingLeft:"10px"}}>Privacy Policy</span></a><br/></div>
                                  <div className="" style={{paddingTop:"13px"}}>   
                            <a href=""><FaGreaterThan size={10}style={{ color: "orange" }} /><span className="" style={{paddingLeft:"10px"}}> Term of Service</span></a><br/></div>
                                   <div className="" style={{paddingTop:"13px"}}>
                            <a href=""><FaGreaterThan size={10}style={{ color: "orange" }} /><span className="" style={{paddingLeft:"10px"}}> Disclaimer</span></a><br/></div>
                                    <div className="" style={{paddingTop:"13px"}}>
                            <a href=""><FaGreaterThan size={10}style={{ color: "orange" }} /><span className="" style={{paddingLeft:"10px"}}> Credits</span></a></div>
                    </div></div>
                </div>
            </div>
                      
                      
                      <div className="container-fluid white-change" style={{color:"white"}}> <hr></hr></div>
                    

                    <div className="container-fluid bookdown">
                          <div className="row">
                               <div className="col-md-3 holiday1">
                                   <h4><b>Book Your Holiday</b></h4>
                                       <div className="" style={{paddingTop:"20px",paddingLeft:"10px"}}>
                                        <div className="row">
                                         <div className=" col-3 mail">
                                         <BsTelephone color="white"  className="mail-icon"/></div>
                                         <div className="col-9 mailing">
                                         <p>(+021) 250-355</p></div>
                                         </div></div>
                               </div>
                               <div className="col-md-3 holiday2">
                                      <h4><b>Email Us</b></h4>
                                       <div className="" style={{paddingTop:"20px",paddingLeft:"10px"}}>
                                        <div className="row">
                                         <div className=" col-3 mail">
                                         < AiOutlineMail color="white"  className="mail-icon"/></div>
                                         <div className="col-9 mailing" >
                                         <p>support@domain.com</p></div>
                                         </div></div>
                              </div>
                              <div className="col-md-3 holiday3">
                            <h4><b>Follow Us</b></h4>
                                       <div className="row face" style={{paddingTop:"20px"}}>
                                             
                                             <div className="col-2 ">
                                                  <button className="facebook">
                                                <FaFacebookF   color="white" style={{paddingBottom:"4px"}} className="facebook-size"/></button></div>
                                             <div className="col-2 ">
                                                    <button className="facebook">
                                                <AiOutlineTwitter  color="white" style={{paddingBottom:"4px"}}  className="facebook-size"/></button></div>
                                             <div className="col-2 ">
                                                    <button className="facebook">
                                                <SiInstagram  color="white" style={{paddingBottom:"6px"}}  className="facebook-size"/></button></div>
                                             <div className="col-2 ">
                                                    <button className="facebook">
                                                <FaLinkedinIn color="white" style={{paddingBottom:"6px"}}  className="facebook-size"/></button></div>
                                       </div>
                                
                               </div>
                               <div className="col-md-3 holiday4">
                                     <div className="holiday-payment">
                                   <h4><b>Payment</b></h4>
                                          <div className="row " style={{paddingTop:"28px"}}>
                                             
                                             <div className="col-2 ">
                                                    <div className="pay-amount">
                                                <SiPaytm size={25} color="black" /></div></div>
                                             <div className="col-2 ">
                                                    <div className="pay-amount">
                                                <RiVisaLine size={25} color="black" /></div></div>
                                             <div className="col-2 ">
                                                    <div className="pay-amount">
                                                <FaApplePay size={25} color="black"/></div></div>
                                             <div className="col-2 ">
                                                    <div className="pay-amount">
                                                <SiAmazonpay size={22}color="black" /></div></div>
                                                <div className="col-2 ">
                                                    <div className="pay-amount">
                                                <FaGooglePay size={25}color="black"/></div></div>
                                              
                                       </div></div>
                               </div>
                          </div>
                    </div>
        </div>
    )
}