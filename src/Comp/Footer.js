import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import React from "react";
import { Buttons, TypographyText } from "../Reusable/Reusable";
import '../Global.css'
import { navItems } from "./Header";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from "react-router-dom";
const Footer = () => {
  return (<>
    <Box sx={{ backgroundColor: "black", p:'8%' }} className='homepadding'>
      <Grid container spacing={4} sx={{ textAlign: "left" ,marginTop:'5px'}}>
        <Grid item lg={3} md={3} sm={6} xs={12}>
          <TypographyText
            Typography={<>Contact</>}
            fontWeight="bolder"
            variant={"1.23rem"}
            textAlign="left"
            color="whitesmoke"
          />{" "}
          <List sx={{ textAlign: "left" }}>
            {Address.map((data, index) => (
              <ListItem
                sx={{ textAlign: "left", padding: "0 !important" }}
                key={index}
              >
                <ListItemText sx={{ textAlign: "left", padding: "0" }}>
                  <TypographyText Typography={data.text} color="gray" />
                  <TypographyText
                    Typography={data.text1}
                    fontSize=".8rem"
                    color="gray"
                  />
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item lg={2} md={3} sm={6} xs={12}>
          <TypographyText
            Typography={<>Menu</>}
            fontWeight="bolder"
            variant={"1.23rem"}
            textAlign="left"
            color="whitesmoke"
          />{" "}
          <List>
            {navItems.map((data, index) => (
              <ListItem
                sx={{ textAlign: "left", padding: "0 !important" }}
                key={index}
              >
                <ListItemText sx={{ textAlign: "left", padding: "0" }}>
                  <TypographyText Typography={data} color="gray" />
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item lg={2.5} md={3} sm={6} xs={12}>
          <TypographyText
            Typography={<>Recent Posts</>}
            fontWeight="bolder"
            variant={"1.23rem"}
            textAlign="left"
            color="whitesmoke"
          />{" "}
          <List sx={{ textAlign: "left" }}>
            {post.map((data, index) => (
              <ListItem
                sx={{ textAlign: "left", padding: "0 !important" }}
                key={index}
              >
                <ListItemText sx={{ textAlign: "left", padding: "0" }}>
                  {/* <TypographyText Typography={data.text} color='gray' /> */}
                  <TypographyText Typography={data.text} color="gray" />
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item lg={4} md={3} sm={6} xs={12}>
          <TypographyText
            Typography={<>Newseletter</>}
            fontWeight="bolder"
            variant={"1.23rem"}
            textAlign="left"
            color="whitesmoke"
          />
          <br /> <br />
          <Grid container spacing={2} sx={{textAlign:"left"}}>
  <Grid item lg={8} md={8} sm={12} xs={12}>
  <TextField
        
        label="Search"
        variant="outlined"
        size="small"
        sx={{ bgcolor: "white",width:'100%' }}
      />
  </Grid>
  <Grid item lg={4} md={4} sm={12} xs={12} >
  <Buttons
            Buttonname={"Read more"}
            fontWeight="bolder"
            color="#272974"
            bgcolor="#F9CF37"
            bgcolor1="red"
            color1="white"
 
          />
  </Grid>
  </Grid>
         
          &nbsp; &nbsp;
    
          <br />
          <br />
          <Grid container spacing={1} sx={{ textAlign: "left" }}>
          {Socialicon.map((data, index) => (
            <Grid item xs={2} lg={2} md={2} sm={2} key={index}>
                   <Link to={data.link}> 
                {data.icon}
                </Link>
            </Grid>
   
          ))}
                    <br />
          <br />
            </Grid>
        </Grid>
      </Grid>
    </Box>
    <Box sx={{ backgroundColor: "#222425" ,pb:'10px'}} className='homepadding'>
    <TypographyText
            Typography={<>verona perfume © 2023    Powered by Vedaham Business Solutions Pvt Ltd</>}
      fontSize='.8rem'
            textAlign="centre"
            color="whitesmoke"
          />
      </Box>
 </> );
};

export default Footer;
const Address = [
  {
    text: <> Corporate Office</>,
    text1: (
      <>
verona perfume
      </>
    ),
  },

];

const post = [
  {
    text: <> A celebration of sucess</>,
  },
  {
    text: <> A celebration of sucess</>,
  },
  {
    text: <> A celebration of sucess</>,
  },
];

export const Socialicon = [
  {link:`https://www.facebook.com/toycityme/`,
    icon: <FacebookIcon sx={{ color: "white" }} />,
  },

  {link:`https://www.instagram.com/toycity_me/`,
    icon: <InstagramIcon sx={{ color: "white" }} />,
  },
  {link:`https://www.instagram.com/toycity_me/`,
    icon: <TwitterIcon sx={{ color: "white" }} />,
  },
];
