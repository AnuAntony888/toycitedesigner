import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import "aos/dist/aos.css";
import AOS from "aos";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import { Box, Button, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ResponsiveHeader from "./ResponsiveHeader";
import logo from "../Assets/Verona.png";
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
            minHeight: "130px",
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
                  {navItems.map((item) => (
                    <Button
                      key={item}
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        color: "white",
                        fontSize: "16px",
                        textTransform: "capitalize",

                        minWidth: "100px",
                      }}
                    >
                      {item}
                    </Button>
                  ))}
                </Box>
              </>
            ) : (
              <>
                <img
                  src={logo}
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
  <Link to={"/ourcompany"}>Our Company</Link>,
  <Link to={"/privatelabelling"}>Private Labelling</Link>,
  <Link to={"/Blogs"}>Blogs</Link>,

  <Link to={"/Contact"}>Contact</Link>,
];
