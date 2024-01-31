import React, { useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";
import { MetaComponent, TypographyText } from "../Reusable/Reusable";
import { Link } from "react-router-dom";
import pp1 from "../Assets/Pre School/pp1.mp4";
import pp2 from "../Assets/Pre School/Clubpetz.mp4";
import img1 from "../Assets/Pre School/PPMM.jpg";
import img2 from "../Assets/Pre School/Giggles.jpg";
import img3 from "../Assets/Pre School/PLAYGO pOSTER-01.jpg";
import img4 from "../Assets/Pre School/win.jpg";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

const Primaryscool = () => {
  useEffect(() => {
    // Scroll to the top of the page on component mount (page load)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const Data = [
    {
      video: "i5tS6oEeGO4",
      text1: "PAW Patrol",
      text2:
        "Dive into action-packed adventures with Paw Patrol toys at Toycity! Our collection features beloved characters and thrilling playsets inspired by the hit animated series. From daring rescues to imaginative missions, Paw Patrol toys bring the excitement of Adventure Bay to life.",
    },
    {
      video: "VrBveg5b-t4",
      text1: "Gabby’s  Dollhouse!",
      text2:
        "Time to get tiny! With its cat-inspired shape and colorful details, Gabby’s Purrfect Dollhouse looks just like the one from the show! This fantastical kids’ dollhouse includes a Dollhouse Delivery tower, working Cat-A-Vator, sounds and songs, and so much more!",
    },
    // {
    //   video: "pp3",
    //   text1: "IMC Toys: Club Petz",
    //   text2:
    //     "Sweet and adorable interactive plush, we will be your new best friends!  Each has a variety of functions and special features!",
    // },
  ];

  const Data1 = [
    {
      img: 'https://ik.imagekit.io/jlco9jzsq/toycity/PPMM.jpg?updatedAt=1706714476653',
      text1: "PAW Patrol: The Mighty Movie",
      text2:
        "Dive into the action-packed world of Adventure City with our exclusive range of toys inspired by the blockbuster film.",
    },
    {
      img: 'https://ik.imagekit.io/jlco9jzsq/toycity/Giggles.jpg?updatedAt=1706714473331',
      text1: "Funskool Giggles",
      text2:
        "From delightful plushies to interactive games, here are a curated selection of Funskool's Giggles line.",
    },
    {
      img: 'https://ik.imagekit.io/jlco9jzsq/toycity/PLAYGO%20pOSTER-01.jpg?updatedAt=1706714472492',
      text1: "Play Go",
      text2:
        "Dive into the action-packed world of Adventure City with our exclusive range of toys inspired by the blockbuster film.",
    },
    {
      img: 'https://ik.imagekit.io/jlco9jzsq/toycity/win.jpg?updatedAt=1706714470142',
      text1: "Winfun",
      text2:
        "WinFun Toys rage for interactive learning gadgets to whimsical playsets, WinFun Toys redefine playtime, sparking imagination and joy in every child.",
    },
  ];
  return (
    <>
      <MetaComponent dynamicTitle="Toycity - Pre-School " />
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
        <br /> <br />
        <br /> <br />
        <Link to="/">
          <WestIcon
            sx={{
              width: isSmallScreen ? "1em" : "2em",
              height: isSmallScreen ? "1em" : "2em",
            }}
          />
        </Link>{" "}
        <TypographyText
          Typography={<>Pre-School</>}
          textAlign="centre"
          color="black"
          fontWeight="400"
          variant={!isSmallScreen ? "h2" : "h5"}
        />
        <Link
          to="/collectibles
"
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
        <Grid item xs={12} lg={12} md={12} sm={12}>
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", height: "100%" }}
          >
            <source src={pp2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <br />
          <br />
        </Grid>

        <Grid item xs={12} lg={12} md={12} sm={12}>
          <TypographyText
            Typography="IMC Toys: Club Petz"
            fontWeight="400"
            variant={!isSmallScreen ? "h5" : "h5"}
          />
          <br />
          <TypographyText
            Typography="Sweet and adorable interactive plush, we will be your new best friends!  Each has a variety of functions and special features!
            "
            textAlign="center"
            fontWeight="400"
          />
          <br /> <br />
        </Grid>
        {Data1.map((curelem, index) => (
          <>
            <Grid item xs={12} lg={6} md={6} sm={12} key={index}>
              <img
                src={curelem.img}
                alt=""
                width={"100%"}
                height={"auto"}
                loading="lazy"
              />
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

export default Primaryscool;
