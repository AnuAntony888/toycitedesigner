import { Box, Card, CardActions, CardContent, Grid } from "@mui/material";
import React from "react";
import { TypographyText } from "../Reusable/Reusable";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Slider from "react-slick";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Footer from "../Comp/Footer";
function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <>
      <div
        className="slickbuttonprev"
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        {" "}
        <KeyboardArrowLeftIcon />
      </div>
    </>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="slickbuttonnext" onClick={onClick}>
      <KeyboardArrowRightIcon className="keybordarrow" />
    </div>
  );
}
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
};
const Testmonial = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (<>
    
      {/* <Grid
        container
        spacing={2}
         sx={{ height: !isSmallScreen ? "106vh" : "auto" }}
        className="large-header"
     
      >
        <Grid
          item
          xs={12}
          sx={{
            //  backgroundImage: `url(${black})`,
            backgroundImage: `url(https://img.freepik.com/free-photo/green-plant-twigs-with-little-flowers_23-2148071153.jpg?w=826&t=st=1703686822~exp=1703687422~hmac=02239faacfe8195762dea8374adbe1706b9efdb4784f032d0bd6e6e368dd410d)`,
            objectFit: "cover",

            // height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{ margin: "auto", p: "8%" }}>
            <TypographyText
              Typography={<>Contact Us </>}
              fontWeight="bolder"
              variant={!isSmallScreen ? "h4" : "h5"}
              textAlign="centre"
              color="#4B573F"
            />

            <br />

            
            
          </Box>
        </Grid>
      </Grid> */}
    <Grid
        container
        spacing={2}
        sx={{
          //  backgroundImage: `url(${black})`,
          backgroundImage: `url(https://thumbs.dreamstime.com/z/perfume-bottle-fresh-flower-fragrance-beauty-perfumery-background-121256890.jpg?ct=jpeg)`,
          backgroundPosition: "centre",
backgroundRepeat:'no-repeat',
          pl: "8%",
          pr: "8%",
          pt: "3%",
          pb: "8%",
          height: !isSmallScreen ? "105vh" : "auto",
        }}
      >
        <Grid item xs={12}>
          <TypographyText
            Typography={<>Testimonials</>}
            fontWeight="bolder"
            variant={!isSmallScreen ? "h4" : "h4"}
            textAlign="centre"
            color="#4B573F"
          />
        </Grid>

        <Grid item xs={12}>
          <Slider {...settings} className="slickheight">
            {Data.map((post, index) => (
              <div>
                <Box sx={{ bgcolor: "rgba(251, 227, 132, 0.7)", padding: "5%" }}>
                  <Card sx={{ bgcolor: "transparent", boxShadow: "none" }}>
                    <CardContent>
                      <TypographyText
                        Typography={post.text}
                        textAlign={"centre"}
                        fontSize={"1.2rem"}
                        color="#231F1E"
                        fontWeight='700'
                      />
                    </CardContent>

                    <CardActions sx={{ float: "right" }}>
                      <img src={post.img} alt="logo" width={53} />
                      &nbsp;&nbsp;
                      <TypographyText
                        Typography={post.text1}
                        textAlign={"right"}
                        variant={"h6"}
                        color="#231F1E"
                      />
                    </CardActions>
                  </Card>
                  <TypographyText
                    Typography={post.text2}
                    textAlign={"right"}
                    fontSize=".8rem"
                    color="#231F1E"
                  />
                </Box>
              </div>
            ))}
          </Slider>
        </Grid>
      </Grid> 
 
 </> );
};

