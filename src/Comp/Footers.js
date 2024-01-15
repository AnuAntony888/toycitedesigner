import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { TypographyText } from '../Reusable/Reusable'

const Footers = () => {
  return (
    <Box sx={{ backgroundColor: "black", p:'8%' }} className='homepadding'>
    <Grid container spacing={4} sx={{ marginTop:'5px'}}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <TypographyText
          Typography={<>© 2023 Toycity. All rights reserved. All audio, visual and textual content on this site (including all names, characters, images, trademarks and logos) are protected by trademarks, copyrights and other Intellectual Property rights owned by Toycity or its subsidiaries, licensors, licensees, suppliers and accounts.</>}
      
        fontSize='0.8rem'
          textAlign="centre"
          color="white"
        />
        <br/>
        <br/>
               <TypographyText
          Typography={<>© 2023 by Toycity. Created on Editor X by Pinto Prasenan.</>}
      
          fontSize='0.8rem'
          textAlign="centre"
          color="white"
        />{" "}
        </Grid>
        </Grid>
        </Box>
  )
}

export default Footers
