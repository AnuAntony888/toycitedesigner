import { Box, Grid, Fab, Skeleton } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import { TypographyText } from "../Reusable/Reusable";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import "aos/dist/aos.css";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Parallax } from "react-parallax";
import Homesection1 from "./Homesection1";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";

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
                            loading="lazy"
                            width="100%"
                            onLoad={handleImageLoad}
                            style={{
                              visibility: loading ? "hidden" : "visible",
                            }}
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
    imge1:
      "https://ik.imagekit.io/f0lwh775f5/Toycity/homepage/banner1%20.jpg?updatedAt=1706766250919",
    imges:
      "https://ik.imagekit.io/f0lwh775f5/Toycity/homepage/banner1%20.jpg?updatedAt=1706766250919",
    Typography: "Pre-School",
    Typography1:
      "The early learners’ collection, where education meets play in the most delightful way! These pre-school toys are crafted to make learning a fun-filled adventure for early learners. Each toy is a unique blend of entertainment and education, ensuring that your little ones not only have a blast but also develop essential skills.",
    links: `/Pre-School`,
    imagelogo: [
      {
        img: "https://ik.imagekit.io/f0lwh775f5/Toycity/homelogo/14.png?updatedAt=1706762258385",
      },
      {
        img: "https://ik.imagekit.io/f0lwh775f5/Toycity/homelogo/26.png?updatedAt=1706762264586",
      },
      {
        img: "https://ik.imagekit.io/f0lwh775f5/Toycity/homelogo/23.png?updatedAt=1706762264402",
      },
      {
        img: "https://ik.imagekit.io/f0lwh775f5/Toycity/homelogo/22.png?updatedAt=1706762264693",
      },
      {
        img: "https://ik.imagekit.io/f0lwh775f5/Toycity/homelogo/25.png?updatedAt=1706762264757",
      },
      {
        img: "https://ik.imagekit.io/f0lwh775f5/Toycity/homelogo/17.png?updatedAt=1706762258352",
      },
    ],
  },
  {
    links: "/collectibles",
    imges:
      "https://ik.imagekit.io/f0lwh775f5/Toycity/homepage/banner2.jpg?updatedAt=1706766251221",
    imge1:
      "https://ik.imagekit.io/f0lwh775f5/Toycity/homepage/banner2.jpg?updatedAt=1706766251221",
    Typography: "Collectibles",
    Typography1:
      "Embark on a journey of nostalgia and discovery with our captivating collection of collectible toys. Whether you're a seasoned collector or just starting your journey, our collectible toys promise to add a touch of magic to your collection. Explore the stories, relive the memories, and find that special piece that speaks to your heart. We celebrate the joy of collecting and invite you to immerse yourself in a world where each toy holds a unique tale..",

    imagelogo: [
      {
        img: "https://ik.imagekit.io/f0lwh775f5/Toycity/homelogo/4.png?updatedAt=1706762269928",
      },
      {
        img: "https://ik.imagekit.io/f0lwh775f5/Toycity/homelogo/2.png?updatedAt=1706762263176",
      },
      {
        img: "https://ik.imagekit.io/f0lwh775f5/Toycity/homelogo/WWO_HP_Wand_Logo.webp?updatedAt=1706762283494",
      },
    ],
  },
  {
    links: "/rctoys",
    imges:
      "https://ik.imagekit.io/f0lwh775f5/Toycity/homepage/banner3.png?updatedAt=1706766252178",
    imge1:
      "https://ik.imagekit.io/f0lwh775f5/Toycity/homepage/banner31.webp?updatedAt=1706766250306",
    Typography: "RC Toys",
    Typography1:
      "Unleash the thrill of speed and control with our extraordinary collection of remote control cars. Whether you're a novice seeking your first RC adventure or a seasoned pro craving high-performance machines, our selection caters to all levels of expertise. Zoom through challenging terrains, master sharp turns, and experience the adrenaline rush of precise manoeuvring. From realistic replicas to futuristic models, our remote control cars promise an unparalleled blend of precision, power, and pure fun. Explore our range and let the excitement of remote control racing ignite your passion for unparalleled driving experiences.",

    imagelogo: [
      {
        img: "https://ik.imagekit.io/f0lwh775f5/Toycity/homelogo/29.png?updatedAt=1706762268727",
      },
      {
        img: "https://ik.imagekit.io/f0lwh775f5/Toycity/homelogo/28.png?updatedAt=1706762266657",
      },
      {
        img: "https://ik.imagekit.io/f0lwh775f5/Toycity/homelogo/30.png?updatedAt=1706762269391",
      },
    ],
  },

  {
    links: "/cosmetics",
    imges:
      "https://ik.imagekit.io/f0lwh775f5/Toycity/homepage/banner4.jpg?updatedAt=1706766251545",
    imge1:
      "https://ik.imagekit.io/f0lwh775f5/Toycity/homepage/banner41.webp?updatedAt=1706766251051",
    Typography: "Cosmetics",
    Typography1:
      "Transform playtime into a magical makeover with our Kids Cosmetics collection. Specially crafted for little ones, our vibrant and safe products let imaginations soar. From glittery lip gloss to washable nail polish, we offer a delightful range of kid-friendly cosmetics that add a touch of sparkle to their world. Explore the joy of creative expression with our quality and non-toxic formulations, making beauty play both enchanting and worry-free.",

    imagelogo: [
      {
        img: "https://ik.imagekit.io/f0lwh775f5/Toycity/homelogo/9.png?updatedAt=1706762272586",
      },
      {
        img: "https://ik.imagekit.io/f0lwh775f5/Toycity/homelogo/8.png?updatedAt=1706762272671",
      },
      {
        img: "https://ik.imagekit.io/f0lwh775f5/Toycity/homelogo/10.png?updatedAt=1706762258580",
      },
      {
        img: "https://ik.imagekit.io/f0lwh775f5/Toycity/homelogo/7.png?updatedAt=1706762271958",
      },
    ],
  },

  {
    imges:
      "https://ik.imagekit.io/f0lwh775f5/Toycity/homepage/banner5.webp?updatedAt=1706766250295",
    links: "/learningartandcrafts",
    imge1:
      "https://ik.imagekit.io/f0lwh775f5/Toycity/homepage/banner51.webp?updatedAt=1706766250572",
    Typography: "Learning, Art and Crafts",
    Typography1:
      "Discover a wide array of learning toys designed to make education enjoyable. At our toy distribution company, we believe that play is a powerful teacher, and our learning, art, and crafts toys are carefully chosen to inspire creativity and curiosity. Explore our collection today and witness the joy of learning and self-expression through the magic of play.",

    imagelogo: [
      {
        img: "https://ik.imagekit.io/f0lwh775f5/Toycity/homelogo/5.png?updatedAt=1706762270931",
      },
      {
        img: "https://ik.imagekit.io/f0lwh775f5/Toycity/homelogo/18.png?updatedAt=1706762258547",
      },
      {
        img: "https://ik.imagekit.io/f0lwh775f5/Toycity/homelogo/15.png?updatedAt=1706762258185",
      },
      {
        img: "https://ik.imagekit.io/f0lwh775f5/Toycity/homelogo/Etch%20a%20sketch.png?updatedAt=1706762281206",
      },
      {
        img: "https://ik.imagekit.io/f0lwh775f5/Toycity/homelogo/Coolmaker.png?updatedAt=1706762275541",
      },
    ],
  },

  {
    imges:
      "https://ik.imagekit.io/f0lwh775f5/Toycity/homepage/banner6.jpg?updatedAt=1706766250506",
    imge1:
      "https://ik.imagekit.io/f0lwh775f5/Toycity/homepage/banner61.jpg?updatedAt=1706766250299",
    Typography: "Other",
    links: "/other",
    Typography1:
      "Discover a world of play in our Toy Kingdom! From timeless classics to cutting-edge wonders, our toy category is a gateway to endless joy. Elevate playtime with the best in fun and excitement.",

    imagelogo: [
      {
        img: "https://ik.imagekit.io/f0lwh775f5/Toycity/homelogo/Bitzee.png?updatedAt=1706762276410",
      },
      {
        img: "https://ik.imagekit.io/f0lwh775f5/Toycity/homelogo/16.png?updatedAt=1706762258429",
      },
      {
        img: "https://ik.imagekit.io/f0lwh775f5/Toycity/homelogo/19.png?updatedAt=1706762260823",
      },
    ],
  },
];