export default Testmonial;
const Data = [
  {
    text: (
      <>
        &ldquo;On behalf of my team it is my pleasure to compliment you and your
        team on 10-10 collaboration.
        <br />
        Your teams rapid responses goes a long way in making for a very smooth
        day to day, and thus having a very high internal score card. Keep up the
        great&rdquo;
      </>
    ),
    text1: "Allan Rabie",
    img: "https://www.perfumedirect.com/cdn/shop/articles/Top_7_Luxury_Perfume_Brands_For_Women_and_Their_Best_Scents_BLOG_1024x1024.png?v=1682432203",
    text2: "International Sales Manager",
  },
  {
    text: (
      <>
        &ldquo;You and your team are doing a fantastic job by bringing in the
        right products at the right time, and the customer service is
        consistently doing good, please continue the same&rdquo;
      </>
    ),
    text1: "Nowshar Hussain",
    img: "https://www.perfumedirect.com/cdn/shop/articles/Top_7_Luxury_Perfume_Brands_For_Women_and_Their_Best_Scents_BLOG_1024x1024.png?v=1682432203",
    text2: "International Sales Manager",
  },
  {
    text: (
      <>
        &ldquo;Zuru has been working for 1 year with Toycity and is happy to say
        that we are having a smooth and proactive cooperation towards the same
        goal which is growing the business in Saudi Arabia&rdquo;
      </>
    ),
    text1: "Lorenz Pirlot",
    img: "https://www.perfumedirect.com/cdn/shop/articles/Top_7_Luxury_Perfume_Brands_For_Women_and_Their_Best_Scents_BLOG_1024x1024.png?v=1682432203",
    text2: " Sales and Marketing Manager – International",
  },
  {
    text: (
      <>
        &ldquo;The focused strategy, the determination, the execution, the
        follow up and the follow through, all makes us extremely proud and
        confident the ToyCity with no doubt will be among the top players
        shaping the distribution business in KSA&rdquo;
      </>
    ),
    text1: "Fawaz Abidin",
    img: "https://www.perfumedirect.com/cdn/shop/articles/Top_7_Luxury_Perfume_Brands_For_Women_and_Their_Best_Scents_BLOG_1024x1024.png?v=1682432203",
    text2: "Managing Director",
  },
  {
    text: (
      <>
        &ldquo;Toy City has been a great KSA partner for PINCA. They have great
        relationships with the major retailers and have an excellent
        distribution network. We look forward to a consistent year on year
        growth for our business with Toy City in KSA&rdquo;
      </>
    ),
    text1: "Payal Mirchandani",
    img: "https://www.perfumedirect.com/cdn/shop/articles/Top_7_Luxury_Perfume_Brands_For_Women_and_Their_Best_Scents_BLOG_1024x1024.png?v=1682432203",
    text2: "Managing Director",
  },
  {
    text: (
      <>
        &ldquo;With many moving parts, the ToyCity team was excellent to work
        with and responded in a timely manner in helping to advance the
        project&rdquo;
      </>
    ),
    text1: "Ken Danielsen",
    img: "https://www.perfumedirect.com/cdn/shop/articles/Top_7_Luxury_Perfume_Brands_For_Women_and_Their_Best_Scents_BLOG_1024x1024.png?v=1682432203",
    text2: " International Sales Director",
  },
];

{
  /* <Grid
        container
        spacing={2}
        sx={{
          //  backgroundImage: `url(${black})`,
          backgroundImage: `url(https://thumbs.dreamstime.com/z/pink-perfume-bottle-flowers-light-background-perfumery-cosmetics-fragrance-collection-88181757.jpg?w=992)`,
          backgroundPosition: "centre",

          pl: "8%",
          pr: "8%",
          pt: "3%",
          pb: "8%",
          height: !isSmallScreen ? "105vh" : "auto",
        }}
      >
        <Grid item xs={12}>
          <TypographyText
            Typography={<>Testimonials</>}
            fontWeight="bolder"
            variant={!isSmallScreen ? "h4" : "h4"}
            textAlign="centre"
            color="#fff"
          />
        </Grid>

        <Grid item xs={12}>
          <Slider {...settings} className="slickheight">
            {Data.map((post, index) => (
              <div>
                <Box sx={{ bgcolor: "rgba(0, 0, 0, 0.7)", padding: "5%" }}>
                  <Card sx={{ bgcolor: "transparent", boxShadow: "none" }}>
                    <CardContent>
                      <TypographyText
                        Typography={post.text}
                        textAlign={"centre"}
                        fontSize={"1.2rem"}
                        color="white"
                      />
                    </CardContent>

                    <CardActions sx={{ float: "right" }}>
                      <img src={post.img} alt="logo" width={53} />
                      &nbsp;&nbsp;
                      <TypographyText
                        Typography={post.text1}
                        textAlign={"right"}
                        variant={"h6"}
                        color="#F3CA2A"
                      />
                    </CardActions>
                  </Card>
                  <TypographyText
                    Typography={post.text2}
                    textAlign={"right"}
                    fontSize=".8rem"
                    color="white"
                  />
                </Box>
              </div>
            ))}
          </Slider>
        </Grid>
      </Grid> */
}
