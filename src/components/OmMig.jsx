import { Typography } from '@mui/material'
import React from 'react'
import { FadeInSection } from './FadeInSection'
import { Grid } from '@mui/material'
export default function OmMig() {
    return (
        <Grid container>
            <Grid item xs={8} mt={35} ml={15}  sx={{position:'absolute'}}>
               <FadeInSection>
                  <Typography variant='h2' color='grey'>Om Mig
                  </Typography>
               </FadeInSection>
            </Grid>
            <Grid item xs={12} m={40} pl={20} sx={{display:'flex',justifyContent:'center',alignItems:'center',zIndex:1}} >
                <Typography variant='p'>En passionerad fullstack webbutvecklare med erfarenhet av frontend- och backend-tekniker, som lägger stor vikt vid att utveckla applikationer utav användarvänliga design i kombination av funktionalitet. Seriös passion för nya teknologier. </Typography>
            </Grid>
      </Grid>
   
  )
}
