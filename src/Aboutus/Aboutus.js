import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Box, CardMedia, Grid } from "@mui/material";
import { TypographyText } from "../Reusable/Reusable";

const Aboutus = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={12} lg={6} md={6} sm={12}>
          <Box sx={{ pt: "20%", pl: "10%", pr: "10%" }}>
            <TypographyText
              Typography={<>About Us</>}
              textAlign="left"
              color="black"
              fontWeight="400"
              variant={!isSmallScreen ? "h2" : "h5"}
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
              color="black"
              fontWeight="400"
            />
          </Box>
          <br />         <br />
          <br />
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={12}>
          <img
            src="https://static.wixstatic.com/media/3fff3e_1dea05d193b84810a7ad8efca488e864~mv2.jpg/v1/fill/w_1318,h_789,al_c,q_85,enc_auto/shanghai-aerial-sunset.jpg"
            alt=""
            width={"100%"}
            height={"100%"}
          />
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
                src="https://static.wixstatic.com/media/329129_603e03c6216947f88ccb02b8c6cafca6~mv2.jpg/v1/fill/w_682,h_2160,al_c,q_85,enc_auto/Header%201.jpg"
                alt="First Image"
                className="base-image"
              />

              <img
                src="https://static.wixstatic.com/media/329129_e166826dc9614125863d062fc77989f1~mv2.png/v1/fill/w_876,h_518,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Desktop.png" // Replace with your third image URL
                alt="Third Image"
                className="bottom-image"
              />
              <img
                src="https://static.wixstatic.com/media/11062b_1520e6a9eda64a5483778167ada87f73~mv2.jpg/v1/fill/w_960,h_614,fp_0.63_0.35,q_85,usm_0.66_1.00_0.01,enc_auto/Team%20Meeting.jpg"
                alt="Second Image"
                className="overlay-image"
              />
            </div>
          ) : (
            <div className="image-container1">
              <img
                src="https://static.wixstatic.com/media/329129_603e03c6216947f88ccb02b8c6cafca6~mv2.jpg/v1/fill/w_640,h_660,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Header%201.jpg"
                alt="First Image1"
                className="base-image1"
              />

              <img
                src="https://static.wixstatic.com/media/329129_e166826dc9614125863d062fc77989f1~mv2.png/v1/fill/w_876,h_518,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Desktop.png" // Replace with your third image URL
                alt="Third Image1"
                className="bottom-image1"
              />
              <img
                src="https://static.wixstatic.com/media/11062b_1520e6a9eda64a5483778167ada87f73~mv2.jpg/v1/fill/w_960,h_614,fp_0.63_0.35,q_85,usm_0.66_1.00_0.01,enc_auto/Team%20Meeting.jpg"
                alt="Second Image1"
                className="overlay-image1"
              />
            </div>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Aboutus;
