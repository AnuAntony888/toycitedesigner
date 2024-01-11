import { Box, CardMedia, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { HomeCard, QualityCard, TypographyText } from "../Reusable/Reusable";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import bgprivat from '../Assets/pexels-jay-jay-redelinghuys-8724474.jpg'
const Privsection1 = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen1 = useMediaQuery(theme.breakpoints.down("xl"));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <main>
        <section>
          <Grid container>
            <Grid item xs={12}>
              <Box
                sx={{
                  backgroundImage: `url(https://thumbs.dreamstime.com/z/elegant-bottle-perfume-flowers-light-stone-background-space-text-162604170.jpg?ct=jpeg)`,
                  backgroundSize: "cover",
                  // backgroundPosition: "bottom",
                  height: "105vh",
                  backgroundRepeat:'no-repeat'
                  // minHeight: !isSmallScreen ? "105vh" : "auto",
                }}
              >
                <div data-aos="fade-up">
                  <TypographyText
                    Typography={<>Private Labelling</>}
                    fontWeight="bolder"
                    variant={!isSmallScreen ? "h3" : "h4"}
                    textAlign="centre"
                    color="#4B573F"
                    paddingTop={isSmallScreen ? "100px" : "250px"}
                  />
                </div>
              </Box>
            </Grid>
          </Grid>
        </section>

        <section>
          <Grid
            container
            spacing={2}
            sx={{
              //  backgroundImage: `url(${black})`,
              backgroundImage: `url(https://images.pexels.com/photos/6045429/pexels-photo-6045429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
              backgroundPosition: "centre",

              pl: "8%",
              pr: "8%",
              pt: "8%",
              pb: "8%",
            }}
          >
            <Grid item xs={12}>
              <TypographyText
                Typography={<>Tailor-Made Fragrances-Process</>}
                fontWeight="bolder"
                variant={!isSmallScreen ? "h4" : "h4"}
                textAlign="centre"
                color="#4B573F"
              />
              <br />
              <TypographyText
                Typography={
                  <>
                    Verno Perfume specializes in the art of crafting
                    personalized fragrances that resonate with individual tastes
                    and preferences. With an unwavering commitment to
                    uniqueness, Verno Perfume offers a bespoke olfactory
                    experience, allowing customers to embark on a sensory
                    journey tailored to their distinct personality and style.
                    The process begins with a consultation, where skilled
                    perfumers engage in a dialogue to understand the client's
                    olfactory inclinations and desired emotions. Drawing from an
                    extensive palette of rare and exquisite ingredients, Verno
                    Perfume artisans meticulously blend scents to create a
                    signature fragrance that captures the essence of the wearer.
                    From the top notes that make the first impression to the
                    lingering base notes that leave a lasting impression, each
                    Verno creation is a masterpiece, reflecting the artistry and
                    individuality of its owner. Embrace the extraordinary with
                    Verno Perfume, where every bottle is a personal narrative
                    expressed in scent.
                  </>
                }
                // fontWeight="bolder"

                textAlign="left"
                color="#231F1E"
              />
              <br />
            </Grid>

            {Data.map((data, index) => (
              <Grid item lg={4} md={4} sm={6} xs={6}>
                <HomeCard
                  image={data.image}
                  Typography={data.Typography}
                  Typographybody={data.Typographybody}
                />
              </Grid>
            ))}
          </Grid>
        </section>
        {/*******************************************************************8*/}
        <section>
          <Grid
            container
            spacing={4}
            sx={{
              backgroundImage: `url(https://thumbs.dreamstime.com/z/floral-perfume-women-bottle-perfume-near-delicate-pink-flowers-white-background-top-view-floral-perfume-women-bottle-133515953.jpg)`,
              backgroundPosition: "centre",

              pl: "8%",
              pr: "8%",
              pt: "8%",
              pb: "8%",
            }}
          >
            <Grid item xs={12}>
              <TypographyText
                Typography={<> Current client/production count</>}
                fontWeight="bolder"
                variant={!isSmallScreen ? "h4" : "h4"}
                textAlign="centre"
                color="#4B573F"
              />
              <br />
            </Grid>
            <Grid item xs={12} lg={6} md={12} sm={12} >
              <CardMedia
                component="img"
                alt="green iguana"
                image={
                  "https://www.alliedmarketresearch.com/assets/sampleimages/luxury-perfume-market-1574419894.jpeg"
                }
              />
            </Grid>
            <Grid item xs={12} lg={6} md={12} sm={12} sx={{ margin: "auto" }}>
              <TypographyText
                Typography={
                  <>
                    Verno Perfume specializes in the art of crafting
                    personalized fragrances that resonate with individual tastes
                    and preferences. With an unwavering commitment to
                    uniqueness, Verno Perfume offers a bespoke olfactory
                    experience, allowing customers to embark on a sensory
                    journey tailored to their distinct personality and style.
                    The process begins with a consultation, where skilled
                    perfumers engage in a dialogue to understand the client's
                    olfactory inclinations and desired emotions. Drawing from an
                    extensive palette of rare and exquisite ingredients, Verno
                    Perfume artisans meticulously blend scents to create a
                    signature fragrance that captures the essence of the wearer.
                    From the top notes that make the first impression to the
                    lingering base notes that leave a lasting impression, each
                    Verno creation is a masterpiece, reflecting the artistry and
                    individuality of its owner. Embrace the extraordinary with
                    Verno Perfume, where every bottle is a personal narrative
                    expressed in scent.
                  </>
                }
                textAlign="left"
                color="#231F1E"
              />
            </Grid>
          </Grid>
        </section>
        {/************************************************************/}
        <section>
          <Grid
            container
            spacing={4}
            sx={{
              backgroundImage: `url(https://thumbs.dreamstime.com/z/different-perfume-bottles-sampler-pink-floral-background-selective-focus-perfumery-collection-cosmetics-bottle-light-132169453.jpg?ct=jpeg)`,
              backgroundPosition: "centre",
backgroundRepeat:'no-repeat',
              pl: "8%",
              pr: "8%",
              pt: "8%",
              pb: "8%",
              minHeight: isSmallScreen1 ? "105vh" : "auto",
            }}
          >
            <Grid item xs={12}>
              <TypographyText
                Typography={<> Quality Check/Manufacturing Lead Time</>}
                fontWeight="bolder"
                variant={!isSmallScreen ? "h4" : "h4"}
                textAlign="centre"
                color="#4B573F"
              />
              <br />
            </Grid>
            {Data1.map((data, index) => (
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <QualityCard
                  Typography={data.Typography}
                  Typographybody={data.Typographybody}
                />
              </Grid>
            ))}
          </Grid>
        </section>
      </main>
    </>
  );
};

