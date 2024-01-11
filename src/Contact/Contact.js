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
import bg from "../Assets/pexels-mareefe-672051.jpg";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

import { Buttons, TypographyText } from "../Reusable/Reusable";
const Contact = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
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
    <div>
      <main>
        <section>
      <Grid container>
        <Grid item xs={12}>
          <Box
            sx={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "centre",

              height: "105vh",
            }}
          >
            <div data-aos="fade-up">
              <TypographyText
                Typography={<>Contact Us</>}
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
      {/****************************************** */}
      <section>
      <Grid
        container
        spacing={2}
        sx={{
          p: "8%",
          backgroundSize: "cover",
          backgroundPosition: "centre",
          backgroundImage: `url(https://img.freepik.com/premium-photo/dry-floral-branch-white_408798-3612.jpg?w=900)`,
        }}
      >
        {/**********************section1************************************ */}
        <Grid item xs={12} md={12} lg={6} sm={12}>
          <Grid container spacing={2} sx={{ paddingTop: "10%" }}>
            <Grid item xs={12} lg={12} md={12} sm={12}>
              <Box className="contactbox">
                <List>
                  <ListItem sx={{ paddingLeft: "10px" }}>
                    <TypographyText
                      Typography={"Address"}
                      variant={"1rem"}
                          fontWeight="600"
                          color="#231F1E"
                    />
                  </ListItem>
                  {Address.map((data, index) => (
                    <ListItem className="listitems" key={index}>
                      <ListItemIcon className="footlistliwidth">
                        {data.SocialIcon}
                      </ListItemIcon>
                      <ListItemText className="list_text">
                        <TypographyText
                          Typography={data.text1}
                          fontSize=".9rem"
                          color="#231F1E"
                          fontWeight="600"
                        />
                      </ListItemText>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
            <Grid item xs={12} lg={12} md={12} sm={12}>
              <Box className="contactbox">
                <List>
                  <ListItem sx={{ paddingLeft: "10px" }}>
                    <TypographyText
                      Typography={"Email"}
                      variant={"1rem"}
                          fontWeight="700"
                          color="#231F1E" fontWeight="600"
                    />
                  </ListItem>
                  {Address1.map((data, index) => (
                    <ListItem className="listitems" key={index}>
                      <ListItemIcon className="footlistliwidth">
                        {data.SocialIcon}
                      </ListItemIcon>
                      <ListItemText className="list_text">
                        <TypographyText
                          Typography={data.text1}
                          fontSize=".9rem"
                          color="#231F1E" fontWeight="600"
                        />
                      </ListItemText>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
            <Grid item xs={12} lg={12} md={12} sm={12}>
              <Box className="contactbox">
                <List>
                  <ListItem sx={{ paddingLeft: "10px" }}>
                    <TypographyText
                      Typography={"Phone"}
                      variant={"1rem"}
                          fontWeight="700"
                          color="#231F1E" 
                    />
                  </ListItem>
                  {Address2.map((data, index) => (
                    <ListItem className="listitems" key={index}>
                      <ListItemIcon className="footlistliwidth">
                        {data.SocialIcon}
                      </ListItemIcon>
                      <ListItemText className="list_text">
                        <TypographyText
                          Typography={data.text1}
                          fontSize=".9rem"
                          color="#231F1E" fontWeight="600"
                        />
                      </ListItemText>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
          </Grid>
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
                sx={{    border: 'solid white .5px !important'}}
                InputProps={{ style: { Color: 'yellow !impotant', } }}
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
      </section>
      </main>
    </div>
  );
};

export default Contact;

const Address = [
  {
    SocialIcon: <HomeIcon />,

    text1: <>Verona Perfumes Industry</>,
  },
];

const Address1 = [
  {
    SocialIcon: <EmailIcon  />,

    text1: <>info@veronaperfumesindustry.com</>,
  },
];
const Address2 = [
  {
    SocialIcon: <PhoneIcon  />,

    text1: <>+971 58 911 224
    <br/>+971 54 426 1159</>
    
  },
];
