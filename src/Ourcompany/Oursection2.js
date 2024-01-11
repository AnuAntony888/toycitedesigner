import { Grid } from "@mui/material";
import React from "react";
import bg2 from "../Assets/bg3.jpg";
import black from "../Assets/pngtree-black-perfume-bottle-on-a-dark-background-picture-image_2687636.jpg";
import { HomeCard, TypographyText } from "../Reusable/Reusable";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
const Oursection2 = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{
          //  backgroundImage: `url(${black})`,
          backgroundImage: `url(https://img.freepik.com/premium-photo/festive-flower-english-rose-composition-white-background-overhead-top-view-flat-lay-copy-space-birthday-mothers-valentines-womens-wedding-day-concept_511010-1339.jpg?w=1500)`,
          backgroundPosition: "centre",
          backgroundRepeat:'no-repeat',
          // height: !isSmallScreen ? "105vh" : "auto",
          pl: "8%",
          pr: "8%",
          pt: "8%",
          pb: "8%",
        }}
      >
        <Grid item xs={12}>
          <TypographyText
            Typography={<>Company History and Current </>}
            fontWeight="bolder"
            variant={!isSmallScreen ? "h4" : "h4"}
            textAlign="centre"
            color="#4B573F"
          />
        </Grid>

        {Data.map((data, index) => (
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <HomeCard
              image={data.image}
              Typography={data.Typography}
              Typographybody={data.Typographybody}
            />
          </Grid>
        ))}
      </Grid>
      {/**************************************** */}
    </div>
  );
};

export default Oursection2;

const Data = [
  {
    image:
      "https://vioralondon.com/wp-content/uploads/2020/02/History-Of-Chanel-Perfume-Main-Image-1024x681.jpg",
    Typography: <>Company Founding and Vision</>,
    Typographybody: (
      <React.Fragment>
        <br />
        <p>
          Verona Perfumes Industry, a distinguished perfume company, was founded
          in . Inspired by a passion for fine
          fragrances and a desire to create unique olfactory experiences,
       established the company with a clear vision - to
          redefine the art of perfumery by blending traditional craftsmanship
          with modern innovation.
        </p>
      </React.Fragment>
    ),
  },
  {
    image:
      "https://craftsmanship.net/wp-content/uploads/2018/12/Perfume-23-photos-014-scaled.jpg",
    Typography: "Signature Scents and Artistic Craftsmanship",
    Typographybody: (
      <React.Fragment>
        <p>
          Verona Perfumes Industry, a distinguished perfume company, was founded
          in [Year] by [Founder's Name]. Inspired by a passion for fine
          fragrances and a desire to create unique olfactory experiences,
          [Founder's Name] established the company with a clear vision - to
          redefine the art of perfumery by blending traditional craftsmanship
          with modern innovation.
        </p>
      </React.Fragment>
    ),
  },
  {
    image:
      "https://ecocult.com/wp-content/uploads/2020/09/feat_abel-768x512.jpg",
    Typography: "Sustainable Practices and Ethical Sourcing",
    Typographybody: (
      <React.Fragment>
        <p>
          Verona Perfumes Industry, a distinguished perfume company, was founded
          in [Year] by [Founder's Name]. Inspired by a passion for fine
          fragrances and a desire to create unique olfactory experiences,
          [Founder's Name] established the company with a clear vision - to
          redefine the art of perfumery by blending traditional craftsmanship
          with modern innovation.
        </p>
      </React.Fragment>
    ),
  },
  {
    image: "https://photos.prnewswire.com/prnfull/20150527/218919",
    Typography: "Innovation in Perfumery Technology",
    Typographybody: (
      <React.Fragment>
        <p>
          Verona Perfumes Industry, a distinguished perfume company, was founded
          in [Year] by [Founder's Name]. Inspired by a passion for fine
          fragrances and a desire to create unique olfactory experiences,
          [Founder's Name] established the company with a clear vision - to
          redefine the art of perfumery by blending traditional craftsmanship
          with modern innovation.
        </p>
      </React.Fragment>
    ),
  },
];

const Data1 = [
  {
    image: "https://photos.prnewswire.com/prnfull/20150527/218919",
    Typography: "Innovation in Perfumery Technology",
    Typographybody: (
      <React.Fragment>
        <p>
          In the pursuit of excellence, [Company Name] has embraced cutting-edge
          technology in the perfumery process. The company continually invests
          in research and development to discover innovative ways to extract,
          blend, and preserve fragrances. This commitment to innovation has
          allowed [Company Name] to push the boundaries of traditional
          perfumery, introducing groundbreaking techniques that elevate the
          overall sensory experience for its customers.
        </p>
      </React.Fragment>
    ),
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/summer-fragrance-perfumery-concept-made-perfume-bottle-flowers-created-generative-ai-technology-269816378.jpg",
    Typography: "Community Engagement and Customer Experience",
    Typographybody: (
      <React.Fragment>
        <p>
          [Company Name] values perfume as a personal expression, actively
          engaging with the community through events, workshops, and social
          media. Customer feedback shapes new scents, fostering a dynamic and
          inclusive approach. Our commitment to an exceptional customer
          experience has cultivated a loyal following, appreciating the artistry
          and personal connection in every [Company Name] perfume bottle.
        </p>
      </React.Fragment>
    ),
  },
];

const Data2 = [
  {
    image: "https://photos.prnewswire.com/prnfull/20150527/218919",
    Typography: "Fragrance collection",
    Typographybody: (
      <React.Fragment>
        <p>
          As of [current year], Verona Perfumes Industry proudly presents a
          diverse and sophisticated collection of fragrances. Ranging from
          timeless classics to avant-garde blends, each perfume is a testament
          to our commitment to offering a range that caters to various tastes
          and preferences.
        </p>
      </React.Fragment>
    ),
  },
];
