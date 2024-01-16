// import React from 'react'

// const Collectibles = () => {
//   return (
//     <div>
//       sssssss
//     </div>
//   )
// }

// export default Collectibles

import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";
import { TypographyText } from "../Reusable/Reusable";
import { Link } from "react-router-dom";
import pp1 from "../Assets/Pre School/pp1.mp4";
import pp2 from "../Assets/Pre School/GDP.mp4";
import pp3 from "../Assets/Pre School/Clubpetz.mp4";
import img1 from "../Assets/Pre School/PPMM.jpg";
import img2 from "../Assets/Pre School/Giggles.jpg";
import img3 from "../Assets/Pre School/PLAYGO pOSTER-01.jpg";
import img4 from "../Assets/Pre School/PLAYGO pOSTER-01.jpg";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
const Collectibles = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const Data = [
    {
      video: '',
      text1: "Monster JAM",
      text2:
        "Monster Jam lets you create your own epic stunts, just like the live show! Take control with our RC vehicles, go all out with our playsets, and collect all of our authentic trucks. Real toys, real action, Monster Jam!",
    },
    {
      video: '',
      text1: "Bakugan",
      text2:
        "Inspired by the hit animated series, Bakugan toys offer thrilling strategic gameplay and fierce competition. Collect, roll, and transform these magnetic creatures to conquer the Bakugan battlefield. Dive into the action-packed world of Bakugan with our extensive collection of Bakugan toys.",
    },

  ];

  const Data1 = [
    {
      img: '',
      text1: "Hatchimals Alive",
      text2:
        "Unwrap the excitement as these adorable Hatchimals reveal their unique personalities and interactive features. Stay tuned for the latest additions to the Hatchimals family!",
    },


  ];
  return (
    <>
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
        <Link to="/Pre-School">
          <WestIcon
            sx={{
              width: isSmallScreen ? "1em" : "2em",
              height: isSmallScreen ? "1em" : "2em",
            }}
          />
        </Link>{" "}
        <TypographyText
          Typography={<>Collectibles</>}
          textAlign="centre"
          color="black"
          fontWeight="400"
          variant={!isSmallScreen ? "h2" : "h5"}
        />
        <Link
          to="/RCToys"
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
            justifyContent:"center", alignItems:"center"
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
            <Grid item xs={12} lg={6} md={6} sm={12} key={index} >
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

export default Collectibles;

