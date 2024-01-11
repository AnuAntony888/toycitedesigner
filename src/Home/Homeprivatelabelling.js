// import React from 'react'

// const Homeprivatelabelling = () => {
//   return (
//     <div>Homeprivatelabelling</div>
//   )
// }

// export default Homeprivatelabelling
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

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import bg from "../Assets/pngtree-black-perfume-bottle-on-a-dark-background-picture-image_2687636.jpg";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

import { Buttons, TypographyText } from "../Reusable/Reusable";
const Homeprivatelabelling = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));
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
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          //  backgroundImage: `url(${black})`,
          backgroundImage: `url(https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
          backgroundPosition: "centre",
          objectFit: "cover",
          backgroundRepeat:'no-repeat',

          pl: "8%",
          pr: "8%",
          pt: "8%",
          pb: "8%",
           height: !isSmallScreen ? "105vh" : "auto",
        }}
      >
        {/**********************section1************************************ */}
        <Grid item xs={12} md={12} lg={6} sm={12}>
          <TypographyText
            Typography={<>Private Labelling</>}
            textAlign="left"
            color="#4B573F"
            fontWeight="bolder"
            variant={!isSmallScreen ? "h4" : "h5"}
          />
          <br />
          <TypographyText
            Typography={
              <>
                Transform your brand into a olfactory masterpiece with our
                exclusive private labeling services for perfumes. At [Your
                Company Name], we understand the significance of a signature
                scent in defining brand identity. Our seasoned team of perfumers
                and manufacturers collaborates closely with you to bring your
                vision to life, offering a diverse array of premium fragrances
                or creating a bespoke formula tailored to your brand's ethos.
                From packaging design to quality control, we handle every aspect
                of the process, ensuring that each bottle reflects the essence
                of your brand. With our private labeling expertise, you can
                confidently launch a distinguished line of perfumes, making a
                memorable mark in the competitive fragrance industry.
                <br />
                <br />
                Choose [Your Company Name] for a seamless journey into the world
                of private label perfumery. Our commitment to excellence extends
                beyond product creation, encompassing reliable supply chains,
                efficient production, and personalized support. Whether you're a
                budding entrepreneur or an established brand seeking to expand
                your product line, our comprehensive private labeling solutions
                empower you to navigate the complexities of the perfume market.
                Join us in crafting scents that resonate with your audience and
                elevate your brand's presence in the world of fragrance.
              </>
            }
            textAlign="left"
            color="#231F1E"
          />
        </Grid>
        {/**********************section1************************************ */}
        <Grid item xs={12} md={12} lg={6} sm={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6} md={6}>
              <p className="contacttext">Name</p>
              <TextField
                variant="outlined"
                size="small"
                className="contactbox"
                fullWidth
                type="text"
                placeholder="Entre Your Name"
                value={name}
                onChange={handleName}
                sx={{ border: "solid white .5px !important" }}
                InputProps={{ style: { Color: "#4B573F !impotant" } }}
              />
            </Grid>
            <Grid item xs={12} lg={6} md={6}>
              <p className="contacttext">Email</p>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                type="text"
                placeholder="Entre Your Email"
                className="contactbox"
                value={email}
                onChange={handleEmail}
              />
            </Grid>
            <Grid item xs={12} lg={12} md={12}>
              <p className="contacttext">Phone</p>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                type="text"
                value={phone}
                placeholder="Entre Your Phone"
                onChange={handlePhone}
                className="contactbox"
              />
            </Grid>
            <Grid item xs={12} lg={12} md={12}>
              <p className="contacttext">Message</p>
              <TextField
                fullWidth
                type="text"
                id="outlined-multiline-flexible"
                size="small"
                multiline
                rows={4} // Specify the number of visible rows
                placeholder="Entre Your Message"
                value={message}
                onChange={handleMessage}
                className="contactbox"
              />
            </Grid>
            <Grid item xs={12} lg={12} md={12}>
              <Buttons
                Buttonname={"Contact Us"}
                fontWeight="bolder"
                color="#fff"
                bgcolor="#4B573F"
                bgcolor1="red"
                color1="#AFA065"
                textAlign="left"
                type="submit"
                // onClick={handleApi}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Homeprivatelabelling;

const Address = [
  {
    SocialIcon: <HomeIcon sx={{ color: "#fff" }} />,

    text1: <>Verona Perfumes Industry</>,
  },
];

const Address1 = [
  {
    SocialIcon: <EmailIcon sx={{ color: "#fff" }} />,

    text1: <>abc@email.com</>,
  },
];
const Address2 = [
  {
    SocialIcon: <PhoneIcon sx={{ color: "#fff" }} />,

    text1: <>+971 57 787794</>,
  },
];
