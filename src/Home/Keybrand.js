import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Box, CardMedia, Grid } from "@mui/material";
import { TypographyText } from "../Reusable/Reusable";
import img1 from '../Assets/pexels-guillaume-pierre-leroy-11417443 (1).jpg'

const Keybrand = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Grid
        container
        spacing={0}
        className="large-header"
        sx={{ height: !isSmallScreen ? "105vh" : "auto" }}
      >
        <Grid
          item
          xs={12}
          sx={{
       
            backgroundImage: `url(https://img.freepik.com/free-vector/blank-floral-shimmering-wallpaper_53876-112102.jpg?w=900&t=st=1703683980~exp=1703684580~hmac=6e0ae824c082ecbf7f66c905fa6c582f70fd79b44feae18766ad6b7cb72557cc)`,
            height: "100%",
            display: "flex",
            backgroundSize: "100%",
            backgroundPosition: "centre",
            backgroundRepeat:'no-repeat',
  
            objectFit: "cover",
          }}
        >
          <Box sx={{ margin: "auto", p: "7%" }}>
            <TypographyText
              Typography={<>Key Brands</>}
              textAlign="centre"
              color="#4B573F"
              fontWeight="bolder"
              variant={!isSmallScreen ? "h4" : "h5"}
            />
  <br />    <br />
            <Grid container spacing={3}>
              {keybrands.map((curElem, index) => (
                <Grid item key={index} lg={2} md={3} sm={4} xs={6}>
                  <CardMedia
                    component="img"
                    image={curElem.img}
                    width="100%"
                    alt=""
                    height="200px"
                    className="image-card"
                    sx={{ borderRadius: "20px" }}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Keybrand;

const keybrands = [
  {
    img: "https://images.unsplash.com/photo-1615160460524-432433ba1b8f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    img: "https://images.unsplash.com/photo-1615160460524-432433ba1b8f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    img: "https://images.unsplash.com/photo-1615160460524-432433ba1b8f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    img: "https://images.unsplash.com/photo-1615160460524-432433ba1b8f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    img: "https://images.unsplash.com/photo-1615160460524-432433ba1b8f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    img: "https://images.unsplash.com/photo-1615160460524-432433ba1b8f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    img: "https://images.unsplash.com/photo-1615160460524-432433ba1b8f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    img: "https://images.unsplash.com/photo-1615160460524-432433ba1b8f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    img: "https://images.unsplash.com/photo-1615160460524-432433ba1b8f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    img: "https://images.unsplash.com/photo-1615160460524-432433ba1b8f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];