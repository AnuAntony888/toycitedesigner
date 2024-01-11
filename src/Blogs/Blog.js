// import React from 'react'

// const Blog = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default Blog
import React, { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Card, CardMedia, Grid } from "@mui/material";

import { Link } from "react-router-dom";
import { TypographyText } from "../Reusable/Reusable";
const Blog = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <section>
        {" "}
        <Grid container>
          <Grid item xs={12}>
            <Box
              sx={{
                backgroundImage: `url(https://thumbs.dreamstime.com/b/bottles-perfume-flowers-color-background-top-view-bottles-perfume-flowers-color-background-115273928.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "bottom",

                height: "105vh",
              }}
            >
              <div data-aos="fade-up">
                <TypographyText
                  Typography={<>Blogs</>}
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
          className="homepadding"
          sx={{
            p: "8%",
            backgroundImage: `url(https://img.freepik.com/premium-photo/dry-floral-branch-white_408798-3612.jpg?w=900)`,
          }}
        >
          {
            //           isLoading
            //   ? skeletonArray
            //   :
            blogList?.map((data, index) => {
              return (
                <>
                  <Grid item xs={12} md={4} lg={3} sm={12} key={index}>
                    <Link
                      to={`/blogs`}
                      state={{
                        id: data.id,
                      }}
                    >
                      <CardMedia
                        component="img"
                        alt="card"
                        width={"100%"}
                        height={"200px"}
                        image={data.image}
                      />
                      <Box
                        sx={{
                          backgroundColor: "rgba(251, 227, 132, 0.7)",
                          backgroundSize: "cover",
                          padding: "10px",
                          marginBottom: "30px",
                        }}
                      >
                        <TypographyText
                          textAlign="centre"
                          Typography={data.title}
                          color="#231F1E"
                          fontWeight='700'
                        />
                      </Box>
                    </Link>
                  </Grid>
                </>
              );
            })
          }
        </Grid>
      </section>
    </main>
  );
};

export default Blog;

const blogList = [
  {
    image: " https://wallpaperaccess.com/full/2016616.jpg",

    title: "Verona Perfumes Industry",
  },
  {
    image:
      " https://media.allure.com/photos/5b9aad53ddba1d5ef0b2c003/16:9/w_2560/Allure-Editors-Favorite-Fragrances-Lede.jpg",

    title: "Verona Perfumes Industry",
  },
  {
    image:
      " https://tse1.mm.bing.net/th?id=OIP.vCT8KveNaSn3C89sorjK5gHaEo&pid=Api&P=0&h=180",

    title: "Verona Perfumes Industry",
  },
  {
    image:
      " https://tse1.mm.bing.net/th?id=OIP.paznXeHOa3EQhI2hfJRI3QHaEK&pid=Api&P=0&h=180",

    title: "Verona Perfumes Industry",
  },
  {
    image: " https://wallpaperaccess.com/full/2016616.jpg",

    title: "Verona Perfumes Industry",
  },
  {
    image:
      " https://media.allure.com/photos/5b9aad53ddba1d5ef0b2c003/16:9/w_2560/Allure-Editors-Favorite-Fragrances-Lede.jpg",

    title: "Verona Perfumes Industry",
  },
  {
    image:
      " https://tse1.mm.bing.net/th?id=OIP.vCT8KveNaSn3C89sorjK5gHaEo&pid=Api&P=0&h=180",

    title: "Verona Perfumes Industry",
  },
  {
    image:
      " https://tse1.mm.bing.net/th?id=OIP.paznXeHOa3EQhI2hfJRI3QHaEK&pid=Api&P=0&h=180",

    title: "Verona Perfumes Industry",
  },
];
