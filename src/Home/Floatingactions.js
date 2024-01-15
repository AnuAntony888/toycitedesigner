import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";

const Floatingactions = () => {


  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "200px",
        right: "0px",
        zIndex: 1000,
        backgroundColor:'black',
        p:'1%'

      }}
    >
      {Social.map((item, index) => (
        <Box sx={{ display: "flex", }} key={index}>
          <Link to={item.link}>
            <img src={item.icon} alt="" className="fixediconsize"/>
          </Link>
        </Box>
      ))}
    </Box>
  );
};

export default Floatingactions;
const Social = [
    {link:'https://www.facebook.com/toycityme/',
      icon:'https://static.wixstatic.com/media/40898a93cfff4578b1779073137eb1b4.png/v1/fill/w_58,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/40898a93cfff4578b1779073137eb1b4.png' 
     
    },
    {
      icon: 'https://static.wixstatic.com/media/aebe5b6fd55f471a936c72ff2c8289d7.png/v1/fill/w_58,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/aebe5b6fd55f471a936c72ff2c8289d7.png',
    },
    {icon:'https://static.wixstatic.com/media/11062b_d742af69cba743b295169b702fd597a1~mv2.png/v1/fill/w_58,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_d742af69cba743b295169b702fd597a1~mv2.png'}
  ,
{icon:'https://static.wixstatic.com/media/fcfebdfae12a44f993a94aeed8e2e66b.png/v1/fill/w_58,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fcfebdfae12a44f993a94aeed8e2e66b.png'},
{icon:'https://static.wixstatic.com/media/a1fed5f687844a6e8f42e017f71dfcb4.png/v1/fill/w_58,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a1fed5f687844a6e8f42e017f71dfcb4.png'}];