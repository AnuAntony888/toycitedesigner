import React, { useRef, useState, useEffect } from "react";
import Homesection1 from "./Homesection1";
import Section2 from "./Section2";

import Try from "./Try";



const Homecontent = () => {
  return (
    <>
      {/* <main>
        <section>
          {" "}
          <Homesection1 />
        </section>
        <section>
          {" "}
          <Section2 />
        </section>
        <section>
          {" "}
      <Keybrand/>
        </section>
        <section>
          {" "}
<MajorCategory/>
        </section>
        <section>
          {" "}
<Homeprivatelabelling/>
        </section>
        <section>      <NewLaunchBanners/></section>
        <section>
          {" "}
          <Sectioncontact />{" "}
          
        </section>

  
      </main> */}
  

      <Homesection1 />
      <Try />



 
    </>
  );
};

export default Homecontent;
