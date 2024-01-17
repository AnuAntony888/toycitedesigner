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

import { Buttons, TypographyText } from "../Reusable/Reusable";
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
  return (
    <div>
  
   
      <Box sx={{ position: "relative", textAlign: "center" , pt: !matches ? "80px" : "120px",}}>
        <img
          src="https://toycity.me/assets/img/background/BG_4.jpg" // Replace with your image path
          alt="Your Image Alt Text"
          style={{
            width: "100%",
            height: "100vh",

            opacity: ".8",
          }}
        />
        <Box
          style={{
            position: "absolute",

            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <TypographyText
            Typography={<>Contact Us</>}
            fontWeight="400"
            variant={!isSmallScreen ? "h2" : "h4"}
          />
          <br />

        </Box>
      </Box>
      {/****************************************** */}

      <Grid
        container
        spacing={2}
        sx={{
          p: "8%",
         
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
         
        
                color="#fff"
                bgcolor="black"
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