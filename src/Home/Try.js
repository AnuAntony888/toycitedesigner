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
import pp1 from "../Assets/prcl/PreSchool/CB.png";
import pp2 from "../Assets/prcl/PreSchool/GDH.png";
import pp9 from "../Assets/prcl/PreSchool/IMC.png";
import pp4 from "../Assets/prcl/PreSchool/PG.png";
import pp5 from "../Assets/prcl/PreSchool/PR.png";
import pp6 from "../Assets/prcl/PreSchool/WF.png";
import pp7 from "../Assets/prcl/PreSchool/funskool.png";
import pp8 from "../Assets/prcl/PreSchool/gIGGLES.png";
import co1 from "../Assets/prcl/Cosmetics/Hotfocus.png";
import co2 from "../Assets/prcl/Cosmetics/Shushi.png";
import co3 from "../Assets/prcl/Cosmetics/TT.png";
import co4 from "../Assets/prcl/Cosmetics/Townley.png";

const Try = () => {
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
    const element = document.getElementById('scrollTarget');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
                  <Grid item lg={6} md={6} sm={12} xs={12} sx={{ margin: !isSmallScreen ? "auto" : "0" }}>
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
                      {data.imagelogo &&
                        data.imagelogo.map((logo) => (
                          <Grid item lg={3} md={3} sm={3} xs={4}>
                            <img src={logo.img} alt="" width={"100%"} />
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
          onClick={() =>
             scrollToSection(7)
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
          onClick={() =>     scrollToSection(8)}
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
      "https://static.wixstatic.com/media/3fff3e_5cd79328eb33416983df16896216d1fb~mv2.jpg/v1/fill/w_2560,h_1440,fp_0.62_0.97,q_90,usm_0.66_1.00_0.01,enc_auto/3fff3e_5cd79328eb33416983df16896216d1fb~mv2.jpg",
    imges:
      "https://static.wixstatic.com/media/3fff3e_5cd79328eb33416983df16896216d1fb~mv2.jpg/v1/fill/w_2560,h_1440,fp_0.62_0.97,q_90,usm_0.66_1.00_0.01,enc_auto/3fff3e_5cd79328eb33416983df16896216d1fb~mv2.jpg",
    Typography: "Pre-School",
    Typography1:
      "Ignite young minds with our captivating preschool toys collection! Specially designed for early learners, these toys blend fun and education seamlessly. Explore the joy of learning with our thoughtfully curated selection for the littlest adventurers.",
    links: `/Pre-School`,
    imagelogo: [
      {
        img: "https://static.wixstatic.com/media/3fff3e_73a5f56ac63343208cb8360f07740ace~mv2.png/v1/fill/w_296,h_168,q_90/3fff3e_73a5f56ac63343208cb8360f07740ace~mv2.webp",
      },
      {
        img: "https://static.wixstatic.com/media/3fff3e_f04bf754f4034c3985ab969cdaf21187~mv2.png/v1/fill/w_254,h_144,q_90/3fff3e_f04bf754f4034c3985ab969cdaf21187~mv2.webp",
      },
      {
        img: "https://static.wixstatic.com/media/3fff3e_8b7608bf17144110a0cd5453bafbdaa6~mv2.png/v1/fill/w_254,h_144,q_90/3fff3e_8b7608bf17144110a0cd5453bafbdaa6~mv2.webp",
      },
      {
        img: "https://static.wixstatic.com/media/3fff3e_0c4400a66a0942468a4065d983681535~mv2.png/v1/fill/w_254,h_144,q_90/3fff3e_0c4400a66a0942468a4065d983681535~mv2.webp",
      },
      {
        img: "https://static.wixstatic.com/media/3fff3e_630517c506824605a7f1c658f0f5d39f~mv2.png/v1/fill/w_254,h_144,q_90/3fff3e_630517c506824605a7f1c658f0f5d39f~mv2.webp",
      },
      {
        img: "https://static.wixstatic.com/media/3fff3e_96c8224664824e45a2dbf643180a7c1d~mv2.png/v1/fill/w_254,h_144,q_90/3fff3e_96c8224664824e45a2dbf643180a7c1d~mv2.webp",
      },
    ],
  },
  {
    links: "/Collectibles",
    imges:
      "https://static.wixstatic.com/media/3fff3e_357ae3cd4b14456f9b5368198c090440~mv2.jpg/v1/fill/w_2096,h_1166,fp_0.61_0.50,q_90,usm_0.66_1.00_0.01,enc_auto/3fff3e_357ae3cd4b14456f9b5368198c090440~mv2.jpg",
    imge1:
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
  { links: "/RCToys",
    imges:
      "https://static.wixstatic.com/media/3fff3e_b9af84a0008d49ea8e8e85bd9f330ab7~mv2.png/v1/fill/w_1442,h_616,fp_0.61_0.33,q_90,usm_0.66_1.00_0.01,enc_auto/3fff3e_b9af84a0008d49ea8e8e85bd9f330ab7~mv2.png",
    imge1:
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

  {    links: "/Cosmetics",
    imges:
      "https://static.wixstatic.com/media/3fff3e_f98ece67763c4fd3b3faa9caeb6970d8~mv2.jpg/v1/fill/w_1442,h_616,fp_0.35_0.45,q_85,usm_0.66_1.00_0.01,enc_auto/3fff3e_f98ece67763c4fd3b3faa9caeb6970d8~mv2.jpg",
    imge1:
      "https://static.wixstatic.com/media/3fff3e_f98ece67763c4fd3b3faa9caeb6970d8~mv2.jpg/v1/fill/w_751,h_524,fp_0.35_0.45,q_85,usm_0.66_1.00_0.01,enc_auto/3fff3e_f98ece67763c4fd3b3faa9caeb6970d8~mv2.jpg",
    Typography: "Cosmetics",
    Typography1:
      "Transform playtime into a magical makeover with our Kids Cosmetics collection. Specially crafted for little ones, our vibrant and safe products let imaginations soar. From glittery lip gloss to washable nail polish, we offer a delightful range of kid-friendly cosmetics that add a touch of sparkle to their world. Explore the joy of creative expression with our quality and non-toxic formulations, making beauty play both enchanting and worry-free.",

    imagelogo: [
      { img: 'https://static.wixstatic.com/media/3fff3e_246a234cca6a433b9faa85f153fcfb2f~mv2.png/v1/fill/w_1224,h_684,q_90/3fff3e_246a234cca6a433b9faa85f153fcfb2f~mv2.webp' },
      { img: 'https://static.wixstatic.com/media/3fff3e_62c94da314c5405284d9026cc47fd58f~mv2.png/v1/fill/w_1224,h_684,q_90/3fff3e_62c94da314c5405284d9026cc47fd58f~mv2.webp' },
      { img: 'https://static.wixstatic.com/media/3fff3e_6dffc3ce06124e1a8b07b713751e8e86~mv2.png/v1/fill/w_1224,h_684,q_90/3fff3e_6dffc3ce06124e1a8b07b713751e8e86~mv2.webp'},
      {
        img: 'https://static.wixstatic.com/media/3fff3e_6d442401bd6547ceb8da7ae978712ab2~mv2.png/v1/fill/w_1215,h_684,q_90/3fff3e_6d442401bd6547ceb8da7ae978712ab2~mv2.webp',
      },
    ],
  },

  {
    imges:
      "https://static.wixstatic.com/media/3fff3e_427843dfb30c43c29a1dbddc3625e639~mv2.jpg/v1/fill/w_1442,h_721,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3fff3e_427843dfb30c43c29a1dbddc3625e639~mv2.jpg",
    links: "/LearningArtandCrafts",
    imge1:
      "https://static.wixstatic.com/media/3fff3e_427843dfb30c43c29a1dbddc3625e639~mv2.jpg/v1/fill/w_751,h_528,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3fff3e_427843dfb30c43c29a1dbddc3625e639~mv2.jpg",
    Typography: "Learning, Art and Crafts",
    Typography1:
      "Discover a wide array of learning toys designed to make education enjoyable. At our toy distribution company, we believe that play is a powerful teacher, and our learning, art, and crafts toys are carefully chosen to inspire creativity and curiosity. Explore our collection today and witness the joy of learning and self-expression through the magic of play.",

    imagelogo: [
      {
        img: "https://static.wixstatic.com/media/3fff3e_bc0d0ec82471469fbfb8e55b47fdd585~mv2.png/v1/fill/w_266,h_150,q_90/3fff3e_bc0d0ec82471469fbfb8e55b47fdd585~mv2.webp",
      },
      {
        img: "https://static.wixstatic.com/media/3fff3e_dc762e2e3bdb4166804f4e66da6ddc4e~mv2.png/v1/fill/w_264,h_150,q_90/3fff3e_dc762e2e3bdb4166804f4e66da6ddc4e~mv2.webp",
      },
      {
        img: "https://static.wixstatic.com/media/3fff3e_16eadbc393fb4d47be28383e110b3d0b~mv2.png/v1/fill/w_266,h_150,q_90/3fff3e_16eadbc393fb4d47be28383e110b3d0b~mv2.webp",
      },
      {
        img: "https://static.wixstatic.com/media/3fff3e_d896c929614e41f990818a65dbfc6bed~mv2.png/v1/fill/w_264,h_150,q_90/3fff3e_d896c929614e41f990818a65dbfc6bed~mv2.webp",
      },
      {
        img: "https://static.wixstatic.com/media/3fff3e_7c80c5e8beea41d79ee0c2169a586b7e~mv2.png/v1/fill/w_266,h_150,q_90/3fff3e_7c80c5e8beea41d79ee0c2169a586b7e~mv2.webp",
      },
    ],
  },

  {
    imges:
      "https://static.wixstatic.com/media/9aa0592cbdc1457089abf42b4929e03a.jpg/v1/fill/w_1442,h_616,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9aa0592cbdc1457089abf42b4929e03a.jpg",
    imge1:
      "https://static.wixstatic.com/media/9aa0592cbdc1457089abf42b4929e03a.jpg/v1/fill/w_751,h_524,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9aa0592cbdc1457089abf42b4929e03a.jpg",
    Typography: "Other",
    links: "/Other",
    Typography1:
      "Discover a world of play in our Toy Kingdom! From timeless classics to cutting-edge wonders, our toy category is a gateway to endless joy. Elevate playtime with the best in fun and excitement.",

    imagelogo: [
      {
        img: "https://static.wixstatic.com/media/3fff3e_8af6aa80552c4376ad11b8591fedb6c2~mv2.png/v1/fill/w_266,h_150,q_90/3fff3e_8af6aa80552c4376ad11b8591fedb6c2~mv2.webp",
      },
      {
        img: "https://static.wixstatic.com/media/3fff3e_556b709db3344b23b0ef899c603b0e73~mv2.png/v1/fill/w_264,h_150,q_90/3fff3e_556b709db3344b23b0ef899c603b0e73~mv2.webp",
      },
      {
        img: "https://static.wixstatic.com/media/3fff3e_dad921b3f65a405fbdb3150e79266023~mv2.png/v1/fill/w_266,h_150,q_90/3fff3e_dad921b3f65a405fbdb3150e79266023~mv2.webp",
      },
    ],
  },
];
