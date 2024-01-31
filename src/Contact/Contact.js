import React, { useEffect, useRef, useState } from "react";
import Paper from "@mui/material/Paper";
import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import "../Global.css";
import HomeIcon from "@mui/icons-material/Home";
import PublicIcon from "@mui/icons-material/Public";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

import { useTheme } from "@mui/material/styles";

import bannr from "../Assets/Contact Us[1].webp";
import bannr1 from "../Assets/Contact Us Mobile Banners.webp";
import { Buttons, MetaComponent, TypographyText } from "../Reusable/Reusable";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const matches = useMediaQuery(theme.breakpoints.up("lg"));



  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t9b2rql",
        "template_yxth623",
        form.current,
        "YlwLxEklthBKYFt1-"
      )
      .then(
        (result) => {
          toast.success('Thank you for contact us', {
            position: 'top-right',
            autoClose: 3000, // Duration in milliseconds
          });
        },
        (error) => {
          toast.error('hai', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: theme,
          });
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div>
      <MetaComponent dynamicTitle="Toycity - Contact Us " />
      {!isSmallScreen ? (
        <Box sx={{ position: "relative", textAlign: "center" }}>
          <img
            src='https://ik.imagekit.io/jlco9jzsq/toycity/Contact%20Us_1_.webp?updatedAt=1706184472911'// Replace with your image path
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

              top: "40%",
              left: "45%",
              transform: "translate(50%, -50%)",
            }}
          >
            <TypographyText
              Typography={<>Contact Us</>}
              fontWeight="400"
              variant={!isSmallScreen ? "h3" : "h4"}
              color="White"
            />

            <br />
          </Box>
        </Box>
      ) : (
        <>
          {" "}
          <Box sx={{ position: "relative", textAlign: "center" }}>
            <img
              src='https://ik.imagekit.io/jlco9jzsq/toycity/Contact%20Us%20Mobile%20Banners.webp?updatedAt=1706184571426' // Replace with your image path
              alt="Your Image Alt Text"
              style={{
                width: "100%",
                height: "100vh",

                // opacity: ".8",
              }}
              loading="lazy"
              />
                     <Box
              style={{
                position: "absolute",

                top: "25%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <TypographyText
                Typography={<> Contact Us</>}
                fontWeight="400"
                variant={!isSmallScreen ? "h3" : "h4"}
                color="White"
              />

              <br />
            </Box>
          </Box>
          <br />
        </>
      )}

      {/****************************************** */}

      <Grid
        container
        spacing={5}
        sx={{
          pl: "8%",
          pr: "8%",
          pt: "2%",
          pb: "2%",
        }}
      >
        {/* <Grid item xs={12} md={12} lg={12} sm={12}>
          <TypographyText
            Typography={<>Have a Question?</>}
            fontWeight="400"
            variant={!isSmallScreen ? "h4" : "h5"}
          />

          <br />
          <TypographyText
            Typography={
              <>
                Or just wanna say Hi. We’d love to get to know you. Tell us a
                little about yourself and how we can help. Get answers to all
                your questions about our sales and service here
                <br /> Saturday to Thursday  from 9:00 to 6:00 (AST / GMT+3)
              </>
            }
          />
        </Grid> */}
        {/**********************section1************************************ */}
        <Grid item xs={12} md={12} lg={6} sm={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={12} md={12}>
              <TypographyText
                Typography={<>Send Us a Message</>}
                fontWeight="400"
                fontSize="1.2rem"
                textAlign="left"
              />
            </Grid>
            <Grid item xs={12} lg={12} md={12}>
              <hr className="new2" />
            </Grid>
            <Grid
              item
              xs={12}
              lg={12}
              md={12}
              sx={{ border: "dashed 2px lightgray", margin: "10px" }}
            >
              {" "}
              <form action="" ref={form} onSubmit={sendEmail}>
                <Grid container spacing={2}>
                  <Grid item xs={12} lg={12} md={12} sx={{ pr: "16px" }}>
                    <p className="contacttext">Your Name</p>
                    <input
                      fullWidth
                      type="text"
                      name="name"
                      required
                      style={{
                        height: "35px",
                        width: "100%",
                        border: "none",
                        backgroundColor: "#F7F7F7",
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} lg={12} md={12} sx={{ pr: "16px" }}>
                    <p className="contacttext">Your Email Address</p>
                    <input
                      fullWidth
                      type="email"
                      name="email"
                      required
                      style={{
                        height: "35px",
                        width: "100%",
                        border: "none",
                        backgroundColor: "#F7F7F7",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} lg={12} md={12} sx={{ pr: "16px" }}>
                    <p className="contacttext">Phone</p>
                    <input
                      fullWidth
                      type="text"
                      name="phone"
                      required
                      style={{
                        height: "35px",
                        width: "100%",
                        border: "none",
                        backgroundColor: "#F7F7F7",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} lg={12} md={12} sx={{ pr: "16px" }}>
                    <p className="contacttext">Street Address</p>
                    <input
                      fullWidth
                      type="text"
                      name="street"
                      required
                      style={{
                        height: "35px",
                        width: "100%",
                        border: "none",
                        backgroundColor: "#F7F7F7",
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} lg={12} md={12} sx={{ pr: "16px" }}>
                    <p className="contacttext">Message</p>

                    <textarea
                      name="message"
                      rows="10"
                      required
                      style={{
                        border: "none",
                        width: "100%",
                        backgroundColor: "#F7F7F7",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} lg={12} md={12} sx={{ pr: "16px" }}>
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{
                        bgcolor: "black",
                        color: "#fff",
                        textAlign: "left",
                      }}
                    >
                      Send Message
                    </Button>
                    <br />
                    <br />
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Grid>
        {/************************************ */}

        <Grid item xs={12} md={12} lg={6} sm={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={12} md={12}>
              <TypographyText
                Typography={<>Contact Us</>}
                fontWeight="400"
                fontSize="1.2rem"
                textAlign="left"
              />
            </Grid>
            <Grid item xs={12} lg={12} md={12}>
              <hr className="new2" />
            </Grid>
            <Grid
              item
              xs={12}
              lg={12}
              md={12}
              sx={{ border: "dashed 2px lightgray", margin: "10px" }}
            >
              <Box sx={{ p: "10px" }}>
                <TypographyText
                  Typography={<> KSA Office</>}
                  fontWeight="400"
                  fontSize="1.2rem"
                  textAlign="left"
                />

                <TypographyText
                  Typography={
                    <>
                      {" "}
                      Cortoba Commercial Centre,
                      <br />
                      Building No:3113,
                      <br />
                      Arafat Street Al Hamra District,
                      <br />
                      Jeddah, Kingdom of Saudi Arabia.
                    </>
                  }
                  fontWeight="400"
                  color="gray"
                  textAlign="left"
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              lg={12}
              md={12}
              sx={{ border: "dashed 2px lightgray", margin: "10px" }}
            >
              <Box sx={{ p: "10px" }}>
                <TypographyText
                  Typography={<> Dubai Office</>}
                  fontWeight="400"
                  fontSize="1.2rem"
                  textAlign="left"
                />

                <TypographyText
                  Typography={
                    <>
                      {" "}
                      Toycity International Trading LLC
                      <br />
                      B62 Building, Office No 215,
                      <br />
                      Riggat Al Buteen, Deira,
                      <br />
                      Dubai, United Arab Emirates.
                    </>
                  }
                  fontWeight="400"
                  color="gray"
                  textAlign="left"
                />
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              lg={12}
              md={12}
              sx={{
                border: "dashed 2px lightgray",
                margin: "10px",
                bgcolor: "#FAFAFA",
              }}
            >
              <Box sx={{ p: "10px" }}>
                <TypographyText
                  Typography={<>Retail Dealer Inquiries</>}
                  fontWeight="400"
                  fontSize="1.2rem"
                  textAlign="left"
                />

                <TypographyText
                  Typography={
                    <>
                      If you’re interested in wholesale orders or bulk purchase
                      opportunities and offers,
                      <Link
                        to={`mailto: info@toycity.me`}
                        style={{ textDecoration: "underline black" }}
                      >
                        {" "}
                        contact us here
                      </Link>
                    </>
                  }
                  color="gray"
                  textAlign="left"
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              lg={12}
              md={12}
              sx={{
                border: "dashed 2px lightgray",
                margin: "10px",
                bgcolor: "#F3C82B",
              }}
            >
              <Box sx={{ p: "10px" }}>
                <TypographyText
                  Typography={
                    <>
                      Are you a “Mommy Blogger or social influencer?” Do you
                      love stylish kids toys as we do? We are looking for
                      bloggers or trendy moms that would love to share their
                      style with our matching models. Please,
                      <Link
                        to={`mailto:info@toycity.me`}
                        style={{ textDecoration: "underline black" }}
                      >
                        {" "}
                        Contact us here{" "}
                      </Link>{" "}
                      for more information.
                    </>
                  }
                  textAlign="left"
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

  
    </div>
  );
};

export default Contact;

const Address = [
  {
    SocialIcon: <HomeIcon sx={{ color: "black" }} />,
    text: <> Corporate Office</>,
    text1: (
      <>
        PO Box No : 87665, Suite No : 521, Block B,
        <br />
        Business Village, Opp Clock Tower, Deira,
        <br />
        Dubai, United Arab Emirates.
      </>
    ),
  },
];
const Addresssoud = [
  {
    SocialIcon: <HomeIcon sx={{ color: "black" }} />,
    text: <> Saudi Distribution Office</>,
    text1: (
      <>
        Al Khomra, Faisal St,
        <br />
        PO Box No : 14335,
        <br />
        Jeddah, Saudi Arabia.
        <br />
      </>
    ),
  },
];

const Address1 = [
  {
    SocialIcon: <EmailIcon sx={{ color: "black" }} />,

    text1: <>rajiv@toycity.me</>,
  },
];
const Address2 = [
  {
    SocialIcon: <PhoneIcon sx={{ color: "black" }} />,

    text1: <>+971 55 2101764</>,
  },
];
const Address3 = [
  {
    SocialIcon: <PublicIcon sx={{ color: "black" }} />,

    text1: <>www.toycity.me</>,
  },
];
