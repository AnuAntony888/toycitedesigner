import React, { useEffect, useState } from "react";
import { MetaComponent, TypographyText } from "../Reusable/Reusable";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import { Box } from "@mui/system";
import banner from "../Assets/News & Events.webp";
import banner1 from "../Assets/2.webp";
import news1 from "../Assets/news/News 1.webp";
import news2 from "../Assets/news/News 2.webp";
import news3 from "../Assets/news/News 3.webp";
const NewsandEvents = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  useEffect(() => {
    // Scroll to the top of the page on component mount (page load)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <MetaComponent dynamicTitle="Toycity - News and events" />
      {!isSmallScreen ? (
        <Box
          sx={{ position: "relative", textAlign: "center", height: "100vh " }}
        >
          <img
            src={'https://ik.imagekit.io/jlco9jzsq/toycity/News%20&%20Events.webp?updatedAt=1706186579306'} // Replace with your image path
            alt="Your Image Alt Text"
            style={{
              width: "100%",
              height: "100%",
            }}
            loading="lazy"
          />
          <Box
            style={{
              position: "absolute",

              top: "50%",
              left: "50%",
              transform: "translate(-10%, -50%)",
            }}
          >
            <TypographyText
              Typography={<>News and Events</>}
              fontWeight="400"
              variant={!isSmallScreen ? "h2" : "h4"}
              color="#fff"
            />

            <br />
            <TypographyText
              textAlign="justify"
              color="#fff"
              Typography={
                <>
                  Directly engaging with the consumers is one of the strongest
                  brand building activity. We conduct meet & greets using
                  characters and we animate store fronts during
                  weekends and holidays.
                </>
              }
            />
          </Box>
        </Box>
      ) : (
        <>
          <Box sx={{ position: "relative", textAlign: "center" }}>
            <img
              src={'https://ik.imagekit.io/jlco9jzsq/toycity/2.webp?updatedAt=1706186526836'} // Replace with your image path
              alt="Your Image Alt Text"
              style={{
                width: "100%",
                height: "100vh",
              }}
              loading="lazy"
            />

            <Box
              style={{
                position: "absolute",

                top: "25%",
                left: "30%",
                transform: "translate(-15%, -50%)",
              }}
            >
              <TypographyText
                Typography={<>News & Events</>}
                fontWeight="400"
                variant={!isSmallScreen ? "h2" : "h4"}
                color="White"
              />

              {/* <br /> */}
            </Box>
          </Box>

          <Box sx={{ pl: "8%", pr: "8%", pt: "2%", pb: "2%" }}>
            <TypographyText
              Typography={
                <>
                  Directly engaging with the consumers is one of the strongest
                  brand building activity. We conduct meet & greets using
                  characters and we animate store fronts during
                  weekends and holidays.
                </>
              }
            />
          </Box>
        </>
      )}

      <Grid container spacing={0} sx={{ pb: "5%" }}>
        {Data.map((data, index) => (
          <Grid
            item
            lg={4}
            md={4}
            sm={12}
            xs={12}
            style={{ backgroundColor: data.backgroundColor }}
          >
            <Card
              sx={{
                Width: "100%",
                backgroundColor: "transparent",
                p: "5%",
                boxShadow: "none",
              }}
            >
              <CardContent>
                {/* <TypographyText
                  Typography={data.tex1}
                  fontWeight="400"
                  variant={"h5"}
                  textAlign={"left" }
                  color="#fff"
                />{" "}
                <br /> */}
                <TypographyText
                  Typography={data.tex2}
                  fontWeight="400"
                  variant={"h5"}
                  textAlign={!isSmallScreen ?"left" :'centre'}
                  color="#fff"
                />{" "}
                <br />
                <TypographyText
                  Typography={data.tex3}
                  fontWeight="400"
                  color="#fff"
                  textAlign={!isSmallScreen ?"left" :'centre'}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}

        <Grid
          item
          lg={4}
          md={4}
          sm={12}
          xs={12}
          sx={{ pt: isSmallScreen ? "5%" : "20%" }}
        >
          <TypographyText
            Typography={"Toycity – Latest News"}
            fontWeight="400"
            variant={"h4"}
          />
        </Grid>

        <Grid item lg={8} md={8} sm={12} xs={12}>
          <Grid container spacing={0}>
            {Data1.map((data, index) => (
              <Grid
                item
                lg={6}
                md={6}
                sm={12}
                xs={12}
                sx={{
                  boxShadow:
                    "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
                }}
              >
                <Card
                  sx={{
                    Width: "100%",
                    backgroundColor: "transparent",
                    p: "5%",
                    boxShadow: "none",
                  }}
                >
                  {/* <TypographyText
                    Typography={data.tex1}
                    fontWeight="400"
                    variant={"h1"}
                    textAlign={!isSmallScreen ?"left" :'centre'}
                    color="#EEEEEE"
                  />{" "}
                  <br /> */}
                  <TypographyText
                    Typography={data.tex3}
                    fontWeight="400"
                    textAlign={!isSmallScreen ?"left" :'centre'}
                    variant={"h6"}
                  />
                  <br />
                  <CardMedia
                    sx={{ height: 200 }}
                    image={data.img}
                    title="green iguana"
                  />
                  <br />
                  <TypographyText
                    Typography={data.tex4}
                    fontSize=".9rem"
                    textAlign={!isSmallScreen ?"left" :'centre'}
                  />
                  <br />
                  <TypographyText
                    Typography={data.tex2}
                    textAlign={!isSmallScreen ?"left" :'centre'}
                    fontSize=".8rem"
                  />{" "}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default NewsandEvents;
const Data = [
  {
    backgroundColor: "#4F4D4D",
    tex1: "1 -",
    tex2: "PAW Patrol Mighty Movie Launch Event",
    tex3: "We organized movie launch event wherein we invited influencers and general crowd via voucher promos that were given away at the stores. This launch event took place for 2 days at 2 different locations. We distributed goody bags, and had a photo booth installed",
  },
  {
    backgroundColor: "#DEC5C5",
    tex1: "2 -",
    tex2: "PAW Patrol Meet And Greet ",
    tex3: "To promote the might movie we also organized meet and greet in Riyadh and Jeddah. We identified few malls  with that had good footfall and organized meet and greets where children and parents can have a direct connect with the movie characters.",
  },
  {
    backgroundColor: "#000000",
    tex1: "3 -",
    tex2: "Gabby Meet And Greet ",
    tex3: "A meet and greet was organized for Gabby in the major malls of Jeddah and Riyadh",
  },
];

const Data1 = [
  {
    tex1: "1",
    tex2: (
      <>
        {" "}
        26th September at Nakheel Mall, Muvi Cinema, Riyadh <br />
        27th September, Mall of Arabia, Muvi cinema, Jeddah
      </>
    ),

    tex3: "PAW Patrol Mighty Movie Launch Event",
    img: 'https://ik.imagekit.io/f0lwh775f5/Toycity/news/News%201.webp?updatedAt=1706762682278',
    tex4: "We organized movie launch event wherein we invited influencers and general crowd via voucher promos that were given away at the stores. This launch event took place for 2 days at 2 different locations. We distributed goody bags, and had a photo booth installed.",
  },
  {
    tex1: "2",
    tex2: (
      <>
        {" "}
        14th September, ELC, Nakheel Mall, Riyadh
        <br />
        15th September, Babyshop, Panorama Mall, Riyadh
        <br />
        16th September, Hi-kids, Al Makan Mall, Riyadh
        <br />
        21th September, ELC, Mall of Arabic, Jeddah
        <br />
        22th September, Danube, Red sea mall, Jeddah
        <br />
        23th September, Toy N Surprise, Gold Mor, Jeddah
        <br />
      </>
    ),
    tex3: "PAW Patrol Meet And Greet ",
    img: 'https://ik.imagekit.io/f0lwh775f5/Toycity/news/News%202.webp?updatedAt=1706762682373',
    tex4: "To promote the might movie we also organized meet and greet in Riyadh and Jeddah. We identified few malls  with that had good footfall and organized meet and greets where children and parents can have a direct connect with the movie characters.",
  },
  {
    tex1: "3",
    tex2: (
      <>
        14th September, Babyshop, Jeddah Park, Jeddah
        <br />
        15th September, Toy n Surprise Gold Mor, Jeddah
        <br />
        16th September, Babyshop, Dome Center, Jeddah
        <br />
        12th October, Babyshop, Exit 9, Riyadh
        <br />
        19th October, Baby story, Riyadh
        <br />
        27th October, Danube, Hayat Mall, Riyadh
        <br />
      </>
    ),
    tex3: "Gabby Meet And Greet ",
    img: 'https://ik.imagekit.io/f0lwh775f5/Toycity/news/News%203.webp?updatedAt=1706762682249',
    tex4: "A meet and greet was organized for Gabby in the major malls of Jeddah and Riyadh",
  },
];
