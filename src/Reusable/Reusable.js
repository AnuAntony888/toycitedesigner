import React from "react";

import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import StarIcon from '@mui/icons-material/Star';
import useMediaQuery from "@mui/material/useMediaQuery";
import { CardActions, CardMedia, Grid, Typography } from "@mui/material";

export function TypographyText(props) {
  return (
    <Typography
      sx={{
        borderRight: props.borderRight,
        fontSize: props.fontSize,
        width: props.width,
        textAlign: props.textAlign,
        color: props.color,
        padding: props.padding,
        textTransform: props.textTransform,
        fontWeight: props.fontWeight,
        paddingRight: props.paddingRight,
        paddingLeft: props.paddingLeft,
        paddingTop: props.paddingTop,
        paddingBottom: props.paddingBottom,
        fontWeight: props.fontWeight,
        transform: props.transform,
        margin: props.margin,
        fontFamily: "'Poppins', sans-serif",



        marginTop: props.marginTop,
        "&:hover": {
          color: props.hovercolor,
        },
      }}
      variant={props.variant}
      component={props.component}
      className={props.className}
         fontFamily= "'Poppins', sans-serif"
      dangerouslySetInnerHTML={props.dangerouslySetInnerHTML}
    >
      {props.Typography}
    </Typography>
  );
}

export function Buttons(props) {
  return (
    <Button
      variant={props.variant}
      sx={{
        bgcolor: props.bgcolor,
        textTransform: props.textTransform,
        color: props.color,
        float: props.float,
        fontSize: props.fontSize,
        width: props.width,
        height: props.height,
        fontWeight: props.fontWeight,
        marginBottom: props.marginBottom,
        transform: props.transform,
        minWidth: "100px",
        // fontFamily: 'Lato',
        fontFamily: "'Poppins', sans-serif",
        ":hover": {
          bgcolor: props.bgcolor1, // theme.palette.primary.main
          color: props.color1,
        },

        textTransform: "capitalize",
      }}
    >
      {props.Buttonname}
    </Button>
  );
}

export function HomeCard(props) {
  return (
    <Card
      sx={{
        // backgroundColor: 'transparent',
        background: " rgba(251, 227, 132, 0.7)",
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={props.image}
      />
      <CardContent>
        {/* <div data-aos="zoom-in"> */}
          <TypographyText
            variant="1rem"
            component="div"
            color={"#231F1E"}
   
            fontWeight={700}
            Typography={props.Typography}
          />
        {/* </div> */}
        {/* <div data-aos="fade-right" data-aos-easing="ease-in-sine"> */}
          <TypographyText
            fontSize=".9rem"
            component="div"
            color={"#231F1E"}
            textAlign="left"
            Typography={props.Typographybody}
          />
        {/* </div> */}
      </CardContent>
    </Card>
  );
}


export function QualityCard(props) {
  return (
    <Card
      sx={{
        // backgroundColor: 'transparent',
        background: "rgba(251, 227, 132, 0.7)",

      }}
    >
  
      <CardContent>
<StarIcon sx={{color:'#231F1E', fontSize:'2.5rem'}}/>
      <TypographyText
            variant="h5"
            component="div"
            color={"#231F1E"}
            color1="#ffff"
            fontWeight={"bolder"}
            Typography={props.Typography}
            fontFamily= "'Raleway', sans-serif"
          />
        {/* <div data-aos="fade-right" data-aos-easing="ease-in-sine"> */}
          <TypographyText
            fontSize="1rem"
            component="div"
            color={"#231F1E"}
            textAlign="left"
            Typography={props.Typographybody}
          />
        {/* </div> */}
      </CardContent>
    </Card>
  );
}
