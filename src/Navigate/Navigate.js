import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Comp/Header";
import Homecontent from "../Home/Homecontent";
import Ourcompany from "../Ourcompany/Ourcompany";
import Contact from "../Contact/Contact";
import Blog from "../Blogs/Blog";
import Privatelabelling from "../Privatelabelling/Privatelabelling";
import Footer from "../Comp/Footer";
import Home from "../Home/Home";





const Navigate = () => {
  return (
    <Router>
      <div>
        <Header />
      </div>

      <Routes>
      <Route path="/" element={<Home/>}></Route> 
      <Route path="/ourcompany" element={<Ourcompany/>}></Route> 
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/privatelabelling" element={<Privatelabelling/>}></Route>
        <Route path="/Blogs" element={<Blog/>}></Route>
      </Routes>
{/* 
      <div>
        <Footer/>
      </div> */}

    </Router>
  );
};

export default Navigate;