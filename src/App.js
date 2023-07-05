import React from "react";
import Home from "./Home";
import Home1 from "./Home1"
 import Home2 from "./Home2";
import Home3 from './Home3';
import Home4 from './Home4';
import Home5 from "./Home5";
import Home6 from './Home6';
import Home7 from './Home7';
import Home8 from './Home8';
import Home9 from './Home9';

import Routing from "./Routing"

import { Routes, Route, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
 
<BrowserRouter>
  
     <Home />
    {/* <Home1/>
    <Home2 />
    <Home3 />
    <Home4 />
    <Home5/>
    <Home6/>
    <Home7/>
    <Home8/>
    <Home9/> */}
     
 
  
 
<Routes>
     
     <Route path='/' element= {<Home1/>}/>
     <Route path='/Home2' element= {<Home2/>}/>
     <Route path='/Home3'element={<Home3/>}/>
     <Route path='/Home4'element={<Home4/>}/>
     <Route path='/Home5'element={<Home5/>}/>
     <Route path='/Home6' element= {<Home6/>}/>
     <Route path='/Home7'element={<Home7/>}/>
     <Route path='/Home8'element={<Home8/>}/>
     <Route path='/Home9'element={<Home9/>}/>
  </Routes> 
   
  </BrowserRouter>  
    {/* <Home />
    <Home1/>
    <Home2 />
    <Home3 />
    <Home4 />
    <Home5/>
    <Home6/>
    <Home7/>
    <Home8/>
    <Home9/>
     */}

    </div>
  );
}

export default App;
