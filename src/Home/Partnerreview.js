import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import { TypographyText } from "../Reusable/Reusable";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import "aos/dist/aos.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Background, Parallax } from "react-parallax";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import banner7 from "../Assets/homepage/banner7.jpg";
import banner71 from "../Assets/homepage/banner71.webp";
import brand from '../Assets/homepage/Brand Launch.webp'

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <>
      <div
        className="slickbuttonprev"
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        {" "}
        <KeyboardArrowLeftIcon />
      </div>
    </>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="slickbuttonnext" onClick={onClick}>
      <KeyboardArrowRightIcon className="keybordarrow" />
    </div>
  );
}
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,

  infinite: true,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    // Add more breakpoints as needed
  ],
};
const Partnerreview = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const islarge = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <>
      <Grid
        container
        spacing={0}
        className="large-header"
        id="par"
        index={7}
        sx={{ height: !isSmallScreen ? "100vh" : "auto" }}
      >
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          sx={{
            backgroundImage: !isSmallScreen
              ? `url(${banner7})`
              : `url( ${banner71})`,
            backgroundSize: "cover",
            objectFit: "cover",
            height: "100vh",
            display: "flex",
            alignItems: "center",

            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
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
            sx={{ zIndex: 1, p: "10%", textAlign: "justify" }}
          >
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <TypographyText
                Typography={<>Partners Review</>}
                fontWeight="400"
                variant={!isSmallScreen ? "h2" : "h4"}
                textAlign="centre"
                color="white"
              />
              <br />
              <br />
            </Grid>
            <Grid item xs={12}>
              <Slider {...settings} className="slickheight">
                {Data.map((post, index) => (
                  <div key={index}>
                    <Box
                      sx={{
                        bgcolor: "white",
                        margin: "10px",
                        minHeight: "370px",
                        p: "5%",
                      }}
                    >
                      <Card
                        sx={{
                          bgcolor: "transparent",
                          boxShadow: "none",
                          display: "grid",
                          placeItems: "center",
                          position: "relative",
                        }}
                      >
                        <FormatQuoteIcon
                          sx={{
                            height: "120px",
                            width: "120px",

                            position: "absolute",

                            fill: "pink",
                          }}
                        />

                        <CardContent sx={{ zIndex: 50 }}>
                          <TypographyText
                            Typography={post.text}
                            textAlign={"left"}
                            color="#231F1E"
                            fontSize=".8rem"
                            // fontWeight="400"
                          />
                          <br />
                          <br />
                          <TypographyText
                            Typography={post.text1}
                            textAlign={"right"}
                            fontWeight="400"
                            fontSize=".9rem"
                            color="gray"
                          />
                          <TypographyText
                            Typography={post.text2}
                            textAlign={"right"}
                            color="black"
                            fontSize=".75rem"
                          />
                        </CardContent>
                      </Card>
                    </Box>
                  </div>
                ))}
              </Slider>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/********************last**************************** */}
      <Grid
        container
        // Spacing={3}
        sx={{ bgcolor: "#C8C8C8", margin: "auto", justifyContent: "center" }}
      >
        <Grid
          item
          xs={12}
          lg={6}
          md={6}
          sm={12}
          sx={{ margin: "auto", justifyContent: "center", p: "5%" }}
        >
          <TypographyText
            Typography={"Latest Brand Launch"}
            textAlign={"centre"}
            fontWeight="400"
            variant={!isSmallScreen ? "h2" : "h4"}
            color="black"
          />
          <br />
          <br />
          <TypographyText
            Typography={
              "A Spectacle of Smiles at Our Grand Toyventure Launch! Join us for an enchanting evening as we introduce our latest collection of wonders, sparking imagination and playfulness. Let the excitement begin!"
            }
            textAlign={"centre"}
            color="black"
          />
        </Grid>
        <Grid item xs={12} lg={6} md={6} sm={12}>
          <img
            src={
              !isSmallScreen
                ? brand
                : brand
            }
            alt=""
            width={"100%"}
            height={
              // !isSmallScreen ? "600px" :
              "100%"
            }
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Partnerreview;

const Data = [
  {
    text: (
      <>
        Wishing Toycity on their 7th Anniversary, they are true partners in
        business, with immense knowledge in Toys for KSA market, catering from
        infants to adolescence. Having leading brands from educational toys for
        the development of children to the latest recreational toys. Dedicated,
        passionate and committed team with worlds leading brands is their recipe
        for success.Wishing continued success!
      </>
    ),
    text1: "Skysales",

    text2: "Saudia catering",
  },
  {
    text: (
      <>
        &ldquo;You and your team are doing a fantastic job by bringing in the
        right products at the right time, and the customer service is
        consistently doing good, please continue the same&rdquo;
      </>
    ),
    text1: "Allan Rabie",

    text2: "International Sales Manager",
  },
  {
    text: (
      <>
        &ldquo;You and your team are doing a fantastic job by bringing in the
        right products at the right time, and the customer service is
        consistently doing good, please continue the same&rdquo;
      </>
    ),
    text1: "Nowshar Hussain",
   
    text2: "International Sales Manager",
  },
  {
    text: (
      <>
        &ldquo;Zuru has been working for 1 year with Toycity and is happy to say
        that we are having a smooth and proactive cooperation towards the same
        goal which is growing the business in Saudi Arabia&rdquo;
      </>
    ),
    text1: "Lorenz Pirlot",
   
    text2: " Sales and Marketing Manager – International",
  },
  {
    text: (
      <>
        &ldquo;The focused strategy, the determination, the execution, the
        follow up and the follow through, all makes us extremely proud and
        confident the ToyCity with no doubt will be among the top players
        shaping the distribution business in KSA&rdquo;
      </>
    ),
    text1: "Fawaz Abidin",
   
    text2: "Managing Director",
  },
  {
    text: (
      <>
        &ldquo;Toy City has been a great KSA partner for PINCA. They have great
        relationships with the major retailers and have an excellent
        distribution network. We look forward to a consistent year on year
        growth for our business with Toy City in KSA&rdquo;
      </>
    ),
    text1: "Payal Mirchandani",
   
    text2: "Managing Director",
  },
  {
    text: (
      <>
        &ldquo;With many moving parts, the ToyCity team was excellent to work
        with and responded in a timely manner in helping to advance the
        project&rdquo;
      </>
    ),
    text1: "Ken Danielsen",
   
    text2: " International Sales Director",
  },
];
