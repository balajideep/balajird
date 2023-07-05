import React from "react";
import tourist from "./image/tourist.jpg"
import "./Home3.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import {RiCarWashingLine} from "react-icons/ri";
import {TfiLocationPin} from "react-icons/tfi"
import {GiReceiveMoney} from "react-icons/gi";
import {TfiHeadphoneAlt} from "react-icons/tfi";
import {BsFillBuildingsFill} from "react-icons/bs";
import {MdOutlineManageAccounts} from "react-icons/md";

export default function Home3(){
    return(
      <div>
          {/* <div className="container-fluid map">
             <div className="row">
                  <div className="col-md-6 container-fluid cold1">
                    <div className="cold11">
                     <img src={tourist}/></div>
                  </div>
                  <div className="col cold2">
                      <div className="cold21">
                    <h3><i>Why Choose Us</i></h3> 
                 <h2>We are Professional Planners for Your Vacations</h2> 
                <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                  quis nostrud exercitation</p><br></br>

                              <div className="call">
                           <div className="row">
                                   <div className="col-md-6">
                                        <div className=" calling1" >
                                    <RiCarWashingLine size={55} color="#FA8D25"/>
                                    <div className="calling11">
                                     <h4>Best Accommodation</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    </div></div> <br></br><br></br><br></br><br></br>
                           
                                     <div className=" calling1">
                                    <GiReceiveMoney size={55} color="#FA8D25"/>
                                    <div className="calling11">
                                     <h4>Best Accommodation</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    </div></div><br></br><br></br><br></br><br></br>

                                    <div className=" calling1">
                                    <TfiHeadphoneAlt size={55} color="#FA8D25"/>
                                    <div className="calling11">
                                     <h4>Best Accommodation</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    </div></div>

                           </div>

                             <div className="col-md-6">
                                <div className="col-md-6 calling2">
                                    <div className="calling21">
                                    <TfiLocationPin size={55} color="#FA8D25"/>
                                    <div className="calling22">
                                     <h4>Best Accommodation</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    </div></div><br></br><br></br><br></br><br></br>


                                    <div className="calling21">
                                    <BsFillBuildingsFill size={53} color="#FA8D25"/>
                                    <div className="calling23">
                                     <h4>Best Accommodation</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    </div></div><br></br><br></br><br></br><br></br>


                                    <div className="calling21">
                                    <MdOutlineManageAccounts size={55} color="#FA8D25"/>
                                    <div className="calling24">
                                     <h4>Best Accommodation</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    </div></div>
                         </div></div></div>
                             </div>
                  </div>
                  </div>
             </div>
          </div> */}
{/* hello */}

      <div className="container-fluid  ">
        
        <div className="row "> 
          <div className="col-md-6 p-0 rightmain"> <div className="right"> <img src={tourist} style={{objectFit:"cover"}}/></div></div>
          <div className="col-md-6 p-0 rightmain1" style={{backgroundColor:"#041230",zIndex:"1"}}>
            <div className="container "style={{padding:"0px 0px"}}> <div className="right1"> <h3><i>Why Choose Us</i></h3> 
                 <h2>We are Professional Planners for Your Vacations</h2> 
                <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                  quis nostrud exercitation</p> </div></div>
            <div className="row right2">
              
                   <div className="col-md-6">

                                 <div className="row">
                                  <div className="col-3 text-center" style={{padding:"0px 0px"}}>
                                  
                                <RiCarWashingLine size={55} color="#FA8D25" className=""/>
                                  </div>
                                  <div className="col-9 meeting">
                                   <h4>Best Accommodation</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                 </div></div><br></br>
                                    
                                    <div className="row">
                                    <div className="col-3 text-center" style={{padding:"0px 0px"}}>
                                    <GiReceiveMoney size={55} color="#FA8D25" className=""/></div>
                                    <div className="col-9 meeting" >
                                    <h4>Compatitive price</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                   </div></div><br></br>

                                   <div className="row">
                                     <div className="col-3 text-center" style={{padding:"0px 0px"}}>
                                    <TfiHeadphoneAlt size={50} color="#FA8D25"/></div>
                                    <div className="col-9 meeting">
                                    <h4>Support 24/7</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                  </div>      </div></div>
              <div className="col-md-6 ">
                                   

                                    <div className="row">
                                     <div className="col-3 text-center" style={{padding:"0px 0px"}}>
                                   <TfiLocationPin size={55} color="#FA8D25"/></div>
                                   <div className="col-9 meeting">
                                   <h4>Beautiful Destination</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    </div></div><br></br>

                                    <div className="row">
                                     <div className="col-3 text-center"style={{padding:"0px 0px"}}>
                                    <BsFillBuildingsFill size={53} color="#FA8D25"/></div>
                                    <div className="col-9 meeting">
                                    <h4>Luxury Hotel</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    </div></div><br></br>

                                    <div className="row">
                                     <div className="col-3 text-center"style={{padding:"0px 0px"}}>
                                    <MdOutlineManageAccounts size={55} color="#FA8D25"/></div>
                                    <div className="col-9 meeting">
                                    <h4>Best Travel Guide</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    </div>
                                 </div>
              </div>
            </div>
          </div></div>
        </div>
       
      </div>


      
    )
}