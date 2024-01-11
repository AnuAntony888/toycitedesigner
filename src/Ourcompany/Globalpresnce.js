import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid } from "@mui/material";
import { TypographyText } from "../Reusable/Reusable";
import black from '../Assets/pexels-jay-jay-redelinghuys-8724474.jpg'
const Globalpresnce = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
           backgroundImage: `url(${black})`,
          //  backgroundImage: `url()`,
        
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
padding:'8%',
          height: !isSmallScreen ? "105vh" : "auto",
        }}
      >
        <Grid item xs={12}>
          <TypographyText
            Typography={<>Global Presence</>}
            fontWeight="bolder"
            variant={!isSmallScreen ? "h4" : "h4"}
            textAlign="centre"
            color="#4B573F"
          />
        </Grid>
        {Data.map((post, index) => (
          <Grid lg={3} md={3} sm={6} xs={12} key={index}>
            <img src={post.img} alt="logo" width={"100%"} />

            <TypographyText
              Typography={post.text2}
              fontSize="1.25rem"
              fontWeight="bolder"
              color="#231F1E"
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Globalpresnce;
const Data = [
  {
    img: "https://www.pngall.com/wp-content/uploads/12/USA-Map-PNG-Photo.png",
    text2: "USA",
  },
  {
    img: "https://www.pngall.com/wp-content/uploads/12/USA-Map-PNG-Photo.png",
    text2: "USA",
  },
  {
    img: "https://www.pngall.com/wp-content/uploads/12/USA-Map-PNG-Photo.png",
    text2: "USA",
  },
  {
    img: "https://www.pngall.com/wp-content/uploads/12/USA-Map-PNG-Photo.png",
    text2: "USA",
  },
];
