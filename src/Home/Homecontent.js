import React, { useRef, useState, useEffect } from "react";
import Homesection1 from "./Homesection1";
import Section2 from "./Section2";

import Try from "./Try";
import Floatingactions from "./Floatingactions";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Partnerreview from "./Partnerreview";


const Homecontent = () => {
  return (
    <>

      <Try />

      <Partnerreview />
      {/* <Floatingactions></Floatingactions> */}
    </>
  );
};

export default Homecontent;
const Social = [
  {
    icon: (
      <Link to={"https://www.facebook.com/toycityme/"}>
        <FacebookIcon className="fixediconsize" />
      </Link>
    ),
  },
  {
    icon: <InstagramIcon className="fixediconsize" />,
  },
];
