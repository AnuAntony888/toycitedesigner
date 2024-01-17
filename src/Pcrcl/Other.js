


import React, { useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";
import { TypographyText } from "../Reusable/Reusable";
import { Link } from "react-router-dom";
import pp1 from "../Assets/Pre School/pp1.mp4";
import pp2 from "../Assets/Pre School/GDP.mp4";
import pp3 from "../Assets/Pre School/Clubpetz.mp4";
import img1 from "../Assets/Pre School/PPMM.jpg";
import img2 from "../Assets/Pre School/Giggles.jpg";
import img3 from "../Assets/Pre School/PLAYGO pOSTER-01.jpg";
import img4 from "../Assets/Pre School/PLAYGO pOSTER-01.jpg";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
const Other = () => {
  useEffect(() => {
    // Scroll to the top of the page on component mount (page load)
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const Data = [
    {
      video: '',
      text1: "Bitzee",
      text2:
        "What’s in the box? Introducing Bitzee: the digital pet you can really touch™! Bitzee reacts to your swipes, tilts, shakes and touch. With your love and care, help your pets grow from baby, to adult, to Super Bitzee!!",
    },
    
    ];
    

  const Data1 = [
    {
      img: '',
      text1: "WWF",
      text2:
        "WWF Collection! You don’t have to be a little person to love our WWF luxury super cuddly soft toys – enjoy your very own wild animal at home and support them in the wild.",
    },
    {
      img: '',
      text1: "Bonikka Collection",
      text2:
        "Our beautifully handcrafted soft dolls and rag dolls are created using soft and comforting fabrics, perfect for lots of cuddles and to take away on childhood adventures. They make perfect presents and will encourage imaginative child play which is valuable for learning and development skills.",
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
        <Link to="/LearningArtandCrafts">
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
          to="/Collectibles
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
            justifyContent:"center", alignItems:"center"
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
 
      </Grid>
    </>
  );
};

export default Other;


