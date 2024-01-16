import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { TypographyText } from "../Reusable/Reusable";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import "aos/dist/aos.css";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Parallax } from "react-parallax";
const Section2 = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    // Simulate content loading delay (you can replace this with your actual data loading logic)
    const timer = setTimeout(() => {
      setIsContentVisible(true);
    }, 1);

    return () => clearTimeout(timer);
  }, []);
  console.log(isContentVisible, "aaa");
  return (
    <>
        <Parallax
        bgImage={
          "https://img.freepik.com/premium-photo/playroom-without-furniture-with-decoration-backgroun-wall_244125-316.jpg?w=1060"
        }
        strength={600}
        style={{
            height: !isSmallScreen ? "100vh" : "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
     position: "relative",
     display: "flex",
    justifyContent: "center",
          alignItems: "center",
    
        }}
      >
        
        <Grid
          container
          Spacing={3}
          sx={{
            zIndex: 1,    textAlign: "center",
            pl: "12%",
            pr: "12%",
            height: "100%", textAlign:'justify'
          }}
        >
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TypographyText
              Typography={<>Pre-School</>}
              color="#fff"
              fontWeight="400"
              textAlign={!isSmallScreen ? "left" : "centre"}
              variant={!isSmallScreen ? "h2" : "h4"}
            />
            <br />
            <TypographyText
              Typography={
                <>
                  Ignite young minds with our captivating preschool toys
                  collection! Specially designed for early learners, these toys
                  blend fun and education seamlessly. Explore the joy of
                  learning with our thoughtfully curated selection for the
                  littlest adventurers.
                </>
              }
              color="#fff"
              textAlign="left"
            />
            <br />
            <ArrowCircleRightIcon sx={{ color: "white", fontSize: "3rem" }} />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ margin: "auto" }}>
            <Grid container Spacing={2}>
              {imagelogo.map((data, index) => (
                <Grid item xs={3} key={index}>
                  <img src={data.img} alt="" width={"100%"} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Parallax>

      {/* <Grid
        container
        spacing={2}
        // className="large-header"
        sx={{ height: !isSmallScreen ? "105vh" : "auto" }}
      >
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          sx={{
            backgroundImage: `url(${img1})`,
            backgroundSize: "cover",
            objectFit: "cover",
            height: "100%",
            display: "flex",
            alignItems: "center",

            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              opacity: ".2",
              backgroundColor: "#000000", // Adjust color and opacity as needed
            }}
          ></Box>

          <Grid
            container
            Spacing={3}
            sx={{ zIndex: 1, p: "12%", textAlign: "justify" }}
          >
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TypographyText
                Typography={<>Pre-School</>}
                color="#fff"
                fontWeight="600"
                textAlign={!isSmallScreen ? "left" : "centre"}
                variant={!isSmallScreen ? "h2" : "h4"}
              />
              <br />
              <TypographyText
                Typography={
                  <>
                    Ignite young minds with our captivating preschool toys
                    collection! Specially designed for early learners, these
                    toys blend fun and education seamlessly. Explore the joy of
                    learning with our thoughtfully curated selection for the
                    littlest adventurers.
                  </>
                }
                color="#fff"
                textAlign="left"
              />
              <br />
              <ArrowCircleRightIcon sx={{ color: "white", fontSize: "3rem" }} />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12} sx={{ margin: "auto" }}>
              <Grid container Spacing={2}>
                {imagelogo.map((data, index) => (
                  <Grid item xs={3} key={index}>
                    <img src={data.img} alt="" width={"100%"} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid> */}

      {/************************************************* */}
    
    </>
  );
};

export default Section2;

const imagelogo = [
  {
    img: "https://static.wixstatic.com/media/3fff3e_73a5f56ac63343208cb8360f07740ace~mv2.png/v1/fill/w_296,h_168,q_90/3fff3e_73a5f56ac63343208cb8360f07740ace~mv2.webp",
  },
  {
    img: "https://static.wixstatic.com/media/3fff3e_f04bf754f4034c3985ab969cdaf21187~mv2.png/v1/fill/w_296,h_168,q_90/3fff3e_f04bf754f4034c3985ab969cdaf21187~mv2.webp",
  },
  {
    img: "https://static.wixstatic.com/media/3fff3e_8b7608bf17144110a0cd5453bafbdaa6~mv2.png/v1/fill/w_298,h_168,q_90/3fff3e_8b7608bf17144110a0cd5453bafbdaa6~mv2.webp",
  },
  {
    img: "https://static.wixstatic.com/media/3fff3e_0c4400a66a0942468a4065d983681535~mv2.png/v1/fill/w_296,h_168,q_90/3fff3e_0c4400a66a0942468a4065d983681535~mv2.webp",
  },
  {
    img: "https://static.wixstatic.com/media/3fff3e_630517c506824605a7f1c658f0f5d39f~mv2.png/v1/fill/w_296,h_168,q_90/3fff3e_630517c506824605a7f1c658f0f5d39f~mv2.webp",
  },

  {
    img: "https://static.wixstatic.com/media/3fff3e_96c8224664824e45a2dbf643180a7c1d~mv2.png/v1/fill/w_296,h_168,q_90/3fff3e_96c8224664824e45a2dbf643180a7c1d~mv2.webp",
  },
];
