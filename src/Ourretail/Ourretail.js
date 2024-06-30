import React, { useEffect, useState } from "react";
import { MetaComponent, TypographyText } from "../Reusable/Reusable";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Card, CardContent, CardMedia, Grid, Skeleton } from "@mui/material";
import { Box } from "@mui/system";

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

    });
  }, []);
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };
  // console.log(loading,"loading")
  return (
    <div>
      <MetaComponent dynamicTitle="Toycity - Our Retail Partners" />
      {!isSmallScreen ? (
        <Box sx={{ position: "relative", textAlign: "center" }}>
          <img
            src={
              "https://ik.imagekit.io/jlco9jzsq/toycity/Retail%20Partners%20(1).webp?updatedAt=1706186592547"
            } // Replace with your image path
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
              src={
                "https://ik.imagekit.io/jlco9jzsq/toycity/3.webp?updatedAt=1706186538323"
              } // Replace with your image path
              alt="Your Image Alt Text"
              style={{
                width: "100%",
                height: "100vh",
              }}
              loading="lazy"
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
          <Box sx={{ p: "8%" }}>
            <TypographyText
              textAlign="justify"
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
                        style={{ visibility: loading ? "hidden" : "visible" }}
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
      { img: 'https://ik.imagekit.io/f0lwh775f5/Toycity/special%20partners/al%20musbah.jpg?updatedAt=1706762386561' },
      { img: 'https://ik.imagekit.io/f0lwh775f5/Toycity/special%20partners/baby%20island.jpg?updatedAt=1706762387727' },
      { img: 'https://ik.imagekit.io/f0lwh775f5/Toycity/special%20partners/babyshop.jpg?updatedAt=1706762387114' },
      { img: 'https://ik.imagekit.io/f0lwh775f5/Toycity/special%20partners/bindawood.jpg?updatedAt=1706762387015' },
      { img: 'https://ik.imagekit.io/f0lwh775f5/Toycity/special%20partners/claires.jpg?updatedAt=1706762386739' },
      { img: 'https://ik.imagekit.io/f0lwh775f5/Toycity/special%20partners/danube.jpg?updatedAt=1706762386866' },
      { img: 'https://ik.imagekit.io/f0lwh775f5/Toycity/special%20partners/elc.jpg?updatedAt=1706762388235' },
      { img: 'https://ik.imagekit.io/f0lwh775f5/Toycity/special%20partners/hk%20kids.jpg?updatedAt=1706762387618' },
      { img: 'https://ik.imagekit.io/f0lwh775f5/Toycity/special%20partners/jarir.jpg?updatedAt=1706762387366' },
      { img: 'https://ik.imagekit.io/f0lwh775f5/Toycity/special%20partners/mothercare.jpg?updatedAt=1706762387901'},
      { img: 'https://ik.imagekit.io/f0lwh775f5/Toycity/special%20partners/r&b.jpg?updatedAt=1706762395093' },
      { img: 'https://ik.imagekit.io/f0lwh775f5/Toycity/special%20partners/nandi.jpg?updatedAt=1706762393279' },
      { img: 'https://ik.imagekit.io/f0lwh775f5/Toycity/special%20partners/new%20yr.jpg?updatedAt=1706762393775' },
      { img: 'https://ik.imagekit.io/f0lwh775f5/Toycity/special%20partners/squiggles.jpg?updatedAt=1706762396159'},
      { img: 'https://ik.imagekit.io/f0lwh775f5/Toycity/special%20partners/storybabe.jpg?updatedAt=1706762396279' },
      { img: 'https://ik.imagekit.io/f0lwh775f5/Toycity/special%20partners/toysrus.jpg?updatedAt=1706762399574' },
      { img: 'https://ik.imagekit.io/f0lwh775f5/Toycity/special%20partners/toyland.jpg?updatedAt=1706762399307' },
      { img: 'https://ik.imagekit.io/f0lwh775f5/Toycity/special%20partners/toyslab.jpg?updatedAt=1706762399876' },
      { img: 'https://ik.imagekit.io/f0lwh775f5/Toycity/special%20partners/virgin.jpg?updatedAt=1706762400584' },
      { img: 'https://ik.imagekit.io/f0lwh775f5/Toycity/special%20partners/whsmith.jpg?updatedAt=1706762402816'},
    ],
  },
  {
    content: "Travel Retail/ In-flight & On-board Sales",
    Data1: [
      { img: 'https://ik.imagekit.io/f0lwh775f5/Toycity/retail/chalhoub.jpg?updatedAt=1706762438048' },
      { img: 'https://ik.imagekit.io/f0lwh775f5/Toycity/retail/flyadeal.jpg?updatedAt=1706762437815' },
      { img: 'https://ik.imagekit.io/f0lwh775f5/Toycity/retail/flynaas.jpg?updatedAt=1706762437819' },
      { img: 'https://ik.imagekit.io/f0lwh775f5/Toycity/retail/saudia.jpg?updatedAt=1706762437788' },
      { img: 'https://ik.imagekit.io/f0lwh775f5/Toycity/retail/catering.jpg?updatedAt=1706762437753' },
      { img: 'https://ik.imagekit.io/f0lwh775f5/Toycity/retail/lagardere.jpg?updatedAt=1706762437390' },
      { img: 'https://ik.imagekit.io/f0lwh775f5/Toycity/retail/al%20musbah.jpg?updatedAt=1706762437143'},
    ],
  },
  {
    content: "Online Stores",
    Data1: [
      { img:'https://ik.imagekit.io/f0lwh775f5/Toycity/online/firstcry.jpg?updatedAt=1706762201189'},
      { img: 'https://ik.imagekit.io/f0lwh775f5/Toycity/online/dabdoob.jpg?updatedAt=1706762201156' },
      { img: 'https://ik.imagekit.io/f0lwh775f5/Toycity/online/land%20mark.jpg?updatedAt=1706762200701' },
      { img: 'https://ik.imagekit.io/f0lwh775f5/Toycity/online/amazon.jpg?updatedAt=1706762200667' },
      { img: 'https://ik.imagekit.io/f0lwh775f5/Toycity/online/mumzworld.jpg?updatedAt=1706762200352' },
    ],
  },
];
// import img1 from "../Assets/logo/special partners/al musbah.jpg";
// import img2 from "../Assets/logo/special partners/baby island.jpg";
// import img3 from "../Assets/logo/special partners/babyshop.jpg";
// import img4 from "../Assets/logo/special partners/bindawood.jpg";
// import img5 from "../Assets/logo/special partners/claires.jpg";
// import img6 from "../Assets/logo/special partners/danube.jpg";
// import img7 from "../Assets/logo/special partners/elc.jpg";
// import img8 from "../Assets/logo/special partners/hk kids.jpg";
// import img9 from "../Assets/logo/special partners/jarir.jpg";
// import img10 from "../Assets/logo/special partners/mothercare.jpg";
// import img11 from "../Assets/logo/special partners/r&b.jpg";
// import img12 from "../Assets/logo/special partners/nandi.jpg";
// import img13 from "../Assets/logo/special partners/new yr.jpg";
// import img14 from "../Assets/logo/special partners/danube.jpg";
// import img15 from "../Assets/logo/special partners/toysrus.jpg";
// import img16 from "../Assets/logo/special partners/virgin.jpg";
// import img17 from "../Assets/logo/special partners/toyslab.jpg";
// import img18 from "../Assets/logo/special partners/whsmith.jpg";
// import img19 from "../Assets/logo/special partners/squiggles.jpg";
// import img20 from "../Assets/logo/special partners/toy suprise.jpg";
// import re1 from "../Assets/logo/retail/al musbah.jpg";
// import re2 from "../Assets/logo/retail/catering.jpg";
// import re3 from "../Assets/logo/retail/chalhoub.jpg";
// import re4 from "../Assets/logo/retail/flyadeal.jpg";
// import re5 from "../Assets/logo/retail/flynaas.jpg";
// import re6 from "../Assets/logo/retail/lagardere.jpg";
// import re7 from "../Assets/logo/retail/saudia.jpg";
// import on1 from "../Assets/logo/online/amazon.jpg";
// import on4 from "../Assets/logo/online/land mark.jpg";
// import on2 from "../Assets/logo/online/dabdoob.jpg";
// import on3 from "../Assets/logo/online/firstcry.jpg";
// import on5 from "../Assets/logo/online/mumzworld.jpg";
// import banner from "../Assets/Retail Partners (1).webp";
// import banner1 from "../Assets/3.webp";