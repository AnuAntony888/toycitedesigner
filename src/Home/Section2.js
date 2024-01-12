import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { TypographyText } from "../Reusable/Reusable";
import img1 from "../Assets/second.jpg";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import "aos/dist/aos.css";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

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
      <Grid
        container
        spacing={2}
        className="large-header"
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

          <Grid container Spacing={3} sx={{ zIndex: 1, p: "12%" ,textAlign:'justify'}}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TypographyText
                Typography={<>Pre-School</>}
                color="#fff"
                 fontWeight="400"
                textAlign={!isSmallScreen ? "left" :"centre"}
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
              <ArrowCircleRightIcon sx={{color:'white',  
              fontSize:'3rem',
            }}/>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12} sx={{ margin: "auto" }}>
              <Grid container Spacing={2}>
                {imagelogo.map((data, index) => (
                  <Grid item xs={3}  key={index}>
                    <img src={data.img} alt="" width={'100%'}/>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/************************************************* */}

      <Grid
        container
        spacing={2}
        className="large-header"
        sx={{ height: !isSmallScreen ? "110vh" : "auto" }}
      >
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          sx={{
            backgroundImage: `url(
              https://static.wixstatic.com/media/3fff3e_357ae3cd4b14456f9b5368198c090440~mv2.jpg/v1/fill/w_2560,h_1440,fp_0.61_0.50,q_90,usm_0.66_1.00_0.01,enc_auto/3fff3e_357ae3cd4b14456f9b5368198c090440~mv2.jpg)`,
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

          <Grid container Spacing={3} sx={{ zIndex: 1, p: "12%" ,textAlign:'justify'}}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TypographyText
                Typography={<>Collectibles</>}
                color="#fff"
                fontWeight="400"
                textAlign={!isSmallScreen ? "left" :"centre"}
                variant={!isSmallScreen ? "h2" : "h4"}
              />
              <br />
              <TypographyText
                Typography={
                  <>
                    Dive into a world of enchantment with our exclusive Collectible Toys. Unearth rare gems and cherished editions that elevate your collection to new heights. From iconic franchises to limited releases, our carefully curated selection promises to delight enthusiasts and collectors alike.
                  </>
                }
                color="#fff"
                textAlign="left"
              />
                <br />
              <ArrowCircleRightIcon sx={{color:'white',  
              fontSize:'3rem',
            }}/>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12} sx={{ margin: "auto" }}>
              <Grid container Spacing={2}>
                {imagelogo1.map((data, index) => (
                  <Grid item xs={3}  key={index}>
                    <img src={data.img} alt="" width={'100%'}/>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
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
  {img:'https://static.wixstatic.com/media/3fff3e_630517c506824605a7f1c658f0f5d39f~mv2.png/v1/fill/w_296,h_168,q_90/3fff3e_630517c506824605a7f1c658f0f5d39f~mv2.webp'}

,{img:'https://static.wixstatic.com/media/3fff3e_96c8224664824e45a2dbf643180a7c1d~mv2.png/v1/fill/w_296,h_168,q_90/3fff3e_96c8224664824e45a2dbf643180a7c1d~mv2.webp'}];


const imagelogo1 = [
  {
    img:'https://static.wixstatic.com/media/3fff3e_8fcd4fc737ec45b8a966ec0cbdc0543d~mv2.png/v1/fill/w_372,h_210,q_90/3fff3e_8fcd4fc737ec45b8a966ec0cbdc0543d~mv2.webp'
  },
  {
    img:'https://static.wixstatic.com/media/3fff3e_d01cfebab7f14ae78041a12fcc9efae3~mv2.png/v1/fill/w_370,h_210,q_90/3fff3e_d01cfebab7f14ae78041a12fcc9efae3~mv2.webp'
  },
  {
    img:'https://static.wixstatic.com/media/3fff3e_ba73e416f5cd40a8a8f49f6e703a0089~mv2.png/v1/fill/w_372,h_210,q_90/3fff3e_ba73e416f5cd40a8a8f49f6e703a0089~mv2.webp'
  }

  ]