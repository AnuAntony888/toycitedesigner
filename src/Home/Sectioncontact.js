import { Box, Grid } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import black from "../Assets/vase-with-roses-near-twig_23-2147811227.jpg";
import { TypographyText } from "../Reusable/Reusable";
import Footer from "../Comp/Footer";
const Sectioncontact = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{ height: !isSmallScreen ? "105vh" : "auto" }}
        className="large-header"
      >
        <Grid
          item
          xs={12}
          sx={{
            //  backgroundImage: `url(${black})`,
            backgroundImage: `url(https://images.pexels.com/photos/1261168/pexels-photo-1261168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
            objectFit: "cover",
backgroundRepeat:'no-repeat',
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{ margin: "auto",p:'8%' }}>
          
            <TypographyText
              Typography={<>Contact Us </>}
              fontWeight="bolder"
              variant={!isSmallScreen ? "h4" : "h5"}
              textAlign="centre"
              color="#4B573F"
            />
   
            <br />
           
            <TypographyText
              Typography={
                <>
                  At [Your Perfume Company], we're here to assist you on your
                  fragrance journey. For inquiries, personalized
                  recommendations, or any assistance you may need, reach out to
                  us at info@yourperfumecompany.com. Prefer a chat? Call us at
                  [+your phone number] during business hours. Your olfactory
                  adventure awaits!
                </>
              }
              textAlign="left"
              color="#231F1E"
              fontSize="1.1rem"
            />
          
          </Box>
        </Grid>
      </Grid>
           <Footer/>
    </div>
  );
};

export default Sectioncontact;
