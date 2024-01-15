import { Box, Card, CardContent, Grid } from "@mui/material";
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
import { width } from "@mui/system";
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
//   speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,

  infinite: true,
//   autoplay: true,
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

  return (
    <>
      {/* <Parallax
        bgImage={
          "https://static.wixstatic.com/media/3fff3e_5cd79328eb33416983df16896216d1fb~mv2.jpg/v1/fill/w_768,h_1048,fp_0.62_0.97,q_85,usm_0.66_1.00_0.01,enc_auto/3fff3e_5cd79328eb33416983df16896216d1fb~mv2.jpg"
        }
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
            minHeight: !isSmallScreen ? "110vh" : "auto",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              opacity: ".4",
              backgroundColor: "#000000", // Adjust color and opacity as needed
            }}
          ></Box>

          <Grid
            container
            Spacing={3}
            sx={{ zIndex: 1, p: "12%", textAlign: "justify", zIndex: 100 }}
          >
            <Grid item xs={12}>
              <Slider {...settings} className="slickheight">
                {Data.map((post, index) => (
                  <div>
                    <Card sx={{ boxShadow: "none" }}>
                      <CardContent>
                        <TypographyText
                          Typography={post.text}
                          textAlign={"centre"}
                          fontSize={"1.2rem"}
                          color="#231F1E"
                          fontWeight="700"
                        />
                      </CardContent>
                    </Card>
                    <TypographyText
                      Typography={post.text2}
                      textAlign={"right"}
                      fontSize=".8rem"
                      color="#231F1E"
                    />
                  </div>
                ))}
              </Slider>
            </Grid>
          </Grid>
        </Grid>
      </Parallax> */}

      {/****************************************88 */}

      <Grid
        container
        spacing={2}
        className="large-header"
        sx={{ height: !isSmallScreen ? "100vh" : "auto" }}
      >
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          sx={{
            backgroundImage: `url(
                https://static.wixstatic.com/media/3fff3e_613e85c3c543462088bd5c4152307ffe~mv2.jpg/v1/fill/w_751,h_975,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3fff3e_613e85c3c543462088bd5c4152307ffe~mv2.jpg)`,
            backgroundSize: "cover",
            objectFit: "cover",
            height: "100%",
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
                        minHeight: "350px",
                        p: "3%",
                      }}
                    >
                      <Card sx={{ bgcolor: "transparent", boxShadow: "none",display:'grid',placeItems:'center',position:'relative' }}>
                        {/* <Box
                          sx={{
                            height: "100%",
                            width: "100%",
                    
                          }}
                        > */}
                          <FormatQuoteIcon
                            sx={{
                           
                                height: "120px",
                                width: "120px",
                         

                     
                              position: "absolute",
                         
                        

                              fill: "pink",
                            }}
                          />
                        {/* </Box> */}

                        <CardContent sx={{ zIndex: 50 ,}}>
                          <TypographyText
                            Typography={post.text}
                            textAlign={"centre"}
                            color="#231F1E"
                            fontWeight="400"
                          />
                        </CardContent>
                        <TypographyText
                          Typography={post.text1}
                          textAlign={"right"}
                          variant={"h6"}
                          color="#231F1E"
                        />
                      </Card>
                      <TypographyText
                        Typography={post.text2}
                        textAlign={"right"}
                        fontSize="1.2rem"
                        color="black"
                      />
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
            Spacing={3}
            // sx={{ zIndex: 1, p: "10%", textAlign: "justify" }}
          >
            </Grid>
    </>
  );
};

export default Partnerreview;

const Data = [
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
    img: "https://www.perfumedirect.com/cdn/shop/articles/Top_7_Luxury_Perfume_Brands_For_Women_and_Their_Best_Scents_BLOG_1024x1024.png?v=1682432203",
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
    img: "https://www.perfumedirect.com/cdn/shop/articles/Top_7_Luxury_Perfume_Brands_For_Women_and_Their_Best_Scents_BLOG_1024x1024.png?v=1682432203",
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
    img: "https://www.perfumedirect.com/cdn/shop/articles/Top_7_Luxury_Perfume_Brands_For_Women_and_Their_Best_Scents_BLOG_1024x1024.png?v=1682432203",
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
    img: "https://www.perfumedirect.com/cdn/shop/articles/Top_7_Luxury_Perfume_Brands_For_Women_and_Their_Best_Scents_BLOG_1024x1024.png?v=1682432203",
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
    img: "https://www.perfumedirect.com/cdn/shop/articles/Top_7_Luxury_Perfume_Brands_For_Women_and_Their_Best_Scents_BLOG_1024x1024.png?v=1682432203",
    text2: " International Sales Director",
  },
];
