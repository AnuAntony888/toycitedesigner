import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { TypographyText } from "../Reusable/Reusable";
import { Grid } from "@mui/material";
const Ourclient = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid
      container
      spacing={2}
      sx={{
        //  backgroundImage: `url(${black})`,
        backgroundImage: `url(https://thumbs.dreamstime.com/z/different-perfume-bottles-flowers-white-background-top-view-156217641.jpg?w=1500)`,
        backgroundPosition: "centre",
        backgroundRepeat:'no-repeat',

        pl: "8%",
        pr: "8%",
        pt: "3%",
        pb: "8%",
        height: "auto",
      }}
    >
      <Grid item xs={12}>
        <TypographyText
          Typography={<>Our Clients</>}
          fontWeight="bolder"
          variant={!isSmallScreen ? "h4" : "h4"}
          textAlign="centre"
          color="#4B573F"
        />
        <br />
        <TypographyText
          textAlign="centre"
          color="#231F1E"
          Typography={
            <>
              At Verana Perfume, we are honored to have our signature scents
              embraced by discerning individuals and esteemed clients around the
              world. Our commitment to crafting luxurious and captivating
              fragrances has resonated with those who appreciate the artistry
              and sophistication that defines Verana Perfume.
            </>
          }
        />
      </Grid>
      {data.map((curElem, index) => (
        <Grid
          item
          key={curElem?.banner_id}
          lg={
            index === 0 ||
            index === 6 ||
            index === 3 ||
            index === 9 ||
            index === 12
              ? 4
              : 2
          }
          md={
            index === 0 ||
            index === 6 ||
            index === 3 ||
            index === 9 ||
            index === 12
              ? 4
              : 2.5
          }
          sm={
            index === 0 ||
            index === 6 ||
            index === 3 ||
            index === 9 ||
            index === 12
              ? 7
              : 2.5
          }
          xs={
            index === 0 ||
            index === 6 ||
            index === 3 ||
            index === 9 ||
            index === 12
              ? 12
              : 6
          }
        >
          <img
            alt="familyFitnessBannerImage"
            height="100%"
            src={curElem.image}
            width="100%"
          />
        </Grid>
      ))}
      ;
    </Grid>
  );
};

export default Ourclient;

const data = [
  {
    image:
      "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1697121780.jpg",
  },
  {
    image:
      "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1697121780.jpg",
  },
  {
    image:
      "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1697121780.jpg",
  },
  {
    image:
      "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1697121780.jpg",
  },
  {
    image:
      "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1697121780.jpg",
  },
  {
    image:
      "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1697121780.jpg",
  },
  {
    image:
      "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1697121780.jpg",
  },
  {
    image:
      "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1697121780.jpg",
  },
  {
    image:
      "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1697121780.jpg",
  },
  {
    image:
      "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1697121780.jpg",
  },
  {
    image:
      "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1697121780.jpg",
  },
  {
    image:
      "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1697121780.jpg",
  },
  {
    image:
      "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1697121780.jpg",
  },
];
