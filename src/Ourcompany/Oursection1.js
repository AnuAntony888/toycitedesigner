import { Box, Grid } from "@mui/material";
import React from "react";
import img1 from "../Assets/10f4f06dcbf2a2238ec00ded78d6b68a.jpg";
import { TypographyText } from "../Reusable/Reusable";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import black from "../Assets/wp3428017.jpg";
const Oursection1 = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            backgroundImage: `url(https://img.freepik.com/premium-photo/romantic-dried-flowers-solid-background_972769-1727.jpg?w=900)`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            height: "106vh",
            backgroundRepeat:'no-repeat',
    
          }}
        >
        
          <div data-aos="fade-up">
            <TypographyText
              Typography={<>Our Company</>}
              fontWeight="bolder"
              variant={!isSmallScreen ? "h3" : "h4"}
              textAlign="centre"
              color="#4B573F"
              paddingTop={isSmallScreen ? "100px" : "250px"}
            />
          </div>

        </Grid>
      </Grid>
      {/*************************************** */}
    </>
  );
};

export default Oursection1;
