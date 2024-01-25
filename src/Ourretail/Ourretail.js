import React, { useEffect, useState } from "react";
import { MetaComponent, TypographyText } from "../Reusable/Reusable";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Card, CardContent, CardMedia, Grid, Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import img1 from "../Assets/logo/special partners/al musbah.jpg";
import img2 from "../Assets/logo/special partners/baby island.jpg";
import img3 from "../Assets/logo/special partners/babyshop.jpg";
import img4 from "../Assets/logo/special partners/bindawood.jpg";
import img5 from "../Assets/logo/special partners/claires.jpg";
import img6 from "../Assets/logo/special partners/danube.jpg";
import img7 from "../Assets/logo/special partners/elc.jpg";
import img8 from "../Assets/logo/special partners/hk kids.jpg";
import img9 from "../Assets/logo/special partners/jarir.jpg";
import img10 from "../Assets/logo/special partners/mothercare.jpg";
import img11 from "../Assets/logo/special partners/nandi.jpg";
import img12 from "../Assets/logo/special partners/nandi.jpg";
import img13 from "../Assets/logo/special partners/new yr.jpg";
import re1 from "../Assets/logo/retail/al musbah.jpg";
import re2 from "../Assets/logo/retail/catering.jpg";
import re3 from "../Assets/logo/retail/chalhoub.jpg";
import re4 from "../Assets/logo/retail/flyadeal.jpg";
import re5 from "../Assets/logo/retail/flynaas.jpg";
import re6 from "../Assets/logo/retail/lagardere.jpg";
import re7 from "../Assets/logo/retail/saudia.jpg";
import on1 from "../Assets/logo/online/amazon.jpg";
import on4 from "../Assets/logo/online/land mark.jpg";
import on2 from "../Assets/logo/online/dabdoob.jpg";
import on3 from "../Assets/logo/online/firstcry.jpg";
import on5 from "../Assets/logo/online/mumzworld.jpg";
import banner from "../Assets/Retail Partners (1).webp";
import banner1 from "../Assets/3.webp";
import "aos/dist/aos.css";
import AOS from "aos";
const Ourretail = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  useEffect(() => {
    // Scroll to the top of the page on component mount (page load)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  React.useEffect(() => {
    AOS.init({
      // Global settings here
      duration: 100,
    });
  }, []);
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };
  // console.log(loading,"loading")
  return (
    <div>
       < MetaComponent dynamicTitle="Toycity - Our Retail Partners"  />
      {!isSmallScreen ? (
        <Box sx={{ position: "relative", textAlign: "center" }}>
          <img
            src={banner} // Replace with your image path
            alt="Your Image Alt Text"
            loading="lazy"
            style={{
              width: "100%",
              height: "100vh",
            }}
         
          />
          <Box
            style={{
              position: "absolute",

              top: "50%",
              left: "45%",
              transform: "translate(-10%, -50%)",
            }}
          >
            <TypographyText
              Typography={<>Our Retail Partners</>}
              fontWeight="400"
              variant={!isSmallScreen ? "h2" : "h4"}
              color="#fff"
            />

            <br />
            <TypographyText
              textAlign="justify"
              color="#fff"
              Typography={
                <>
                  Toycity, a leading toy distribution company, proudly
                  collaborates with an extensive network of retail partners to
                  bring joy and excitement to children of all ages. Our retail
                  partners range from local independent toy stores to well-known
                  national chains, creating a diverse and widespread presence
                  for Toycity products. Through these valued partnerships, we
                  ensure that our innovative and high-quality toys reach every
                  corner of the market, providing families with access to the
                  latest and most beloved playthings. By working closely with
                  our retail partners, Toycity is committed to fostering a
                  vibrant and engaging toy-shopping experience, making playtime
                  memorable for children everywhere.
                </>
              }
            />
          </Box>
        </Box>
      ) : (
        <>
          {" "}
          <Box sx={{ position: "relative", textAlign: "center" }}>
            <img
              src={banner1} // Replace with your image path
              alt="Your Image Alt Text"
              style={{
                width: "100%",
                height: "100vh",
                }}
                loading='lazy'
            />

            <Box
              style={{
                position: "absolute",

                top: "25%",
                left: "15%",
                transform: "translate(-10%, -50%)",
              }}
            >
              <TypographyText
                Typography={<> Retail Partners</>}
                fontWeight="400"
                variant={!isSmallScreen ? "h2" : "h4"}
                color="White"
              />

              <br />
            </Box>
          </Box>
            <br />
            <Box sx={{p:'8%'}}>
          <TypographyText
            textAlign="justify"
           Typography={
              <>
                Toycity, a leading toy distribution company, proudly
                collaborates with an extensive network of retail partners to
                bring joy and excitement to children of all ages. Our retail
                partners range from local independent toy stores to well-known
                national chains, creating a diverse and widespread presence for
                Toycity products. Through these valued partnerships, we ensure
                that our innovative and high-quality toys reach every corner of
                the market, providing families with access to the latest and
                most beloved playthings. By working closely with our retail
                partners, Toycity is committed to fostering a vibrant and
                engaging toy-shopping experience, making playtime memorable for
                children everywhere.
              </>
            }
              />
              </Box>
        </>
      )}

      {Datas.map((curelem, index) => (
        <Box sx={{ pt: "2%" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center", // Center vertically
              justifyContent: "center", // Center horizontally
              margin: "auto",
              p: "1%",
            }}
          >
            {" "}
            <div data-aos="fade-up">
              <TypographyText
                Typography={curelem.content}
                textAlign="centre"
                color="black"
                fontWeight="400"
                variant={!isSmallScreen ? "h4" : "h5"}
              />
            </div>
          </Box>

          <Grid
            container
            spacing={2}
            sx={{
              pl: !isSmallScreen ? "10%" : "14%",
              pr: !isSmallScreen ? "10%" : "14%",
              pt: "6%",
              pb: "5%",
              justifyContent: "center",
            }}
          >
            {curelem.Data1 &&
              curelem.Data1.map((curelem) => (
                <>
                  <Grid item xs={3} lg={2} md={2} sm={4} key={index}>
                    <Card
                      sx={{ margin: "auto", padding: "5%", bgcolor: "white" }}
                    >
                      {loading && (
                        <Skeleton
                          variant="rectangular"
                          width={100}
                          height={100}
                        />
                      )}
                      <img
                        src={curelem.img}
                        alt=""
                        width={"100%"}
                        onLoad={handleImageLoad} 
                        loading="lazy"
                        style={{visibility:loading? "hidden" : "visible"}}
                      />
                    </Card>
                  </Grid>
                </>
              ))}
          </Grid>
        </Box>
      ))}
    </div>
  );
};

export default Ourretail;
const Datas = [
  {
    content: "Speciality Partners",
    Data1: [
      { img: img1 },
      { img: img2 },
      { img: img3 },
      { img: img4 },
      { img: img5 },
      { img: img6 },
      { img: img7 },
      { img: img8 },
      { img: img9 },
      { img: img10 },
      { img: img11 },
      { img: img12 },
      { img: img13 },
    ],
  },
  {
    content: "Travel Retail/ In-flight & On-board Sales",
    Data1: [
      { img: re1 },
      { img: re2 },
      { img: re3 },
      { img: re4 },
      { img: re5 },
      { img: re6 },
      { img: re7 },
    ],
  },
  {
    content: "Online Stores",
    Data1: [
      { img: on1 },
      { img: on2 },
      { img: on3 },
      { img: on4 },
      { img: on5 },
    ],
  },
];
