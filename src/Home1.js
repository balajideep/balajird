import React from "react";
import { Button } from "react-bootstrap";
import { IconContext } from "react-icons";

import { BsFillPlayCircleFill } from "react-icons/bs";
import { MdOutlineSendToMobile } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import travel from "./image/travel.png";
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home1.css";

import Home2 from "./Home2";
import Home3 from './Home3';
import Home4 from './Home4';
import Home5 from "./Home5";
import Home6 from './Home6';
import Home7 from './Home7';
import Home8 from './Home8';
import Home9 from './Home9';


<script src="https://unpkg.com/scrollreveal"></script>


export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (

<div>
    <div className="ran">

      <div className="container-fluid ">

        <div className="row ram">
          <div className="col-lg-6   tom1">
            <div className="read">
              <h1> Discover A  Beautiful Place  With Travella</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod
                tempor incididunt ut labore et dolore magna aliqua. <br></br><br></br><br></br>

                <div className="but">
                  <Button variant="warning" className='Button2'>EXPLORE TOURS</Button>

                  <span className="icon"> <BsFillPlayCircleFill size="3.2em" className="Bs-PlayCircle" />   <a href=""> WATCH TOUR</a></span>
                </div>
              </p>
            </div>


            <div className=" container goform1">
              <form onSubmit={handleSubmit(onSubmit)} className="nextform">
                <input type="text" placeholder="First name" {...register("Firstname", { required: true, maxLength: 80 })} />
                {errors.Firstname && errors.Firstname.type === "required" && (
                  <p className='mi'>enter firstname</p>
                )}
                {errors.Lastname && errors.Lastname.type === "maxLength" && (
                  <p className='mi'>to over maxlength</p>
                )}
                <br></br><br></br>
                <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                {errors.Email && errors.Email.type === "required" && (
                  <p className='mi'>Email is required</p>
                )}
                {errors.Email && errors.Email.type === "pattern" && (
                  <p className='mi'>not mail pattern</p>
                )}
                <br></br><br></br>

                <input type="number" placeholder="Mobile number" {...register("Mobilenumber", { required: true, minLength: 10, maxLength: 12 })} />

                {errors.Mobilenumber && errors.Mobilenumber.type === "required" && (
                  <p className='mi'>mobile number is required</p>
                )}
                {errors.Mobilenumber && errors.Mobilenumber.type === "minLength" && (
                  <p className='mi'>min length is required</p>
                )}
                {errors.Mobilenumber && errors.Mobilenumber.type === "maxLength" && (
                  <p className='mi'>max length is required</p>
                )}
                <br></br><br></br>

                <input type="date" placeholder="enter date" {...register("date", { required: true })} />
                {errors.date && errors.date.type === "required" && (
                  <p className="mi">date is required</p>
                )}

                <br></br>   <br></br>

                {/* <div className="sell"> */}
                < select placeholder=" " {...register("Title", { required: true })}>
                  <option value="Mr"> select tours</option>
                  <option value="Mr"> Parris-france</option>
                  <option value="Mr">Bali-indonesia</option>
                  <option value="Mrs">NTT- indonesia</option>
                  <option value="Miss">Maldiva-maldewa</option>
                  <option value="Dr">Merlin-Singapore</option>
                </select>

                {errors.Title && errors.Title.type === "required" && (
                  <p className='mi'>please select any one</p>
                )}
                <br></br><br></br>

                <input type="number" placeholder="Guest" {...register("Mobilenumber", { required: true, minLength: 1, maxLength: 10 })} />
                {errors.Mobilenumber && errors.Mobilenumber.type === "required" && (
                  <p className='mi'>mobile number is required</p>
                )}
                {errors.Mobilenumber && errors.Mobilenumber.type === "minLength" && (
                  <p className='mi'>min length is required</p>
                )}
                {errors.Mobilenumber && errors.Mobilenumber.type === "maxLength" && (
                  <p className='mi'>max length is required</p>
                )}

                <br></br><br></br>

                {/* <div className='submit'> */}<div className="submit-book">
                  <button onClick={onSubmit} className="submit text-left"> BOOK NOW</button></div>
              </form>
            </div>
          </div>



          <div className="col-lg-6  tom2">
            <div className="tom22" >
              <div className="humm">
                <div className="img1">
                  <img src={travel} className="travel" /></div></div>
              <div className="round "> </div></div>


          </div>


          {/* <div className="ran">  */}
          <div className="container-fluid ">
            <div className="row ">
              <div className="gogo col">

                <div className="go">

                  <h3>About Us</h3>
                  <h2><b>We Will Helping You Find Your Dream Vacation</b></h2>
                  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmo tempor incididunt ut labore et dolore magna aliqua.</p>

                  <div className="go2">
                    <FaHandshake size="2.3em" alt="fa" className="ippp" />
                    <div className="bt">
                      <h4><b>Get Best Deals</b></h4>
                      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    </div></div>

                  <div className="gone">
                    <div className="go3">

                      <MdOutlineSendToMobile size="2.3em" alt="tb" className="iccc" />
                      <div className="tb">
                        <h4> <b>Instant Confirmation</b></h4>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna</p> </div></div>
                  </div>
                </div></div>
              <div className="gogo1 col"></div>
            </div></div>
        </div></div>
<div>
      
</div>



    </div>
    <Home2 />
    <Home3 />
    <Home4 />
    <Home5/>
    <Home6/>
    <Home7/>
    <Home8/>
    <Home9/>
</div>


  )
}