import React, { useEffect, useState } from "react";
import { TypographyText } from "../Reusable/Reusable";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import { Box } from "@mui/system";
const NewsandEvents = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  useEffect(() => {
    // Scroll to the top of the page on component mount (page load)
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  return (
    <>
      <Box sx={{ position: "relative", textAlign: "center" }}>
        <img
          src="https://static.wixstatic.com/media/2dbb4011b6df44a5a08e88470cd37b08.jpg/v1/fill/w_1152,h_1389,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2dbb4011b6df44a5a08e88470cd37b08.jpg" // Replace with your image path
          alt="Your Image Alt Text"
          style={{
            width: "100%",
            height: "100vh",

            opacity: ".5",
          }}
        />
        <Box
          style={{
            position: "absolute",

            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <TypographyText
            Typography={<>News and Events</>}
            fontWeight="400"
            variant={!isSmallScreen ? "h2" : "h4"}
          />
          <br />
          <TypographyText
            textAlign="justify"
            Typography={
              <>
                This is your Services section introductory title. Add a short
                text to introduce the types of services offered, and consider
                highlighting any special benefits or features.
              </>
            }
          />
        </Box>
      </Box>
      <Grid container spacing={0} sx={{pt:'5%',pb:'5%'}}>
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
              sx={{ Width: "100%", backgroundColor: "transparent", p: "5%" }}
            >
              <CardContent>
                <TypographyText
                  Typography={data.tex1}
                  fontWeight="400"
                  variant={"h5"}
                  textAlign="left"
                  color="#fff"
                />{" "}
                <br />
                <TypographyText
                  Typography={data.tex2}
                  fontWeight="400"
                  variant={"h5"}
                  textAlign="left"
                  color="#fff"
                />{" "}
                <br />
                <TypographyText
                  Typography={data.tex3}
                  fontWeight="400"
                  color="#fff"
                  textAlign="left"
                />
              </CardContent>
            </Card>
          </Grid>
        ))}

        <Grid item lg={4} md={4} sm={12} xs={12} sx={{pt:isSmallScreen?"5%":'20%'}} >
          <TypographyText
            Typography={"Toycity – Latest News"}
            fontWeight="400"
            variant={"h4"}
          />
        </Grid>

        <Grid item lg={8} md={8} sm={12} xs={12}>
          <Grid container spacing={0}>
            {Data1.map((data, index) => (
              <Grid item lg={6} md={6} sm={6} xs={6}>
                <Card
                  sx={{
                    Width: "100%",
                    backgroundColor: "transparent",
                    p: "5%",
                  }}
                >
                  <TypographyText
                    Typography={data.tex1}
                    fontWeight="400"
                    variant={"h1"}
                    textAlign="left"
                    color="#EEEEEE"
                  />{" "}
                  <br />
                  <TypographyText
                    Typography={data.tex2}
                    textAlign="left"
                  />{" "}
                  <br />
                  <TypographyText
                    Typography={data.tex3}
                    fontWeight="400"
                    textAlign="left"
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
                    fontSize=".8rem"
                    textAlign="left"
                  />
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
    tex2: "Event Name",
    tex3: "This is your Service description. Use this space to describe what the service entails, benefits for users and any other important information.",
  },
  {
    backgroundColor: "#DEC5C5",
    tex1: "2 -",
    tex2: "Event Name",
    tex3: "This is your Service description. Use this space to describe what the service entails, benefits for users and any other important information.",
  },
  {
    backgroundColor: "#000000",
    tex1: "3 -",
    tex2: "Event Name",
    tex3: "This is your Service description. Use this space to describe what the service entails, benefits for users and any other important information.",
  },
];

const Data1 = [
  {
    tex1: "12",
    tex2: "September 12 ⏤ 2023",
    tex3: "Top Tech Agencies",
    img: "https://static.wixstatic.com/media/nsplsh_8161352fa7354c74a4b6ad01fd624681~mv2.jpg/v1/fill/w_354,h_234,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/nsplsh_8161352fa7354c74a4b6ad01fd624681~mv2.jpg",
    tex4: "This is your News article. It’s a great place to highlight press coverage, newsworthy stories, industry updates or useful resources for visitors.",
    },
    {
        tex1: "12",
        tex2: "September 12 ⏤ 2023",
        tex3: "Top Tech Agencies",
        img: "https://static.wixstatic.com/media/nsplsh_8161352fa7354c74a4b6ad01fd624681~mv2.jpg/v1/fill/w_354,h_234,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/nsplsh_8161352fa7354c74a4b6ad01fd624681~mv2.jpg",
        tex4: "This is your News article. It’s a great place to highlight press coverage, newsworthy stories, industry updates or useful resources for visitors.",
    },
    {
        tex1: "12",
        tex2: "September 12 ⏤ 2023",
        tex3: "Top Tech Agencies",
        img: "https://static.wixstatic.com/media/nsplsh_8161352fa7354c74a4b6ad01fd624681~mv2.jpg/v1/fill/w_354,h_234,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/nsplsh_8161352fa7354c74a4b6ad01fd624681~mv2.jpg",
        tex4: "This is your News article. It’s a great place to highlight press coverage, newsworthy stories, industry updates or useful resources for visitors.",
    },
    {
        tex1: "12",
        tex2: "September 12 ⏤ 2023",
        tex3: "Top Tech Agencies",
        img: "https://static.wixstatic.com/media/nsplsh_8161352fa7354c74a4b6ad01fd624681~mv2.jpg/v1/fill/w_354,h_234,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/nsplsh_8161352fa7354c74a4b6ad01fd624681~mv2.jpg",
        tex4: "This is your News article. It’s a great place to highlight press coverage, newsworthy stories, industry updates or useful resources for visitors.",
    },
    {
        tex1: "12",
        tex2: "September 12 ⏤ 2023",
        tex3: "Top Tech Agencies",
        img: "https://static.wixstatic.com/media/nsplsh_8161352fa7354c74a4b6ad01fd624681~mv2.jpg/v1/fill/w_354,h_234,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/nsplsh_8161352fa7354c74a4b6ad01fd624681~mv2.jpg",
        tex4: "This is your News article. It’s a great place to highlight press coverage, newsworthy stories, industry updates or useful resources for visitors.",
      },
];
