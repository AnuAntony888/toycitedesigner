import { Box, Grid, Typography, Fab, Skeleton } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import { TypographyText } from "../Reusable/Reusable";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import "aos/dist/aos.css";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import {  Parallax } from "react-parallax";
import Homesection1 from "./Homesection1";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";

import banner1 from "../Assets/homepage/banner1 .jpg";
import banner2 from "../Assets/homepage/banner2.jpg";
import banner3 from "../Assets/homepage/banner3.png";
import banner31 from "../Assets/homepage/banner31.webp";
import banner4 from "../Assets/homepage/banner4.jpg";
import banner41 from "../Assets/homepage/banner41.webp";
import banner5 from "../Assets/homepage/banner5.webp";
import banner51 from "../Assets/homepage/banner51.webp";
import banner61 from "../Assets/homepage/banner61.jpg";
import banner6 from "../Assets/homepage/banner6.jpg";

import pp1 from '../Assets/homelogo/14.png'
import pp2 from '../Assets/homelogo/26.png'
import pp3 from '../Assets/homelogo/23.png'
import pp4 from '../Assets/homelogo/22.png'
import pp5 from '../Assets/homelogo/25.png'
import pp6 from '../Assets/homelogo/17.png'

import cc1 from '../Assets/homelogo/4.png'
import cc2 from '../Assets/homelogo/2.png'
import cc3 from '../Assets/homelogo/3.png'

import rc1 from '../Assets/homelogo/29.png'
import rc2 from '../Assets/homelogo/28.png'
import rc3 from '../Assets/homelogo/30.png'

import cs1 from '../Assets/homelogo/9.png'
import cs2 from '../Assets/homelogo/8.png'
import cs3 from '../Assets/homelogo/10.png'
import cs4 from '../Assets/homelogo/7.png'

import la1 from '../Assets/homelogo/5.png'
import la2 from '../Assets/homelogo/18.png'
import la3 from '../Assets/homelogo/15.png'
import la4 from '../Assets/homelogo/Etch a sketch.png'
import la5 from '../Assets/homelogo/Coolmaker.png'

import o1 from '../Assets/homelogo/o1.webp'
import o2 from '../Assets/homelogo/o2.webp'
import o3 from '../Assets/homelogo/o3.webp'

