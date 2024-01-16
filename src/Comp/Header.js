import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import "aos/dist/aos.css";
import AOS from "aos";
import  '../Global.css'
import { Link } from "react-router-dom";
import { Box, Button, Divider, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ResponsiveHeader from "./ResponsiveHeader";

export default function Header() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  console.log(matches, "matches");
  function refreshPage() {
    window.location.href = "/";
  }
  React.useEffect(() => {
    AOS.init({
      // Global settings here
      duration: 1000,
      once: true, // Only animate once
    });
  }, []);

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <AppBar
          sx={{
            width: "100%",
            minHeight:!matches?"80px": "120px",
            backgroundColor: "rgba(0, 0, 0, 0.239)",
            justifyContent: "space-between",
            position: "sticky !impoertant",
            top: "0px",
            boxShadow: "none",
            color: "black",
          }}
          position="fixed"
        >
          <Toolbar
            sx={{
              justifyContent: "space-between",
              marginTop: "auto",
              marginBottom: "auto",
            }}
          >
            {matches ? (
              <>
                <img
                  src="https://toycity.me/assets/img/logo_new.png "
                  width={120}
                  height={"auto"}
                  onClick={refreshPage}
                  style={{ paddingLeft: "5%" }}
                />

                <Box sx={{ pr: "5%" }}>
                <div data-aos="fade-right">
                  {navItems.map((item,index) => (
                    <Button
                      key={item}
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        color: "white",
                        fontSize: ".9rem",
                        textTransform: "capitalize",

                        minWidth: "150px",
                      }}
                    >
                      {item}
                      <div class="verticalline"></div>
                    </Button> 
                 
                  
              
                    
               ))}
               </div>
                </Box>
              </>
            ) : (
              <>
                <img
                  src='https://toycity.me/assets/img/logo_new.png'
                  width={70}
                  height={"auto"}
                  onClick={refreshPage}
                  style={{ marginTop: "10px" }}
                />
                <ResponsiveHeader />
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export const navItems = [
  <Link to="/">Home</Link>,
  <Link to={"/aboutus"}>Aboutus</Link>,
  <Link to={"/"}>Retail Partner</Link>,
  <Link to={"/"}>News and Events</Link>,


  <Link to={"/"}>Contact</Link>,
];
