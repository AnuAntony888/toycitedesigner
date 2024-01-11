import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Box, CardMedia, Grid } from "@mui/material";
import { TypographyText } from "../Reusable/Reusable";

const MajorCategory = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
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
          backgroundImage: `url(https://img.freepik.com/premium-photo/romantic-dried-flowers-solid-background_972769-1539.jpg?w=900)`,
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
            Typography={<>Major Categories</>}
            textAlign="centre"
            color="#4B573F"
            fontWeight="bolder"
            variant={!isSmallScreen ? "h4" : "h5"}
          />
          <br /> <br />
          <Grid container spacing={3}>
            {keybrands.map((curElem, index) => (
              <Grid item key={index} lg={3} md={3} sm={6} xs={6}>
                <CardMedia
                  component="img"
                  image={curElem.img}
                  width="100%"
                  alt=""
                  height="200px"
                  className="image-card"
                />
                <Box
                  sx={{
                    backgroundColor: "rgba(175, 160, 101, 0.7)",
                    backgroundSize: "cover",
                    padding: "10px",
                    marginBottom: "30px",
                  }}
                >
                  <TypographyText
                    textAlign="centre"
                    Typography={curElem.title}
                    color="#231F1E"
                    fontWeight='700'
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MajorCategory;

const keybrands = [
  {
    img: "https://img.perfumerflavorist.com/files/base/allured/all/image/2023/06/AdobeStock_581576468.649447e93b629.png?auto=format%2Ccompress&fit=max&q=70&w=1200",
    title: "ABC",
  },
  {
    img: "https://img.perfumerflavorist.com/files/base/allured/all/image/2023/06/AdobeStock_581576468.649447e93b629.png?auto=format%2Ccompress&fit=max&q=70&w=1200",
    title: "ABC",
  },
  {
    img: "https://img.perfumerflavorist.com/files/base/allured/all/image/2023/06/AdobeStock_581576468.649447e93b629.png?auto=format%2Ccompress&fit=max&q=70&w=1200",
    title: "ABC",
  },
  {
    img: "https://img.perfumerflavorist.com/files/base/allured/all/image/2023/06/AdobeStock_581576468.649447e93b629.png?auto=format%2Ccompress&fit=max&q=70&w=1200",
    title: "ABC",
  },
];
