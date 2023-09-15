import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import img1 from '../../sources/HairSpesalist/img-1.jpg'
import ExpertsCarsole from "./ExpertsCarsole";

const OurExperts = () => {
  return (
    <div style={{backgroundColor:'#ebeef5'}}>
        <Grid container direction="column" justifyContent="center" alignItems="center"
        mt={4} paddingTop={5}>
        <Typography variant="h4">
          {" "}
          <span style={{ color: "#abc502", fontWeight: "bold" }}>OUR</span>{" "}
          SERVICES
        </Typography>
        <Typography variant="body1" mt={4}>
          BEST HAIR CARE THEME ON THEMEFOREST.
        </Typography>

        <Grid item xs={12} mb={3}>
           <ExpertsCarsole/>
        </Grid>
        </Grid>
    </div>
  )
}

export default OurExperts