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
import NewsandEvents from "../NewsandEvents/NewsandEvents";
import Contactus from "../Contact/Contactus";
import Ourretail from "../Ourretail/Ourretail";
import Contact from "../Contact/Contact";
import Pent from "../Brandingpages/Pent";

const Navigate = () => {
  return (
    <Router>
      <div>
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aboutus" element={<Aboutus />}></Route>
        <Route path="/pre-school" element={<Primaryscool />}></Route>
        <Route path="/collectibles" element={<Collectibles />}></Route>
        <Route path="/rctoys" element={<RCToys />}></Route>
        <Route path="/cosmetics" element={<Cosmetics />}></Route>
        <Route path="/learningartandcrafts" element={<Learning />}></Route>
        <Route path="/other" element={<Other />}></Route>
        <Route path="/newsandevents" element={<NewsandEvents />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/retailpartners" element={<Ourretail />}></Route>

        <Route  path="/pent" element={<Pent  type="pent" />}></Route>
        {/* <Route path="/Contactus" element={<Contactus />}></Route> */}
      </Routes>

      <div>
        {/* <Footer/> */}
        <Footers />
      </div>
    </Router>
  );
};

export default Navigate;
