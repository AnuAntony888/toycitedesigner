import { Box, Grid } from "@mui/material";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import img1 from "../Assets/UijQ3OR-dark-backgrounds.jpg";
const NewLaunchBanners = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Grid
        container
        spacing={2}
        className="large-header"
        sx={{ minHeight: !isSmallScreen ? "auto" : "auto" }}
      >
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          sx={{
            backgroundImage: `url(https://img.freepik.com/free-photo/floral-composition-with-wildflowers-bottom_23-2147721316.jpg?w=900&t=st=1703684877~exp=1703685477~hmac=7b5e0fccb7e815008100486690047281c499877379d01319507a5c7920145ae3)`,
            backgroundSize: "cover",

            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{ margin: "auto", padding: "8%" }}>
            <img
              src="https://img.freepik.com/free-vector/perfume-promo-background-with-glass-bottle_107791-12305.jpg?w=1380&t=st=1702834830~exp=1702835430~hmac=1297b2922a4d43af25aeb47b512c6e52360fb42e0d12e1481f05fac4c3c52026"
              alt=""
              width={"100%"}
              height={"100%"}
              style={{maxHeight:'500px'}}
            />
          </Box>{" "}
        </Grid>
      </Grid>
    </>
  );
};

export default NewLaunchBanners;
