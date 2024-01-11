import { Grid } from "@mui/material";
import React from "react";

import black from "../Assets/pngtree-black-perfume-bottle-on-a-dark-background-picture-image_2687636.jpg";
import { HomeCard, TypographyText } from "../Reusable/Reusable";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Ourvission = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      <Grid
        container
        spacing={4}
        sx={{
          backgroundImage: `url(https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
          p: "8%",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: "centre",
        }}
      >
        <Grid item lg={5} md={4} sm={12} xs={12} margin={"auto"}>
          <img
            src="https://symphonyperfume.com/wp-content/uploads/2023/10/our-mission-new.jpg"
            alt=""
            width={"100%"}
          />
        </Grid>
        <Grid item lg={7} md={8} sm={12} xs={12} margin={"auto"}>
          {/* <div data-aos="fade-right" data-aos-easing="ease-in-sine"> */}
          <TypographyText
            Typography={<>Our Mission</>}
            fontWeight="bolder"
            variant={!isSmallScreen ? "h4" : "h4"}
            textAlign="centre"
            color="#4B573F"
          />

          <TypographyText
            Typography={
              <>
                "At [Your Company Name], our mission is to curate and create
                exceptional fragrances that transcend the ordinary, becoming a
                vital part of the individual's journey of self-expression. We
                are dedicated to delivering unparalleled olfactory experiences,
                blending artistry, science, and a commitment to quality. Our
                perfumes are not just scents; they are the embodiment of
                emotions, memories, and the extraordinary moments that make life
                beautiful."
              </>
            }
            textAlign="left"
            color="#231F1E"
          />
          {/* </div> */}
        </Grid>
        <Grid item lg={7} md={8} sm={12} xs={12} margin={"auto"}>
          {/* <div data-aos="fade-left" data-aos-easing="ease-in-sine"> */}
          <TypographyText
            Typography={<>Our Vission</>}
            fontWeight="bolder"
            variant={!isSmallScreen ? "h4" : "h4"}
            textAlign="centre"
            color="#4B573F"
          />

          <TypographyText
            Typography={
              <>
                Striving for excellence in the world of perfumery, we envision
                [Your Company Name] as a globally recognized brand synonymous
                with innovation, luxury, and environmental responsibility. We
                aspire to be the go-to destination for individuals seeking
                distinctive fragrances that resonate with their unique
                personalities. Our vision includes a commitment to sustainable
                practices, fostering a community that appreciates the artistry
                behind every bottle, and leaving an indelible mark on the
                perfume industry."
                <br /> <br />
                Feel free to tailor these statements to reflect the specific
                values, goals, and identity of your perfume company. It's
                important that your mission and vision resonate with your target
                audience and inspire both your team and customers.
              </>
            }
            textAlign="left"
            color="#231F1E"
          />
          {/* </div> */}
        </Grid>
        <Grid item lg={5} md={4} sm={12} xs={12} margin={"auto"}>
          <img
            src="https://symphonyperfume.com/wp-content/uploads/2023/10/our-values-new.jpg"
            alt=""
            width={"100%"}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Ourvission;
