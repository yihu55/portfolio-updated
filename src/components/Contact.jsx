import React from 'react'
import { Grid, Typography } from '@mui/material'
import { FadeInSection } from './FadeInSection'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
export default function Contact() {
  return (
      
      <Grid container>
            <Grid item xs={8} mt={35} ml={15}  sx={{position:'absolute'}}>
               <FadeInSection>
                  <Typography variant='h2' color='grey'>Contact Me
                  </Typography>
               </FadeInSection>
            </Grid>
          <Grid item xs={6} m={40} pl={30} sx={{ zIndex: 1 }} className='contact-methods'>
              <a href='tel:0762418483'>
               <PhoneIphoneIcon fontSize='large' />
              </a>
              <a href="mailto:veronicayi@msn.com">
               <EmailIcon fontSize='large' />
              </a>
              
              <a href="https://www.linkedin.com/in/yi-hu-188329184/">
               <LinkedInIcon fontSize='large' />
              </a>
              <a href="https://www.github.com/yihu55">
               <GitHubIcon fontSize='large'/>
              </a>
              
            </Grid>
      </Grid>
  
  )
}
