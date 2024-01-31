import React, { useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";
import { MetaComponent, TypographyText } from "../Reusable/Reusable";
import { Link } from "react-router-dom";

import img1 from "../Assets/Pre School/Cosmetics Twinkle.webp";
import img2 from "../Assets/Pre School/Cosmetics.webp";

import img4 from "../Assets/Pre School/Cosmetics Shush.webp";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
const Cosmetics = () => {
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
      video: "EBd0ltL_oX8",
      text1: "Townley",
      text2:
        "Explore a world of beauty and fun with Townley Girl, the captivating kids' cosmetics brand at Toycity. Offering a kaleidoscope of colors and safe formulations, Townley Girl lets young imaginations shine, transforming playtime into a vibrant and magical experience.",
    },
  ];

  const Data1 = [
    {
      img: img1,
      text1: "Twinkle Twinkle",
      text2:
        "Experience boundless enjoyment with our Twinkle Twinkle Nail Polish Deluxe Set, featuring a lively and safe assortment of nail hues that are ideal for playdates and imaginative escapades. These kid-friendly nail polishes are simple to put on and easy to remove, guaranteeing a carefree and colorful journey for your young ones. Prepare for countless hours of imaginative nail art with our highly-rated, secure, and exhilarating nail polish collection designed for children!",
    },
    {
      img: img2,
      text1: "Hot Focus",
      text2:
      <><br/>
      Shush, the delightful kids' cosmetics collection that whispers fun and imagination into playtime. Featuring safe and colorful formulations, Shush lets little ones express their creativity with a hush of excitement, making every moment enchanting.
      <br/><br/> <br/><br/><br/> </>
    },
  ];
  const Data2 = [
    {
      img: img4,
      text1: "Shush!",
      text2:
       "Encourage your little one's imagination with this Fruitopia Nail Polish set. Let them express themselves through dazzling nail designs that will leave them feeling like budding artists. The Shush! Fruitopia Water Nail Polish Set is a peel-off, water based nail polish formulated specifically for kids, ensuring hassle-free application and easy cleanup."
    },
  ];
  return (
    <>
      <MetaComponent dynamicTitle="Toycity - Cosmetics " />
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
        <Link to="/rctoys">
          <WestIcon
            sx={{
              width: isSmallScreen ? "1em" : "2em",
              height: isSmallScreen ? "1em" : "2em",
            }}
          />
        </Link>{" "}
        <TypographyText
          Typography={<>Cosmetics</>}
          textAlign="centre"
          color="black"
          fontWeight="400"
          variant={!isSmallScreen ? "h2" : "h5"}
        />
        <Link
          to="/learningartandcrafts
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
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {Data1.map((curelem, index) => (
          <>
            <Grid item xs={12} lg={6} md={6} sm={12} key={index}>
              <img src={curelem.img} alt="" width={"100%"} height={"auto"} />
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
        {Data.map((curelem, index) => (
          <>
            <Grid item xs={12} lg={12} md={12} sm={12} key={index}>
              {/* <video
                autoPlay
                loop
                muted
                playsInline
                style={{ width: "100%", height: "100%" }}
              >
                <source src={curelem.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
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
        {Data2.map((curelem, index) => (
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

export default Cosmetics;
