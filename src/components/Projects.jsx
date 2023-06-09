import React from 'react'
import { Grid } from '@mui/material'
import { Typography } from '@mui/material'
import { FadeInSection } from './FadeInSection'
import Project from './Project'
import image from '../images/calculate-game.jpg'
import chatProject from '../images/chat.jpg'
import cakeShop1 from '../images/cake-shop1.png'
import cakeShop2 from '../images/cake-shop2.png'
import cakeShop3 from '../images/cake-shop3.png'
import timeTracker from '../images/timetracker.jpg'
import sunnysideLandingpage from '../images/sunnyside-landingpage-screenshot.png'

export default function Projects() {
  return (
    <Grid container >
      <Grid item xs={12} m={15} >
        <FadeInSection>
          <Typography variant='h2' color='grey' >Projekter </Typography>
        </FadeInSection>
      </Grid>
         <Project projectDescription='E-handel butik, utvecklat av React Typescript, Nodejs, och Bootstrap. MongoDB är databashanterare. Kunder kan bland annat logga in, söka produkter enlig kategori, beställa varor. Sist men inte minst, en admin kan modifiera status på beställningar, lista ut alla order, lägga till produkt, etc...' imageSrcs={[cakeShop1,cakeShop2,cakeShop3]}  />
        <Project projectDescription='Ett roligt räknespel som passar utmärkt för lågstadiet barnen att öva på tal med multiplikation, substration mm. Appen är utvecklat av React och Bootstrap.'
          imageSrcs={[image]}
          />
        <Project projectDescription='En realtime Chat Applikation utvecklat av React Typescript, Nodejs och MongoDB.'  imageSrcs={[chatProject]}/>
        
      <Project projectDescription='En frontend övning, byggdes av HTML, CSS, LIGHTBOX-plugin.' imageSrcs={[timeTracker]} />
      
      <Project projectDescription='En landing page utvecklat av React, SCSS.' imageSrcs={[sunnysideLandingpage]}  />
      
    </Grid>
  )
}
