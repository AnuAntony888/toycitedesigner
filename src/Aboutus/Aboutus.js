import React, { useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Box, CardMedia, Grid } from "@mui/material";
import { TypographyText } from "../Reusable/Reusable";
import abou2 from "../Assets/abou/abou2.jpg";
import abou3 from "../Assets/abou/Header 1.webp";
import desktop from "../Assets/abou/Desktop.webp";
import team from "../Assets/abou/Team Meeting.webp";
import eader11 from "../Assets/abou/Header11.webp";
import banner from "../Assets/About Us.webp";
const Aboutus = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const islargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  useEffect(() => {
    // Scroll to the top of the page on component mount (page load)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      {!isSmallScreen ? (
        <Box sx={{ position: "relative", textAlign: "center" }}>
          <img
            src={banner} // Replace with your image path
            alt="Your Image Alt Text"
            style={{
              width: "100%",
              height: "100vh",

              // opacity: ".8",
            }}
          />
          <Box
            style={{
              position: "absolute",

              top: "50%",
              left: "71%",
              transform: "translate(-29%, -50%)",
            }}
          >
            <TypographyText
              Typography={<>About Us</>}
              fontWeight="400"
              variant={!isSmallScreen ? "h2" : "h4"}
              color="White"
            />

            <br />
            <TypographyText
              Typography={
                <>
                  As a specialized distributor in Saudi Arabia, we transcend
                  conventional'selling' by addressing the unique needs of
                  specialty stores, standalone outlets, and travel retail
                  venues. Our unwavering focus on the Saudimarket drives our
                  success, forging strong partnerships with retailersand
                  securing widespread brand visibility nationwide, resulting in
                  primein-store positioning.
                </>
              }
              textAlign="left"
              color="White"
            />
          </Box>
        </Box>
      ) : (
        <>
          {" "}
          <Box sx={{ position: "relative", textAlign: "center" }}>
            <img
              src={banner} // Replace with your image path
              alt="Your Image Alt Text"
              style={{
                width: "100%",
                height: "100vh",

                opacity: ".8",
              }}
            />
          </Box>
          <TypographyText
            Typography={<>About Us</>}
            fontWeight="400"
            variant={!isSmallScreen ? "h2" : "h4"}
          />
        </>
      )}
      {/********************************************************** */}
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Box sx={{ p: "5%" }}>
            <TypographyText
              Typography={<>7 Years, 6.5 million happy faces and counting</>}
              textAlign="centre"
              color="black"
              fontWeight="400"
              variant={!isSmallScreen ? "h4" : "h5"}
            />
            <br />
            <TypographyText
              Typography={
                <>
                  We have been creating engaging experiences for kids of all
                  ages over the last 7 years, bringing fun and curiosity to over
                  6.5 million young minds. This achievement stems from the
                  invaluable support of our esteemed partners and customers. It
                  marks a milestone toward a brighter and more inspired future
                  as we continue our journey to enrich the lives of children.
                  Our brand portfolio is diverse and spans all key toy
                  categories with favorable strategic placements in all relevant
                  channels, including specialty stores, hypermarkets, book
                  stores, travel retail stores and much more.
                </>
              }
              textAlign="centre"
              color="black"
              fontWeight="400"
              // variant={!isSmallScreen ? "h4" : "h5"}
            />
          </Box>
        </Grid>
        {/************************************ */}
        <Grid item xs={12} lg={7} md={7} sm={12}>
          <Box sx={{ p: "10%" }}>
            <TypographyText
              Typography={
                <>
                  Innovative Retail Strategies and Implementations: Elevating
                  Brand Visibility in Kingdom of Saudi Arabia
                </>
              }
              textAlign="left"
              color="black"
              fontWeight="400"
              variant={!isSmallScreen ? "h4" : "h5"}
            />
            <br />
            <TypographyText
              Typography={
                <>
                  Collaborating with 30+ brands with a distribution network of
                  500 retail outlets, our team excels in introducing
                  international brands to local markets. With seasoned
                  professionals delivering exceptional results across multiple
                  scales, we maintain a high-quality experience. Headquartered
                  in Jeddah, our corporate office houses a dedicated showroom
                  for retail clients, complemented by a robust infrastructure
                  featuring a 1500 sqm warehouse and a comprehensive delivery
                  network across KSA. Our field executives cover major cities,
                  ensuring seamless sales and service in the region. Working
                  alongside a team of proficient professionals who've excelled
                  in sales, operations, and marketing for over 7 years, we offer
                  end-to-end services crafting complete strategies inclusive of
                  ATL and BTL activities, such as merchandising, retail
                  activations, and more!
                </>
              }
              textAlign="justify"
              color="black"
            />
          </Box>
        </Grid>
        <Grid item xs={12} lg={5} md={5} sm={12}>
          {!isSmallScreen ? (
            <div className="image-container">
              <img
                src={abou3}
                alt="First Image"
                className="base-image"
                style={{
                  height: islargeScreen ? "100%" : "640px",
                }}
              />

              <img
                src={desktop} // Replace with your third image URL
                alt="Third Image"
                className="bottom-image"
              />
              <img src={team} alt="Second Image" className="overlay-image" />
            </div>
          ) : (
            <div className="image-container1">
              <img src={eader11} alt="First Image1" className="base-image1" />

              <img
                src={desktop} // Replace with your third image URL
                alt="Third Image1"
                className="bottom-image1"
              />
              <img src={team} alt="Second Image1" className="overlay-image1" />
            </div>
          )}
        </Grid>
        <Grid item xs={12}>
          <img src={abou2} alt="" width={"100%"} height={"100%"} />
        </Grid>
      </Grid>
    </>
  );
};

export default Aboutus;
