import { Box, Grid, Typography, Fab } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import { TypographyText } from "../Reusable/Reusable";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import "aos/dist/aos.css";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Background, Parallax } from "react-parallax";
import Homesection1 from "./Homesection1";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";

const Try = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(1);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const scrollToSection = (indexs) => {
    console.log(activeSection)
    setActiveSection(indexs);

    const scrollDistance = indexs * window.innerHeight;
    scroll.scrollTo(scrollDistance);
  };



  return (
    <>
      <Homesection1 />
      {Data.map((data, indexs) => {

        return (
          <div key={indexs}>
            <Parallax
              bgImage={data.imges}
              strength={300}
              style={{
                backgroundSize: "cover",
                objectFit: "cover",
                height: "100%",
                display: "flex",
                alignItems: "center",

                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom",
              }}
            >
              <Grid
                container
                spacing={2}
                className="large-header"
                sx={{
                  height: !isSmallScreen ? "100vh" : "auto",
                  minHeight: !isSmallScreen ? "100vh" : "auto",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    backgroundColor: "rgba(0,0,0,.5)", // Adjust color and opacity as needed
                  }}
                ></Box>

                <Grid
                  container
                  Spacing={3}
                  sx={{
                    zIndex: 1,
                    pl: "12%",
                    pr: "12%",
                    pt: !isSmallScreen ? "15%" : "10%",
                    pb: !isSmallScreen ? "15%" : "10%",
                    textAlign: "justify",
                  }}
                >
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <div data-aos="fade-right">
                      <TypographyText
                        Typography={data.Typography}
                        color="#fff"
                        fontWeight="400"
                        textAlign={!isSmallScreen ? "left" : "centre"}
                        variant={!isSmallScreen ? "h2" : "h4"}
                      />
                      <br />
                      <TypographyText
                        Typography={data.Typography1}
                        color="#fff"
                        textAlign="left"
                      />
                      <br />
                      <Link to="/ourcompany">
                        {" "}
                        <ArrowCircleRightIcon
                          sx={{ color: "white", fontSize: "3rem" }}
                        />
                      </Link>
                    </div>
                  </Grid>
                  <Grid
                    item
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}
                    sx={{ margin: "auto" }}
                  >
                    <Grid container Spacing={2}>
                      {data.imagelogo &&
                        data.imagelogo.map((logo, ) => (
                          <Grid item xs={3} >
                            <img src={logo.img} alt="" width={"100%"} />
                          </Grid>
                        ))}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Parallax>

            <Box
              sx={{
                position: "fixed",
                bottom: 200,
                left: 50,
                zIndex: 1000,
                boxShadow: "none",
              }}
            >
              <Fab
                  
                  color={activeSection === 0 ? "primary" : "default"}
                  size="small"
                  onClick={() => scrollToSection(0)}
                  sx={{
                    margin: "10px",
                    cursor: "pointer",
                    display: "flex",
                    width: "15px",
                    height: "15px",
                    minHeight: "15px",
                    border: "solid white .5px",
                    backgroundColor:
                      activeSection === 0 ? "white" : "transparent",
                    boxShadow: "none",
                  }}
                />
              {Data.map((_, indexs) => (
                <Fab
                  key={indexs}
                  color={activeSection === indexs + 1  ? "primary" : "default"}
                  size="small"
                  onClick={() => scrollToSection( indexs + 1)}
                  sx={{
                    margin: "10px",
                    cursor: "pointer",
                    display: "flex",
                    width: "15px",
                    height: "15px",
                    minHeight: "15px",
                    border: "solid white .5px",
                    backgroundColor:
                      activeSection === indexs + 1 ? "white" : "transparent",
                    boxShadow: "none",
                  }}
                />
              ))}
            </Box>
          </div>
        );
      })}
    </>
  );
};

export default Try;

