import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Comp/Header";

import Home from "../Home/Home";
import Footers from "../Comp/Footers";
import Aboutus from "../Aboutus/Aboutus";
import Primaryscool from "../Pcrcl/Primaryscool";
import Collectibles from "../Pcrcl/Collectibles";
import RCToys from "../Pcrcl/RCToys";
import Cosmetics from "../Pcrcl/Cosmetics";
import Learning from "../Pcrcl/Learning";
import Other from "../Pcrcl/Other";





const Navigate = () => {
  return (
    <Router>
      <div>
        <Header />
      </div>

      <Routes>
      <Route path="/" element={<Home/>}></Route> 
      <Route path="/aboutus" element={<Aboutus/>}></Route> 
        <Route path="/Pre-School" element={<Primaryscool />}></Route>  
        <Route path="/Collectibles" element={<Collectibles/>}></Route>  
        <Route path="/RCToys" element={<RCToys />}></Route> 
        <Route path="/Cosmetics" element={<Cosmetics />}></Route> 
        <Route path="/LearningArtandCrafts" element={<Learning />}></Route> 
        <Route path="/Other" element={<Other/>}></Route> 
      </Routes>

      <div>
        {/* <Footer/> */}
        <Footers />
      </div>

    </Router>
  );
};

export default Navigate;