import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import {
  Box,
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
import { styled } from "@mui/material/styles";
import bannr from "../Assets/Contact Us.webp";
import bannr1 from "../Assets/4.webp";
import { Buttons, TypographyText } from "../Reusable/Reusable";
import { Link } from "react-router-dom";
const Contact = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, seterrors] = useState({});

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === "dark" ? "#1A2027" : "rgba(0, 0, 0,.7 )",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: "black",
    boxShadow: "none", // Remove box shadow
    border: "1px solid #000", // Add a 1px solid border (you can change the color)
  }));
  const handleEmail = (e) => {
    const errors = {};

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!e.target.value) {
      seterrors((prev) => ({ ...prev, email: "Email is required!" }));
    } else if (!regex.test(e.target.value)) {
      seterrors((prev) => ({
        ...prev,
        email: "This is not a valid email format!",
      }));
    } else if (regex.test(e.target.value)) {
      seterrors((prev) => ({ ...prev, email: "" }));
    }

    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    const errors = {};
    if (!e.target.value) {
      seterrors((prev) => ({ ...prev, message: "Name is required " }));
    } else {
      seterrors((prev) => ({ ...prev, message: " " }));
    }

    setMessage(e.target.value);
  };

  const handlePhone = (e) => {
    const errors = {};
    if (!e.target.value) {
      seterrors((prev) => ({ ...prev, phone: "Phone is required " }));
    } else {
      seterrors((prev) => ({ ...prev, phone: " " }));
    }

    setPhone(e.target.value);
  };

  const handleName = (e) => {
    const errors = {};
    if (!e.target.value) {
      seterrors((prev) => ({ ...prev, name: "Name is required " }));
    } else {
      seterrors((prev) => ({ ...prev, name: " " }));
    }

    setName(e.target.value);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const Data = [
    {
      label: "Your Name",
      value: name,
      onChange: handleName,
    },
    {
      label: "Your Email Address",
      value: email,
      onChange: handleEmail,
    },
    {
      label: "Phone ",
      value: phone,
      onChange: handlePhone,
    },
    {
      label: "Street Address",
      value: phone,
      onChange: handlePhone,
    },
  ];
  return (
    <div>
      {!isSmallScreen ? (
        <Box sx={{ position: "relative", textAlign: "center" }}>
          <img
            src={bannr} // Replace with your image path
            alt="Your Image Alt Text"
            style={{
              width: "100%",
              height: "100vh",
            }}
          />
          <Box
            style={{
              position: "absolute",

              top: "35%",
              left: "45%",
              transform: "translate(50%, -50%)",
            }}
          >
            <TypographyText
              Typography={<>Contact Us</>}
              fontWeight="400"
              variant={!isSmallScreen ? "h2" : "h4"}
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
              src={bannr1} // Replace with your image path
              alt="Your Image Alt Text"
              style={{
                width: "100%",
                height: "100vh",

                // opacity: ".8",
              }}
            />
            h
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
        <Grid item xs={12} md={12} lg={12} sm={12}>
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
                <br /> Monday to Friday from 9:30 to 17:30 (EET / GM+2)
              </>
            }
          />
        </Grid>
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
              <Grid container spacing={2}>
                {Data.map((data, index) => (
                  <Grid
                    item
                    xs={12}
                    lg={12}
                    md={12}
                    sx={{ pr: "16px" }}
                    key={index}
                  >
                    <p className="contacttext">{data.label}</p>
                    <TextField
                      fullWidth
                      size="small"
                      variant="outlined"
                      InputProps={{
                        style: {
                          height: "35px",

                          border: "none",
                          backgroundColor: "#F7F7F7",
                        },
                      }}
                      value={data.value}
                      onChange={data.onChange}
                    />
                  </Grid>
                ))}

                <Grid item xs={12} lg={12} md={12} sx={{ pr: "16px" }}>
                  <p className="contacttext">Message</p>
                  <TextField
                    fullWidth
                    size="small"
                    multiline
                    rows={3} // Specify the number of visible rows
                    value={message}
                    onChange={handleMessage}
                    InputProps={{
                      style: {
                        border: "none",
                        backgroundColor: "#F7F7F7",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} lg={12} md={12} sx={{ pr: "16px" }}>
                  <Buttons
                    Buttonname={"Contact Us"}
                    color="#fff"
                    bgcolor="black"
                    bgcolor1="red"
                    color1="#AFA065"
                    textAlign="left"
                    type="submit"
                    // onClick={handleApi}
                  />
                  <br />
                  <br />
                </Grid>
              </Grid>
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
                        to={`mailto:rajiv@toycity.me`}
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
                  Typography={<> Corporate Office</>}
                  fontWeight="400"
                  fontSize="1.2rem"
                  textAlign="left"
                />

                <TypographyText
                  Typography={
                    <>
                      {" "}
                      Family Active Sports Equipment Trading LLC
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
              sx={{ border: "dashed 2px lightgray", margin: "10px" }}
            >
              <Box sx={{ p: "10px" }}>
                <TypographyText
                  Typography={<> Saudi Distribution Office</>}
                  fontWeight="400"
                  fontSize="1.2rem"
                  textAlign="left"
                />

                <TypographyText
                  Typography={
                    <>
                      {" "}
                      Al Khomra, Faisal St, PO Box No : 14335
                      <br />
                      Jeddah, Saudi Arabia.
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
                        to={`mailto:rajiv@toycity.me`}
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
