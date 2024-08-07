import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { TypographyText } from "../Reusable/Reusable";
const Homesection1 = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Grid container spacing={0}>
        <Grid
          xs={12}
          md={12}
          lg={12}
          sm={12}
          className="large-header"
          sx={{ height: !isSmallScreen ? "100vh" : "100vh" }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "65%",
              left: "25%",
              transform: "translate(-10%, -50%)",
              textAlign: "center",

              zIndex: "1",
            }}
          >
            <div data-aos="fade-up" data-aos-duration="3000">
      
              <TypographyText
                Typography={
                  <>
                    Together,
               
                    Let's Inspire a Child.
                  </>
                }
                color="#fff"
                fontWeight="400"
                variant={!isSmallScreen ? "h2" : "h4"}
              />
            </div>
          </Box>
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: "-1",
            }}
          >
            <source
              // src={video}
              src="https://ik.imagekit.io/f0lwh775f5/Toycity/homepage/video1.mp4?updatedAt=1706766256767"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </Grid>
      </Grid>
    </>
  );
};

export default Homesection1;
