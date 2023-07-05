import React from "react";
import "./Home4.css";
import nice from "./image/nice.png";
import nice1 from "./image/nice1.png";
import aeroplane from "./image/aeroplan.jpg";
import aeroplane1 from "./image/aeroplane1.jpg";
import flighttag from "./image/flighttag.png";
import point from "./image/point.jpg";
import pict from "./image/pict.jpg"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


import { SiTripadvisor } from "react-icons/si";
import { TiTickOutline } from "react-icons/ti";
import { TfiMobile } from "react-icons/tfi";
import { LuCalculator } from "react-icons/lu";

export default function Home4() {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 768 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 767, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    return (
        <div>
            <div className="container-fluid">
                <div className="count mt-1">
                    <h3>Our Process</h3>
                    <h2><b>We Complete Every Step Carefully</b></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div></div>

            {/* <div className="container counting">
                  <div className="row">
                      <div className="col counting1"> 
                                    <img src={nice } sizes={2}  className="nice"/>
                             <div className="counter">
                                   <div className="coun">01</div>
                                 <div  className="counting121"><TfiMobile size={50} color="white"/></div>
                                
                                    <div className="counting11">
                              <h4>Book A Tour</h4>
                             <p> Lorem ipsum dolor sit amet, consecte adipiscing elit, 
                                sed do eiusmod dolore magna</p></div> 
                             </div></div>
                      
                      <div className="col counting1"> 
                             <div className="counter counter1">
                                  <img src={nice1} width={100} className="nice1"/>
                               <div className="coun coun1">02</div>
                                 <div  className="counting121"><LuCalculator size={50} color="white"/></div>
                                    <div className="counting11">
                              <h4>Payment Process</h4>
                             <p> Lorem ipsum dolor sit amet, consecte adipiscing elit, 
                                sed do eiusmod dolore magna</p></div> 
                             </div>
                      </div>
                       

                       <div className="col counting1"> 
                              
                             <div className="counter">
                                <div className="coun ">03</div>
                                 <div  className="counting121"><TiTickOutline size={50} color="white"/></div>
                                    <div className="counting11">
                              <h4>Confirmation</h4>
                             <p> Lorem ipsum dolor sit amet, consecte adipiscing elit, 
                                sed do eiusmod dolore magna</p></div> 
                             </div>
                       </div>
                      

                      <div className="col counting1"> 
                       
                             <div className="counter counter1">
                                <div className="coun coun1">04</div>
                                 <div  className="counting121"><SiTripadvisor size={50} color="white"/></div>
                                    <div className="counting11">
                              <h4>Enjoy Your Trip</h4>
                             <p> Lorem ipsum dolor sit amet, consecte adipiscing elit, 
                                sed do eiusmod dolore magna</p></div> 
                           </div>
                      </div>
                  </div>
            </div>  */}
            <div className="container can">
                <div className="row cardred text-center">
                    <div className="col-lg-3 north">
                        <div class="card carding1 " style={{ width: "98%" }}>


                            <div className="row">
                                <div className="col-12 ">
                                    <div className="cardbox mx-auto mt-5"><TfiMobile size={50} color="white" className="mt-1" /><div className="cardbox1"><b>01</b></div></div>
                                    <img src={nice} sizes={2} className="nice" /></div>
                                <div className="col-12">
                                    <div class="card-body text-center">
                                        <h5 class="card-title"><b>Book A Tour</b></h5>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod dolore magna</p>
                                    </div></div></div>
                        </div></div>

                    <div className="col-lg-3 north">
                        <div class="card carding2" style={{ width: " 98%" }}>

                            <div className="row">
                                <div className="col-12 ">
                                    <div className="cardbox mx-auto mt-5"><LuCalculator size={50} color="white" className="mt-1" /><div className="cardbox1"><b>02</b></div></div>
                                    <img src={nice1} sizes={2} className="nice1" /></div>
                                <div className="col-12">
                                    <div class="card-body">
                                        <h5 class="card-title"><b>Payment Process</b></h5>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod dolore magna</p>
                                    </div></div></div>
                        </div>
                    </div>
                    <div className="col-lg-3  south">
                        <div class="card carding1" style={{ width: "98%" }}>

                            <div className="row">
                                <div className="col-12 ">
                                    <div className="cardbox mx-auto mt-5"><TiTickOutline size={50} color="white" className="mt-1" /><div className="cardbox1"><b>03</b></div></div>
                                    <img src={nice} height={3} width={3} className="nice" /> </div>
                                <div className="col-12">
                                    <div class="card-body">
                                        <h5 class="card-title"><b>Confirmation</b></h5>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod dolore magna</p>
                                    </div></div></div>
                        </div>
                    </div>
                    <div className="col-lg-3  south">
                        <div class="card carding2" style={{ width: "98%" }}>
                            <div className="row">
                                <div className="col-12 ">
                                    <div className="cardbox mx-auto mt-5"><SiTripadvisor size={50} color="white" className="mt-1" /><div className="cardbox1"><b>04</b></div></div>
                                </div>
                                <div className="col-12">
                                    <div class="card-body">
                                        <h5 class="card-title"><b>Enjoy Your Trip</b></h5>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod dolore magna</p>
                                    </div></div></div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container horizontal-line">
                <hr></hr>
            </div>




            <div className="container-fluid flight-page" >

                <Carousel responsive={responsive}>
                    <div className="row">
                        <div className="col d-flex flight-row">
                              <div className="col-3  flight"><img src={aeroplane} style={{ paddingLeft: "0px" }}/></div>
                              <div className="col-9  flights"><h3><b>Tripply</b></h3></div>
                    </div></div>
                    <div className="row">
                    <div className="col d-flex flight-row">
                               <div className="col-3 flight"><img src={aeroplane1} style={{ paddingLeft: "0px" }}/></div>
                              <div className="col-9  flights"><h3><b>Trivaco</b></h3></div>
                    </div></div>
                    <div className="row">
                    <div className="col d-flex flight-row">
                              <div className="col-3  flight"><img src={flighttag} style={{ paddingLeft: "0px" }}/></div>
                              <div className="col-9  flights"><h3><b>Triptag</b></h3></div>
                    </div></div>
                    <div className="row">
                    <div className="col d-flex flight-row">
                              <div className="col-3  flight"><img src={aeroplane} style={{ paddingLeft: "0px" }}/></div>
                              <div className="col-9  flights"><h3><b>Tripply</b></h3></div>
                    </div></div>
                    <div className="row">
                    <div className="col d-flex flight-row">
                               <div className="col-3  flight"><img src={aeroplane1} style={{ paddingLeft: "0px" }}/></div>
                              <div className="col-9  flights"><h3><b>Trivaco</b></h3></div>
                    </div></div>
                    <div className="row">
                    <div className="col d-flex flight-row">
                              <div className="col-3  flight"><img src={flighttag} style={{ paddingLeft: "0px" }}/></div>
                              <div className="col-9  flights"><h3><b>Triptag</b></h3></div>
                    </div></div>

                    <div className="row">
                    <div className="col d-flex flight-row">
                              <div className="col-3  flight"><img src={aeroplane} style={{ paddingLeft: "0px" }}/></div>
                              <div className="col-9  flights"><h3><b>Tripply</b></h3></div>
                    </div></div>
                    <div className="row">
                    <div className="col d-flex flight-row">
                               <div className="col-3  flight"><img src={aeroplane1} style={{ paddingLeft: "0px" }}/></div>
                              <div className="col-9  flights"><h3><b>Trivaco</b></h3></div>
                    </div></div>
                    <div className="row">
                    <div className="col d-flex flight-row">
                              <div className="col-3  flight"><img src={flighttag} style={{ paddingLeft: "0px" }}/></div>
                              <div className="col-9  flights"><h3><b>Triptag</b></h3></div>
                    </div></div>
                    <div className="row">
                    <div className="col d-flex flight-row">
                              <div className="col-3  flight"><img src={aeroplane} style={{ paddingLeft: "0px" }}/></div>
                              <div className="col-9  flights"><h3><b>Tripply</b></h3></div>
                    </div></div>
                    <div className="row">
                    <div className="col d-flex flight-row">
                               <div className="col-3  flight"><img src={aeroplane1} style={{ paddingLeft: "0px" }}/></div>
                              <div className="col-9  flights"><h3><b>Trivaco</b></h3></div>
                    </div></div>
                    <div className="row">
                    <div className="col d-flex flight-row">
                              <div className="col-3  flight"><img src={flighttag} style={{ paddingLeft: "0px" }}/></div>
                              <div className="col-9  flights"><h3><b>Triptag</b></h3></div>
                    </div>
                    </div>
                </Carousel>
               
            </div>
              <br></br><br></br>
        </div>
    )
}