const Data = [
  {
    imges:
      "https://static.wixstatic.com/media/3fff3e_5cd79328eb33416983df16896216d1fb~mv2.jpg/v1/fill/w_768,h_1048,fp_0.62_0.97,q_85,usm_0.66_1.00_0.01,enc_auto/3fff3e_5cd79328eb33416983df16896216d1fb~mv2.jpg",
    Typography: "pre-school",
    Typography1:
      "Ignite young minds with our captivating preschool toys collection! Specially designed for early learners, these toys blend fun and education seamlessly. Explore the joy of learning with our thoughtfully curated selection for the littlest adventurers.",

    imagelogo: [
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
    ],
  },
  {
    imges:
      "https://static.wixstatic.com/media/3fff3e_357ae3cd4b14456f9b5368198c090440~mv2.jpg/v1/fill/w_768,h_1048,fp_0.61_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/3fff3e_357ae3cd4b14456f9b5368198c090440~mv2.jpg",
    Typography: "Collectibles",
    Typography1:
      "Dive into a world of enchantment with our exclusive Collectible Toys. Unearth rare gems and cherished editions that elevate your collection to new heights. From iconic franchises to limited releases, our carefully curated selection promises to delight enthusiasts and collectors alike.",

    imagelogo: [
      {
        img: "https://static.wixstatic.com/media/3fff3e_8fcd4fc737ec45b8a966ec0cbdc0543d~mv2.png/v1/fill/w_130,h_72,q_90/3fff3e_8fcd4fc737ec45b8a966ec0cbdc0543d~mv2.webp",
      },
      {
        img: "https://static.wixstatic.com/media/3fff3e_d01cfebab7f14ae78041a12fcc9efae3~mv2.png/v1/fill/w_130,h_72,q_90/3fff3e_d01cfebab7f14ae78041a12fcc9efae3~mv2.webp",
      },
      {
        img: "https://static.wixstatic.com/media/3fff3e_ba73e416f5cd40a8a8f49f6e703a0089~mv2.png/v1/fill/w_130,h_72,q_90/3fff3e_ba73e416f5cd40a8a8f49f6e703a0089~mv2.webp",
      },
    ],
  },
  {
    imges:
      "https://static.wixstatic.com/media/3fff3e_b9af84a0008d49ea8e8e85bd9f330ab7~mv2.png/v1/fill/w_768,h_699,fp_0.61_0.33,q_90,usm_0.66_1.00_0.01,enc_auto/3fff3e_b9af84a0008d49ea8e8e85bd9f330ab7~mv2.png",
    Typography: "RC Toys",
    Typography1:
      "Explore the thrill of remote-controlled excitement with our RC (Remote Control) section at Toycity. Unleash the power of imaginative play as you navigate a world of high-speed racing, precision maneuvers, and airborne adventures.",

    imagelogo: [
      {
        img: "https://static.wixstatic.com/media/3fff3e_8fcd4fc737ec45b8a966ec0cbdc0543d~mv2.png/v1/fill/w_130,h_72,q_90/3fff3e_8fcd4fc737ec45b8a966ec0cbdc0543d~mv2.webp",
      },
      {
        img: "https://static.wixstatic.com/media/3fff3e_5431260a0afe44619fc0a9c9e6dc8576~mv2.png/v1/fill/w_130,h_72,q_90/3fff3e_5431260a0afe44619fc0a9c9e6dc8576~mv2.webp",
      },
      {
        img: "https://static.wixstatic.com/media/3fff3e_88994de14b6447f1a9300ea4796393f1~mv2.png/v1/fill/w_130,h_72,q_90/3fff3e_88994de14b6447f1a9300ea4796393f1~mv2.webp",
      },
    ],
  },

  {
    imges:
      "https://static.wixstatic.com/media/3fff3e_f98ece67763c4fd3b3faa9caeb6970d8~mv2.jpg/v1/fill/w_751,h_524,fp_0.35_0.45,q_85,usm_0.66_1.00_0.01,enc_auto/3fff3e_f98ece67763c4fd3b3faa9caeb6970d8~mv2.jpg",
    Typography: "Cosmetics",
    Typography1:
      "Transform playtime into a magical makeover with our Kids Cosmetics collection. Specially crafted for little ones, our vibrant and safe products let imaginations soar. From glittery lip gloss to washable nail polish, we offer a delightful range of kid-friendly cosmetics that add a touch of sparkle to their world. Explore the joy of creative expression with our quality and non-toxic formulations, making beauty play both enchanting and worry-free.",

    imagelogo: [
      {
        img: "https://static.wixstatic.com/media/3fff3e_8fcd4fc737ec45b8a966ec0cbdc0543d~mv2.png/v1/fill/w_130,h_72,q_90/3fff3e_8fcd4fc737ec45b8a966ec0cbdc0543d~mv2.webp",
      },
      {
        img: "https://static.wixstatic.com/media/3fff3e_5431260a0afe44619fc0a9c9e6dc8576~mv2.png/v1/fill/w_130,h_72,q_90/3fff3e_5431260a0afe44619fc0a9c9e6dc8576~mv2.webp",
      },
      {
        img: "https://static.wixstatic.com/media/3fff3e_88994de14b6447f1a9300ea4796393f1~mv2.png/v1/fill/w_130,h_72,q_90/3fff3e_88994de14b6447f1a9300ea4796393f1~mv2.webp",
      },
    ],
  },

  {
    imges:
      "https://static.wixstatic.com/media/3fff3e_427843dfb30c43c29a1dbddc3625e639~mv2.jpg/v1/fill/w_751,h_528,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3fff3e_427843dfb30c43c29a1dbddc3625e639~mv2.jpg",
    Typography: "Learning, Art and Crafts",
    Typography1:
      "Discover a wide array of learning toys designed to make education enjoyable. At our toy distribution company, we believe that play is a powerful teacher, and our learning, art, and crafts toys are carefully chosen to inspire creativity and curiosity. Explore our collection today and witness the joy of learning and self-expression through the magic of play.",

    imagelogo: [
      {
        img: "https://static.wixstatic.com/media/3fff3e_8fcd4fc737ec45b8a966ec0cbdc0543d~mv2.png/v1/fill/w_130,h_72,q_90/3fff3e_8fcd4fc737ec45b8a966ec0cbdc0543d~mv2.webp",
      },
      {
        img: "https://static.wixstatic.com/media/3fff3e_5431260a0afe44619fc0a9c9e6dc8576~mv2.png/v1/fill/w_130,h_72,q_90/3fff3e_5431260a0afe44619fc0a9c9e6dc8576~mv2.webp",
      },
      {
        img: "https://static.wixstatic.com/media/3fff3e_88994de14b6447f1a9300ea4796393f1~mv2.png/v1/fill/w_130,h_72,q_90/3fff3e_88994de14b6447f1a9300ea4796393f1~mv2.webp",
      },
    ],
  },

  {
    imges:
      "https://static.wixstatic.com/media/9aa0592cbdc1457089abf42b4929e03a.jpg/v1/fill/w_751,h_524,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9aa0592cbdc1457089abf42b4929e03a.jpg",
    Typography: "Other",
    Typography1:
      "Discover a world of play in our Toy Kingdom! From timeless classics to cutting-edge wonders, our toy category is a gateway to endless joy. Elevate playtime with the best in fun and excitement.",

    imagelogo: [
      {
        img: "https://static.wixstatic.com/media/3fff3e_8fcd4fc737ec45b8a966ec0cbdc0543d~mv2.png/v1/fill/w_130,h_72,q_90/3fff3e_8fcd4fc737ec45b8a966ec0cbdc0543d~mv2.webp",
      },
      {
        img: "https://static.wixstatic.com/media/3fff3e_5431260a0afe44619fc0a9c9e6dc8576~mv2.png/v1/fill/w_130,h_72,q_90/3fff3e_5431260a0afe44619fc0a9c9e6dc8576~mv2.webp",
      },
      {
        img: "https://static.wixstatic.com/media/3fff3e_88994de14b6447f1a9300ea4796393f1~mv2.png/v1/fill/w_130,h_72,q_90/3fff3e_88994de14b6447f1a9300ea4796393f1~mv2.webp",
      },
    ],
  },
];
