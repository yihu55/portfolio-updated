import React from "react";
import NameIcon from "./NameIcon";
import { Grid, Typography } from "@mui/material";

function Icon() {
  return (
    <Grid container pt={10}  pb={30}>
    <Grid item xs={12}>
      <NameIcon />
    </Grid>
      <Grid item xs={12}>
       
        <Typography variant="subtitle1" sx={{display:'flex',justifyContent:'center', alignItem:'center'}}>
        Fullstack webbutvecklare
        </Typography>
    </Grid> 
    </Grid>
  
    
  );
}

export default Icon;