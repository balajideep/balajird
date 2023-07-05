import React from "react";

import { Button } from "react-bootstrap";
import "./Home2.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import tower from "./image/tower.jpg";
import map from "./image/map.jpg";
import enjoy from "./image/enjoy.jpg";
import { MdLocationOn } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";


export default function Home2() {
  return (

    <div>
      <div className="container-fluid man">
        <div className="row mx-auto">
          <div className="col-md-3 col-sm-12 mg">
            <div className="mg1">
              <h4> Tours</h4>
              <h2><b>Popular Tours For You</b></h2></div>
          </div>
          <div className="col-md-6 col-sm-12 mmg">
            <div className="mmg1">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris</p></div>
          </div>
          <div className="col-md-3 col-sm-12 mgg">
            <Button variant="warning" className='Button3'>ALL PACKAGES</Button>
          </div>
        </div>

      </div>
      {/* <div className="mane">
            <div className="container-fluid man1">
                <div className="row mx-auto">
                <div className=" col-lg-4  col-md-6 mt-4">
                    <div class="card ">
                             <div >
                        <img src={tower} class="card-img-top" alt="..." ></img>
                            <div className="card-relative"><p className="relate-obsolute"><FaCalendarAlt color="#FA8D25"/> 5 Days <span></span>|  <FaUsers color="#FA8D25"/> 10</p></div>
                                   
                            

                        </div>
                        <div class="card-body cardb">
                        <h4 class="card-title">Paris-France</h4>
                        <p class="card-text"><MdLocationOn size={20} color="#FA8D25"/>  Champ de Mars, 5 AV. Anatole</p><hr></hr>
                              <div className="row">
                              <div className="col ">
                                   <p>From <h4 style={{color:"black"}}>$420</h4></p>
                              </div>
                              <div className="col mt-2 cardcc "><a href="#">EXPLORE <BsArrowRightShort size={20}/></a></div>
                              </div> 
                        </div>
                      </div>
                </div>
                <div className=" col-lg-4 col-md-6 mt-4">

                     <div class="card">
                            <img src={map} class="card-img-top" alt="..."></img>
                               <div className="card-relative"><p className="relate-obsolute"><FaCalendarAlt color="#FA8D25"/> 5 Days <span></span>|  <FaUsers color="#FA8D25"/> 10</p></div>

                            <div class="card-body cardb">
                            <h4 class="card-title">NTT-Indonesia</h4>
                            <p class="card-text"><MdLocationOn size={20} color="#FA8D25"/> Flores Nusa Tenggara Timir</p><hr></hr>
                                  <div className="row ">
                                       <div className="col ">
                                            <p>From <h4 style={{color:"black"}}>$420</h4></p>
                                       </div>
                                       <div className="col mt-2 cardcc"><a href="#">EXPLORE <BsArrowRightShort size={20}/></a></div>
                                       </div> 
                          </div>
                      </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-4 carding">
                     <div class="card">
                               <img src={enjoy} class="card-img-top" alt="..."></img>
                               <div className="card-relative"><p className="relate-obsolute cardre"><FaCalendarAlt color="#FA8D25"/> 5 Days <span></span>|  <FaUsers color="#FA8D25"/> 10</p></div>
                              
                               <div class="card-body cardb cardyy">
                               <h4 class="card-title">Bali-Indonesia</h4>
                               <p class="card-text"><MdLocationOn size={20} color="#FA8D25"/> JI. Raya Singaraja-Denpasar</p><hr></hr>
                                    <div className="row">
                                       <div className="col ">
                                       <p>From <h4 style={{color:"black"}}>$320</h4></p>
                                    </div>
                                       <div className="col mt-2 cardcc"><a href="#">EXPLORE <BsArrowRightShort size={20}/></a></div>
                                  </div> 
                              </div>
                      </div>    
                    </div>
                </div></div>
            </div> */}


      <div className="container-fluid">
        <div className="container tower">
          <div className=" row" >
            <div className="col-4 car " style={{ padding: "0px 0px" }}>
              <div class="card carding" style={{ width: "97%" }}>
                <img src={tower} class="card-img-top" alt="..." style={{objectFit:"cover", padding: "0px 0px" }}></img>
                <div className="releted"><p className="container obsolute"><FaCalendarAlt size={17}
                  color="#FA8D25" /> 5 Days | <FaUsers size={17} color="#FA8D25" /> 10</p></div>
                <div class="card-body">
                  <div className="container mt-3">
                    <h5 class="card-title"><b>Paris-France</b></h5>
                    <p class="card-text"><MdLocationOn size={17} color="#FA8D25" />Champ de Mars, 5 Av. Anatole</p><hr></hr>
                    <div className="row">
                      <div className="col">
                        <p>From<h5><b>$ 620</b></h5></p>

                      </div>
                      <div className="col cardre " >
                        <div className="cardrun">
                          <a href="" ><b>EXPLORE <BsArrowRightShort size={22}  /></b></a></div>
                      </div>
                    </div>
                  </div></div>
              </div>
<br></br>
            </div> 
            <div className="col-4 car" style={{ padding: "0px 0px" }}>
              <div class="card carding " style={{ width: " 97%" }}>
                <img src={enjoy} class="card-img-top" alt="..." style={{objectFit:"cover", padding: "0px 0px" }}></img>
                <div className="releted"><p className="container obsolute"><FaCalendarAlt size={17}
                  color="#FA8D25" /> 5 Days | <FaUsers size={17} color="#FA8D25" /> 10</p></div>
                <div class="card-body">
                  <div className="container mt-3">
                    <h5 class="card-title"><b>NTT-Indonesia</b></h5>
                    <p class="card-text"><MdLocationOn size={17} color="#FA8D25" />Flores, Nusa Tenggara Timur</p><hr></hr>
                    <div className="row">
                      <div className="col">
                        <p>From<h5><b>$ 420</b></h5></p>

                      </div>
                      <div className="col cardre " >
                        <div className="cardrun">
                          <a href="" ><b>EXPLORE <BsArrowRightShort size={22} /></b></a></div>
                      </div>
                    </div>

                  </div></div>
              </div>
            </div> 
             
            <div className="col-4 carful" style={{paddingLeft:"0px",paddingRight:"10px"}}>
              <div class="card  carding " style={{ width: " 100%"}}>

                <img src={map} class="card-img-top" alt="..." style={{objectFit:"cover", padding: "0px 0px" }}></img>
                <div className="releted"><p className="container obsolute"><FaCalendarAlt size={17}
                  color="#FA8D25" /> 5 Days | <FaUsers size={17} color="#FA8D25" /> 10</p></div>
                <div class="card-body">
                  <div className="container mt-3">
                    <h5 class="card-title"><b>Bali-Indonesia</b></h5>

                    <p class="card-text"><MdLocationOn size={17} color="#FA8D25" /> Jl. Raya Singaraja-Denpasar</p><hr></hr>
                    <div className="row">
                      <div className="col">
                        <p>From<h5><b>$ 320</b></h5></p>

                      </div>
                      <div className="col cardre " >
                        <div className="cardrun">
                          <a href="" ><b>EXPLORE <BsArrowRightShort size={22} /></b></a></div>
                      </div>
                    </div>
                  </div></div>
              </div></div>
          </div>
        </div>
      </div>
    </div>
  )
}