const Try = () => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const scrollToSection = (indexs) => {
    console.log(activeSection);
    setActiveSection(indexs);

    const scrollDistance = indexs * window.innerHeight;
    scroll.scrollTo(scrollDistance);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionIndex = Math.floor(
        (scrollPosition / window.innerHeight) * 1.1
      );
      setActiveSection(sectionIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToElement = () => {
    const element = document.getElementById("scrollTarget");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Homesection1 />
      {Data.map((data, indexs) => {
        return (
          <div key={indexs}>
            <Parallax
              bgImage={!isSmallScreen ? data.imges : data.imge1}
              // bgImage={data.imges}
              strength={300}
              style={{
                backgroundSize: "cover",
                objectFit: "cover",
                height: "100vh", // Adjusted for full screen height
                display: "flex",
                alignItems: "center",

                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom",
              }}
            >
              <Grid
                container
                spacing={0}
                className="large-header"
                sx={{
                  height: !isSmallScreen ? "100vh" : "100vh",
                  minHeight: !isSmallScreen ? "100vh" : "100vh",
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

                    paddingLeft: !isSmallScreen ? "12%" : "10%",
                    paddingRight: !isSmallScreen ? "15%" : "10%",
                    paddingTop: !isSmallScreen ? "10%" : "20%",
                    paddingBottom: !isSmallScreen ? "15%" : "10%",
                    textAlign: "justify",
                  }}
                >
                  <Grid
                    item
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}
                    sx={{ margin: !isSmallScreen ? "auto" : "0" }}
                  >
                    <div data-aos="fade-right">
                      <TypographyText
                        Typography={data.Typography}
                        color="#fff"
                        fontWeight="400"
                        textAlign={!isSmallScreen ? "left" : "centre"}
                        // fontSize={fontSize}
                        variant={!isSmallScreen ? "h2" : "h5"}
                      />
                      <br />
                      <TypographyText
                        Typography={data.Typography1}
                        color="#fff"
                        textAlign="left"
                        fontSize={isSmallScreen ? ".8rem" : "1rem"}
                      />
                      <br />
                      <Link to={data.links}>
                        <ArrowCircleRightIcon
                          sx={{
                            color: "white",
                            fontSize: !isSmallScreen ? "3rem" : "2rem",
                          }}
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
                    sx={{ margin: !isSmallScreen ? "auto" : "0" }}
                  >
                    <Grid
                      container
                      Spacing={2}
                      sx={{ justifyContent: "center" }}
                    >
                      {/* {data.imagelogo &&
                        data.imagelogo.map((logo) => (
                          <Grid item lg={3} md={3} sm={3} xs={4}>
                            <img src={logo.img} alt="" width={"100%"} />
                          </Grid>
                        ))} */}
                      {data.imagelogo.map((logo) => (
                        <Grid key={logo.id} item lg={3} md={3} sm={3} xs={4}>
                          {loading && (
                            <Skeleton
                              variant="rectangular"
                              width={80}
                              height={80}
                            />
                          )}
                          <img
                            src={logo.img}
                            alt=""
                            width="100%"
                            onLoad={handleImageLoad}
                            style={{ display: loading ? "none" : "block" }}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Parallax>
          </div>
        );
      })}
      <Box
        sx={{
          position: "fixed",
          bottom: 200,
          left: !isSmallScreen ? 50 : 10,
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
            width: "12px",
            height: "12px",
            minHeight: "12px",
            border: "solid white .5px",
            backgroundColor: activeSection === 0 ? "white" : "transparent",
            boxShadow: "none",
          }}
        />
        {Data.map((_, indexs) => (
          <Fab
            key={indexs}
            color={activeSection === indexs + 1 ? "primary" : "default"}
            size="small"
            onClick={() => scrollToSection(indexs + 1)}
            sx={{
              margin: "10px",
              cursor: "pointer",
              display: "flex",
              width: "12px",
              height: "12px",
              minHeight: "12px",
              border: "solid white .5px",
              backgroundColor:
                activeSection === indexs + 1 ? "white" : "transparent",
              boxShadow: "none",
            }}
          />
        ))}
        <Fab
          color={activeSection === 0 ? "primary" : "default"}
          size="small"
          onClick={
            () => scrollToSection(7)
            //  document.getElementById('par').scrollIntoView()
          }
          sx={{
            margin: "10px",
            cursor: "pointer",
            display: "flex",
            width: "12px",
            height: "12px",
            minHeight: "12px",
            border: "solid white .5px",
            backgroundColor: activeSection === 7 ? "white" : "transparent",
            boxShadow: "none",
          }}
        />
        <Fab
          color={activeSection === 0 ? "primary" : "default"}
          size="small"
          onClick={() => scrollToSection(8)}
          sx={{
            margin: "10px",
            cursor: "pointer",
            display: "flex",
            width: "12px",
            height: "12px",
            minHeight: "12px",
            border: "solid white .5px",
            backgroundColor: activeSection === 8 ? "white" : "transparent",
            boxShadow: "none",
          }}
        />
      </Box>
    </>
  );
};

export default Try;

const Data = [
  {
    imge1: banner1,
    imges: banner1,
    Typography: "Pre-School",
    Typography1:
      "Ignite young minds with our captivating preschool toys collection! Specially designed for early learners, these toys blend fun and education seamlessly. Explore the joy of learning with our thoughtfully curated selection for the littlest adventurers.",
    links: `/Pre-School`,
    imagelogo: [
      { img: pp1 },
      {
        img: pp2,
      },
      { img: pp3 },
      { img: pp4 },
      { img: pp5 },
      { img: pp6 },
    ],
  },
  {
    links: "/Collectibles",
    imges: banner2,
    imge1: banner2,
    Typography: "Collectibles",
    Typography1:
      "Dive into a world of enchantment with our exclusive Collectible Toys. Unearth rare gems and cherished editions that elevate your collection to new heights. From iconic franchises to limited releases, our carefully curated selection promises to delight enthusiasts and collectors alike.",

    imagelogo: [
      {
        img: cc1,
      },
      {
        img: cc2,
      },
      {
        img: cc3,
      },
    ],
  },
  {
    links: "/RCToys",
    imges: banner3,
    imge1: banner31,
    Typography: "RC Toys",
    Typography1:
      "Explore the thrill of remote-controlled excitement with our RC (Remote Control) section at Toycity. Unleash the power of imaginative play as you navigate a world of high-speed racing, precision maneuvers, and airborne adventures.",

    imagelogo: [
      {
        img: rc1,
      },
      {
        img: rc2,
      },
      {
        img: rc3,
      },
    ],
  },

  {
    links: "/Cosmetics",
    imges: banner4,
    imge1: banner41,
    Typography: "Cosmetics",
    Typography1:
      "Transform playtime into a magical makeover with our Kids Cosmetics collection. Specially crafted for little ones, our vibrant and safe products let imaginations soar. From glittery lip gloss to washable nail polish, we offer a delightful range of kid-friendly cosmetics that add a touch of sparkle to their world. Explore the joy of creative expression with our quality and non-toxic formulations, making beauty play both enchanting and worry-free.",

    imagelogo: [
      {
        img: cs1,
      },
      {
        img: cs2,
      },
      {
        img: cs3,
      },
      {
        img: cs4,
      },
    ],
  },

  {
    imges: banner5,
    links: "/LearningArtandCrafts",
    imge1: banner51,
    Typography: "Learning, Art and Crafts",
    Typography1:
      "Discover a wide array of learning toys designed to make education enjoyable. At our toy distribution company, we believe that play is a powerful teacher, and our learning, art, and crafts toys are carefully chosen to inspire creativity and curiosity. Explore our collection today and witness the joy of learning and self-expression through the magic of play.",

    imagelogo: [
      {
        img: la1,
      },
      {
        img: la2,
      },
      {
        img: la3,
      },
      {
        img: la4,
      },
      {
        img: la5,
      },
    ],
  },

  {
    imges: banner6,
    imge1: banner61,
    Typography: "Other",
    links: "/Other",
    Typography1:
      "Discover a world of play in our Toy Kingdom! From timeless classics to cutting-edge wonders, our toy category is a gateway to endless joy. Elevate playtime with the best in fun and excitement.",

    imagelogo: [
      {
        img: o1,
      },
      {
        img: o2,
      },
      {
        img: o3,
      },
    ],
  },
];
