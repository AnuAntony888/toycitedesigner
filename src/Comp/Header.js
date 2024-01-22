import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import "aos/dist/aos.css";
import AOS from "aos";
import "../Global.css";
import { Link } from "react-router-dom";
import { Box, Button, Divider, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ResponsiveHeader from "./ResponsiveHeader";
import { usePoPupContext } from "../PopupContext";
import logo from "../Assets/Toycity logo-01.webp";
export default function Header() {
  const { setopenpopup, openpopup } = usePoPupContext();
  console.log(openpopup, "openpopup");
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
            minHeight: !matches ? "80px" : "120px",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
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
                  src={logo}
                  width={120}
                  height={"auto"}
                  onClick={refreshPage}
                  style={{ paddingLeft: "5%" }}
                />

                <Box sx={{ pr: "5%" }}>
                  <div data-aos="fade-right">
                    {navItems.map((item, index) => (
                      <Button key={item} className="buttton_eader">
                        {item}
                        <div class="verticalline"></div>
                      </Button>
                    ))}
                    {/* <Button
                      className="buttton_eader"
                      onClick={() => setopenpopup(true)}
                    >
                      Contact
                    </Button> */}
                  </div>
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
  <Link to={"/aboutus"}>About Us</Link>,
  <Link to={"/RetailPartners"}>Retail Partner</Link>,
  <Link to={"/NewsandEvents"}>News and Events</Link>,
  <Link to={"/Contact"}>Contact</Link>,

  // <a href="#" onClick={openPopup}>Contact</a>,
];
