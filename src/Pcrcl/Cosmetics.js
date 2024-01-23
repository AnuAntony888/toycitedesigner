import React, { useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";
import { TypographyText } from "../Reusable/Reusable";
import { Link } from "react-router-dom";

import img1 from "../Assets/Pre School/Cosmetics Twinkle.webp";
import img2 from "../Assets/Pre School/Cosmetics.webp";
import img3 from "../Assets/Pre School/cosemetic.mp4";
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
      video: img3,
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
        "Twinkle Twinkle, the enchanting kids' cosmetics line at Toycity, adds a touch of magic to playtime. With vibrant colors and gentle formulas, these cosmetics are specially designed for little ones to explore their creativity and sparkle with joy.",
    },
    {
      img: img2,
      text1: "Hot Focus",
      text2:
        "Shush, the delightful kids' cosmetics collection with us, whispers fun and imagination into playtime. Featuring safe and colorful formulations, Shush lets little ones express their creativity with a hush of excitement, making every moment enchanting.",
    },
  ];
  const Data2 = [
    {
      img: img4,
      text1: "Shush!",
      text2:
        "Specially crafted for little stars, these kits offer a playful blend of safe, vibrant cosmetics, allowing kids to embrace their inner sparkle in the most delightful way.",
    },
  ];
  return (
    <>
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
        <Link to="/RCToys">
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
          to="/LearningArtandCrafts
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
          <div style={{ padding: "5%" }}>
            <Grid item xs={12} lg={12} md={12} sm={12} key={index}>
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{ width: "100%", height: "100%" }}
              >
                <source src={curelem.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
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
          </div>
        ))}
        {Data2.map((curelem, index) => (
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
      </Grid>
    </>
  );
};

export default Cosmetics;
