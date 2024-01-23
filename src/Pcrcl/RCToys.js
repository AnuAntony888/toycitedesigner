// import React from 'react'

// const RCToys = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default 
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";
import { MetaComponent, TypographyText } from "../Reusable/Reusable";
import { Link } from "react-router-dom";

import img1 from "../Assets/Pre School/Giggles-01-04.jpg";
import img2 from "../Assets/Pre School/Funnybox-01.jpg";
import airgo from '../Assets/Pre School/airog.mp4'
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
const RCToys = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const Data = [
    {
      video: airgo,
      text1: "Airhog",
      text2:
        "Experience the thrill of high-speed racing and precision control with these innovative remote-controlled vehicles. From sleek designs to powerful performance, Airhogs RC toy cars bring excitement to every twist and turn.",
    },
  
  ];

  const Data1 = [
    {
      img: img1,
      text1: "Monster Jam RC",
      text2:
        "Experience the pulse-pounding excitement of Monster Jam in the palm of your hands. These remote-controlled beasts bring iconic monster trucks to life, conquering obstacles with power and precision.",
    },
    {
      img: img2,
      text1: "Funny Box RC",
      text2:
        "Unleash laughter and excitement with Funny Box RC toys. Discover a world of whimsical remote-controlled wonders that bring joy to every playtime. From quirky characters to hilarious movements, Funny Box RC toys add a dose of fun to your adventures.",
    },
    
  ];
  return (
    <>
        < MetaComponent dynamicTitle="Toycity - RC Toys "  />
      <Box
        sx={{
          display: "flex",
          alignItems: "center", // Center vertically
          justifyContent: "center", // Center horizontally
          margin: "auto",
          pt: !isSmallScreen ? "120px" : "80px",
          backgroundColor: "#EEEEEE",
        }}
      >
           <br/>     <br/>
         <br/>     <br/>
        <Link to="/Collectibles">
          <WestIcon
            sx={{
              width: isSmallScreen ? "1em" : "2em",
              height: isSmallScreen ? "1em" : "2em",
            }}
          />
        </Link>{" "}
        <TypographyText
          Typography={<>RC Toys</>}
          textAlign="center"
          color="black"
          fontWeight="400"
          variant={!isSmallScreen ? "h2" : "h5"}
        />
        <Link
          to="/Cosmetics"
        >
          <EastIcon
            sx={{
              width: isSmallScreen ? "1em" : "2em",
              height: isSmallScreen ? "1em" : "2em",
            }}
          />
        </Link>
      </Box>
      <Grid
        container
        spacing={5}
        sx={{
          pl: !isSmallScreen ? "20%" : "14%",
          pr: !isSmallScreen ? "20%" : "14%",
          pt: "6%",
          pb: "5%",
        }}
      >
        {Data.map((curelem, index) => (
          <div style={{ padding: "5%" }}>
            <Grid item xs={12} lg={12} md={12} sm={12} key={index}>
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{ width: "100%", height: "100%" }}
              >
                <source src={curelem.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <br />
              <br />
            </Grid>

            <Grid item xs={12} lg={12} md={12} sm={12}>
              <TypographyText
                Typography={curelem.text1}
                fontWeight="400"
                variant={!isSmallScreen ? "h5" : "h5"}
              />
              <br />
              <TypographyText
                Typography={curelem.text2}
                textAlign="center"
                fontWeight="400"
              />
              <br /> <br />
            </Grid>
          </div>
        ))}

        {Data1.map((curelem, index) => (
          <>
            <Grid item xs={12} lg={6} md={6} sm={12} key={index}>
              <img src={curelem.img} alt="" width={"100%"} height={"auto"} />
              <br />
              <br />
              <TypographyText
                Typography={curelem.text1}
                fontWeight="400"
                variant={!isSmallScreen ? "h5" : "h5"}
              />
              <br />

              <TypographyText
                Typography={curelem.text2}
                textAlign="center"
                fontWeight="400"
              />
            </Grid>
          </>
        ))}
      </Grid>
    </>
  );
};

export default RCToys;

