
import React, { useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";
import { MetaComponent, TypographyText } from "../Reusable/Reusable";
import { Link } from "react-router-dom";

import pp1 from '../Assets/Pre School/spain.mp4'
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
const Learning = () => {
  const theme = useTheme();
  useEffect(() => {
    // Scroll to the top of the page on component mount (page load)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const Data = [
    {
      video: 'zwg1eBtXiUQ',
      text1: "Rubik's Cube",
      text2:
        "The Rubik's Cube is the world’s most successful toy, selling hundreds of millions of units, and inspiring and challenging both young and old for over 40 years. As a STEM-accredited puzzle, the Rubik's Cube nurtures smarter future generations through play. Are you up for the Challenge?"
    },
    {
      video: 'ia972T660Yg',
      text1: "Kinetic Sand",
      text2:
        " The original squeezable sand that is so oddly satisfying, you can’t put it down! Made with natural sand, Kinetic Sand magically sticks together and never dries out. So you can create again, and again, and again!"
    }]
    const Datas=[
    // {
    //   video: 'img3',
    //   text1: "Spin Master Games: Cardinal Games",
    //   text2:
    //     "Whether you’re entertaining the kids or adult friends, we’ve got great games to make your time together fun and memorable.",
    // },

    {
        video: 'HMeB_Tegd5Q',
        text1: "Etch A Sketch",
      text2:
     " It’s the one and only Etch A Sketch, the classic drawing toy that’s been challenging artists with its magic and mystery since 1960! Use the knobs to create anything your imagination dreams up, then give it a shake, shake, shake to erase and start all over again. "

    },
    {
      video: 'WupUz-lmuPI',
      text1: "Cool Maker",
      text2:
        "Cool Maker is the DIY brand that lets you create and customize your style! Whether you’re stamping matching mani-pedis with your bffs or spinning up cute friendship bracelets, Cool Maker lets you switch, switch, switch it up to style cool looks that are totally you!",
    },
  ];

  return (
    <>
      < MetaComponent dynamicTitle="Toycity - Learning, Art & Crafts "  />
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
        <br /> <br /> <br /> <br />
        <Link to="/cosmetics">
          <WestIcon
            sx={{
              width: isSmallScreen ? "1em" : "2em",
              height: isSmallScreen ? "1em" : "2em",
            }}
          />
        </Link>{" "}
        <TypographyText
          Typography={<>Learning, Art & Crafts</>}
          textAlign="center"
          color="black"
          fontWeight="400"
          variant={!isSmallScreen ? "h2" : "h5"}
        />
        <Link to="/other">
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
          justifyContent: "center",
          alignItems: "center",
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
        style={{pointerEvents: 'none'}}
    ></iframe>
</div>
<br/><br/>
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
            <source src='https://ik.imagekit.io/f0lwh775f5/Toycity/Pre%20School/spain.mp4?updatedAt=1706762522272' type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <br />
          <br />
        </Grid>

        <Grid item xs={12} lg={12} md={12} sm={12}>
          <TypographyText
            Typography="Spin Master Games: Cardinal Games"
            fontWeight="400"
            variant={!isSmallScreen ? "h5" : "h5"}
          />
          <br />
          <TypographyText
            Typography="Whether you’re entertaining the kids or adult friends, we’ve got great games to make your time together fun and memorable"
            textAlign="center"
            fontWeight="400"
          />
          <br /> <br />
        </Grid>
        {Datas.map((curelem, index) => (
          <>
            <Grid item xs={12} lg={12} md={12} sm={12} key={index}>
          
              <div class="responsive-container">
    <iframe 
        class="responsive-iframe"
        src={`https://www.youtube.com/embed/${curelem.video}?autoplay=1&controls=0&mute=1&loop=1&playlist=${curelem.video}`} 
        frameborder="0" 
        style={{pointerEvents: 'none'}}
    ></iframe>
</div>
<br/><br/>
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
      </Grid>
    </>
  );
};

export default Learning;
