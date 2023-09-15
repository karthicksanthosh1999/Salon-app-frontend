import React from "react";
import {Box, Grid, Typography,Button} from '@mui/material'
import {useSpring, animated} from 'react-spring'

function Number({n}){
    const {number} = useSpring({
        from :{number : 0},
        number : n,
        delay : 200,
        config : {mass:1, tension: 20, friction: 10}
    })
    return <animated.div>{number.to((n)=>n.toFixed(0))}</animated.div>
} 
const Counter = () => {
  return (
    <div>
      <center>
          <Grid item  container xs={12} bgcolor="#f6f4f3" mt={5} padding={5} mb={3}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Typography variant="h2" sx={{ color: "#abc502" }}>
                <Number n={745} />
              </Typography>
              <Typography variant="h6" mt={2} fontWeight="bold">
                Happy People
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Typography variant="h2" sx={{ color: "#abc502" }}>
                <Number n={984} />
              </Typography>
              <Typography variant="h6" mt={2} fontWeight="bold">
                People Likes
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Typography variant="h2" sx={{ color: "#abc502" }}>
                <Number n={106} />
              </Typography>
              <Typography variant="h6" mt={2} fontWeight="bold">
                Award Won
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Typography variant="h2" sx={{ color: "#abc502" }}>
                <Number n={496} />
              </Typography>
              <Typography variant="h6" mt={2} fontWeight="bold">
                Cup Of Coffee
              </Typography>
            </Grid>
          </Grid>
      </center>
    </div>
  );
};

export default Counter;