export default Privsection1;
const Data1 = [
  {
    Typography: "Initial Inspection of Raw Materials:",
    Typographybody:
      "Conduct a thorough examination of incoming raw materials and components to ensure they meet specified quality standards. Perform necessary tests to identify any defects or deviations.",
  },

  {
    Typography: "In-Process Quality Checks:",
    Typographybody:
      "Integrate quality checks at different stages of the manufacturing process. Regularly inspect and test products during production to identify and address issues promptly.",
  },
  {
    Typography: "Comprehensive Final Inspection:",
    Typographybody:
      "Conduct a thorough examination of incoming raw materials and components to ensure they meet specified quality standards. Perform necessary tests to identify any defects or deviations.",
  },
  {
    Typography: "Continuous Improvement and Lead Time Optimization:",
    Typographybody:
      "Conduct a thorough examination of incoming raw materials and components to ensure they meet specified quality standards. Perform necessary tests to identify any defects or deviations.",
  },
];
const Data = [
  {
    image:
      "https://thumbs.dreamstime.com/z/saleswoman-giving-consultation-to-customer-store-young-smiling-perfume-cosmetics-283829813.jpg",
    Typography: <>Client Consultation:</>,
    Typographybody: (
      <React.Fragment>
        <br />
        <p>
          Conduct a detailed interview to understand the client's scent
          preferences, lifestyle, and emotional connections to fragrances.
        </p>
      </React.Fragment>
    ),
  },
  {
    image:
      "https://johnphillips.in/cdn/shop/files/JOHNPHILLIPSTOMMSPORTZFRAGRANCEPERFUMEFORMENANDWOMEN4_700x700.jpg?v=1692429880",
    Typography: <>Note Selection:</>,
    Typographybody: (
      <React.Fragment>
        <br />
        <p>
          Present a curated selection of top, middle, and base notes;
          collaborate with the client to choose a harmonious combination.
        </p>
      </React.Fragment>
    ),
  },
  {
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/2/WM/VS/PD/152365754/26-250x250.jpg",
    Typography: <>Blend and Test:</>,
    Typographybody: (
      <React.Fragment>
        <br />
        <p>
          Meticulously blend selected notes to create an initial perfume;
          provide the client with a sample for testing and feedback.
        </p>
      </React.Fragment>
    ),
  },
  {
    image:
      "https://lafrenchperfumes.com/cdn/shop/files/6_5b6c0a37-fa6f-480f-aad3-68315f202cd8.jpg?v=1695969172&width=1445",
    Typography: <>Refinement:</>,
    Typographybody: (
      <React.Fragment>
        <br />
        <p>
          Adjust the fragrance formula based on client feedback; iterate until
          the client is satisfied with the scent profile.
        </p>
      </React.Fragment>
    ),
  },
  {
    image:
      "https://fourthsense.co/wp-content/uploads/2022/03/Guide-To-Fragrance-Concentrations-featured-image.png",
    Typography: <>Concentration and Finalization::</>,
    Typographybody: (
      <React.Fragment>
        <br />
        <p>
          Determine the desired fragrance concentration and finalize the formula for a balanced composition.
        </p>
      </React.Fragment>
    ),
  },
  {
    image:
      "https://i.pinimg.com/originals/af/5c/1c/af5c1c6fc0759cd30d5ebec26f64ac52.jpg",
    Typography: <>Bottle Design and Presentation:</>,
    Typographybody: (
      <React.Fragment>
        <br />
        <p>
          Select a bottle design aligned with the client's aesthetic; customize
          packaging with unique elements; present for client approval.
        </p>
      </React.Fragment>
    ),
  },
];
