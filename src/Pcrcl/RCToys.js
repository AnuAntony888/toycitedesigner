
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";
import { MetaComponent, TypographyText } from "../Reusable/Reusable";
import { Link } from "react-router-dom";

import img1 from "../Assets/Pre School/Giggles-01-04.jpg";
import img2 from "../Assets/Pre School/Funnybox-01.jpg";

import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
const RCToys = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const Data = [
    {
      video: 'BK1Pg1auvDc',
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
        <Link to="/collectibles">
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
          to="/cosmetics"
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
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {Data.map((curelem, index) => (
          <>
            <Grid item xs={12} lg={12} md={12} sm={12} key={index}>
             
              <div class="responsive-container">
                <iframe
                  class="responsive-iframe"
                  src={`https://www.youtube.com/embed/${curelem.video}?autoplay=1&controls=0&mute=1&loop=1&playlist=${curelem.video}`}
                  frameborder="0"
                  style={{ pointerEvents: "none" }}
                ></iframe>
              </div>
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
          </>
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

