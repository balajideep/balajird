import read1 from "./image/read1.jpg"
import read2 from "./image/read2.jpg"
import read3 from "./image/read3.jpg"
import read4 from "./image/read4.jpg"
import women from "./image/women.webp"
import men from "./image/men.jpg"
import sri from "./image/sri.jpg"
import women1 from "./image/women1.jpg"
import women2 from "./image/women2.jpg"
import care1 from "./image/care5.jpg"
import care2 from "./image/care4.jpg"
import care3 from "./image/care3.jpg"
import Carousel from 'react-bootstrap/Carousel';
import "./Home5.css"
export default function Hover(){
    return(
        <div>
        <div className="container-fluid" style={{border:"none" }} >
            <div className="row">
                 <div className="col-md-3 col-sm-12 " style={{padding:"0px"}}>
                    <div className=" repeat"> <img src={read1} style={{objectFit:"cover",paddingLeft:"0px"}}></img></div>
                 </div>
                 <div className="col-md-3 col-sm-12" style={{padding:"0px"}}>
                    <div className="repeat"><img src={read2} style={{objectFit:"cover",paddingLeft:"0px"}}></img></div>
                 </div>
                 <div className="col-md-3 col-sm-12" style={{padding:"0px"}}>
                    <div className="repeat"> <img src={read3} style={{objectFit:"cover",paddingLeft:"0px"}}></img></div>  
                 </div>
                 <div className="col-md-3 col-sm-12" style={{padding:"0px"}}>
                    <div className="repeat"><img src={read4} style={{objectFit:"cover",paddingLeft:"0px"}}></img></div>
                 </div>
            </div>
        </div>
                
                
                
                
  <div className="container-fluid war kane" style={{padding:"0px"}}>
  
<div><h3 className="text-center rock">Testimonials</h3>
 <h1 className="text-center"> <b>What Our Traveller Says</b></h1>
 <div className="jim">
     <img src={women1} className="care1" style={{ objectFit:"cover",paddingLeft:"0px"}}/>
 </div>
 <div className="jim">
    <img src={women2} className="care2"  style={{objectFit:"cover",paddingLeft:"0px"}}/>
 </div>
 <div className="jim">
      <img src={care1} className="care3"  style={{objectFit:"cover",paddingLeft:"0px"}}/>
 </div>
 <div className="jim">
       <img src={care2}  className="care4"  style={{objectFit:"cover",paddingLeft:"0px"}}/>
 </div>
 <div className="jim">
       <img src={care3} className="care5"  style={{objectFit:"cover",paddingLeft:"0px"}}/>
 </div>
</div> 
<Carousel>
      <Carousel.Item>
             <div className=" text-center war" >
                  <div className="pink">
                  <img src={sri} className="cross mx-auto" style={{objectFit:"cover",paddingLeft:"0px",height:"100px",width:"100px",borderRadius:"100%"}}
                  alt="third slide"/>
               </div></div>

        <Carousel.Caption>
                <div  >
                  <p >
               <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
               ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo dolore magna aliqua lorem consecte
                </i></p>
                <h4>Sri Divya</h4>
                <h5>Traveller</h5></div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
             <div className=" text-center war" >
               <div className="pink">
                  <img src={women} className="cross mx-auto" style={{objectFit:"cover",paddingLeft:"0px",height:"100px",width:"100px",borderRadius:"100%"}}
                  alt="third slide"/>
               </div></div>


        <Carousel.Caption>
               <div >
                  <p >
               <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
               ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo dolore magna aliqua lorem consecte
                </i></p>
                <h4>Justin Atherton</h4>
                <h5>Traveller</h5></div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
               <div className=" text-center war" >
                   <div className="pink">
                  <img src={men} className="cross mx-auto" style={{objectFit:"cover",paddingLeft:"0px",height:"100px",width:"100px",borderRadius:"100%"}}
                  alt="third slide"/>
               </div></div>

        <Carousel.Caption>
          <div>
              <p >
          <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
           ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo dolore magna aliqua lorem consecte
          </i></p>
          <h4>Heman Paul</h4>
           <h5>Traveller</h5></div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
                 </div>
        </div>
    )
}