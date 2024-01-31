import React, { useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Box, Card, CardContent, Grid } from "@mui/material";
import { MetaComponent, TypographyText } from "../Reusable/Reusable";
import { Link } from "react-router-dom";


import img3 from "../Assets/Pre School/WWF.webp";
import img4 from "../Assets/Pre School/Bonikka.webp";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
const Other = () => {
  useEffect(() => {
    // Scroll to the top of the page on component mount (page load)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const islargeScreen = useMediaQuery(theme.breakpoints.down("md"));
  const Data = [
    {
      video: "SPhQIN7iOAo",
      text1: "Bitzee",
      text2:
        "What’s in the box? Introducing Bitzee: the digital pet you can really touch™! Bitzee reacts to your swipes, tilts, shakes and touch. With your love and care, help your pets grow from baby, to adult, to Super Bitzee!!"
    },
  ];

  const Data1 = [
    {
      img: img3,
      text1: "WWF",
      text2:
        "You don’t have to be a little person to love our WWF luxury super cuddly soft toys – enjoy your very own wild animal at home and support them in the wild.",
    },
    {
      img: img4,
      text1: "Bonikka Collection",
      text2:
        "Soft dolls, rag dolls and cloth dolls hand made with beautiful fabrics. Traditional and contemporary dolls that are soft and huggable, safe for babies, toddlers and children. Also comforting empathy dolls for all age groups. A timeless and classic soft toy that will comfort and delight."
    },
  ];

  return (
    <>
      <MetaComponent dynamicTitle="Toycity - Other " />
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
        <br />
        <br />
        <br />
        <br />
        <Link to="/learningartandcrafts">
          <WestIcon
            sx={{
              width: isSmallScreen ? "1em" : "2em",
              height: isSmallScreen ? "1em" : "2em",
            }}
          />
        </Link>{" "}
        <TypographyText
          Typography={<>Other</>}
          textAlign="centre"
          color="black"
          fontWeight="400"
          variant={!isSmallScreen ? "h2" : "h5"}
        />
        <Link
          to="/pre-school
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
              <Card sx={{ width: "100%", boxShadow: "none" }}>
                <img
                  src={curelem.img}
                  alt=""
                  width={"100%"}
                  height={"auto"}
                  loading="lazy"
                />
                <CardContent sx={{ height: !isSmallScreen ? "250px" : "auto" }}>
                  <TypographyText
                    Typography={curelem.text1}
                    fontWeight="400"
                    variant={!isSmallScreen ? "h5" : "h5"}
                  />

                  <TypographyText Typography={curelem.text2} fontSize=".9rem" />
                </CardContent>
              </Card>
            </Grid>
          </>
        ))}
      </Grid>
      <Grid
        container
        spacing={5}
        sx={{
          pl: !isSmallScreen ? "20%" : "14%",
          pr: !isSmallScreen ? "20%" : "14%",

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
                  style={{ pointerEvents: "none" }}
                ></iframe>
              </div>
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

export default Other;
