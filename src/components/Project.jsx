import React from 'react'
import { Grid, Typography,Button } from '@mui/material'
import { ScrollSection } from './ScrollEffect'
import Carousel from 'react-material-ui-carousel'

const Image=({src,alt,style}) => {
  return <img alt={alt} src={src}  style={style}></img>
}

export default function Project({projectDescription,imageSrcs=[]}) {
    return (<Grid container component='section' className='project-border' >
      <Grid item component='p' xs={12} sm={6} pl={{ sm: 20 }} pt={ 30 } sx={{ alignSelf:'center' }} >
          <Typography variant='p' >{projectDescription}</Typography>
        </Grid> 
      <Grid item component='image' xs={12} sm={6} pr={{ sm: 20 }} pt={{sx:10,sm:30} } sx={{ textAlign: 'center' }}>
        
        <ScrollSection>
          <Carousel autoPlay={false} NavButton={({ onClick, next, prev }) => {
            return ( 
              imageSrcs.length > 1 &&
              <Button onClick={onClick} style={{ top: '40%', color: 'yellow' }} >{next && '>'}{prev && '<'}</Button>
            )
          }}>
            {imageSrcs.map((image, i) => {
              
            return <Image key={i} src={image} alt={image} style={{objectFit:'contain',width:'500px',height:'500px'}}/>
            }) }
          </Carousel>
        </ScrollSection>
       
      
        </Grid>
  </Grid>
     
  )
}
