import { Button, Divider, Grid, IconButton, Link, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import {PhoneAndroid,LocationOnOutlined,DraftsOutlined, ArrowForward, Twitter, Facebook, Instagram, Google, YouTube, EmailOutlined} from '@mui/icons-material';
import logo from '../../sources/Logo/logo.png'

const Footer = () => {
  return (
    <div>
      <Grid container item xs={12} bgcolor='#1e1c1c' mt={5}>
        {/* Location and Details */}
      <Grid container item direction='column' justifyContent="flex-start" alignItems="baseline" md={4} xs={12} >
            <Grid container direction='row' justifyContent='center' alignItems='center' mt={4} gap={3}>
                <Grid container direction='row'>
                <img src={logo} alt='logo'/>
                </Grid>
            </Grid>
            <Grid container direction='row' justifyContent='center' alignItems='center' mt={4} gap={3}>
                <Grid container direction='row'>
                <PhoneAndroid sx={{color:'#9fe15b',fontSize:'50px'}} fontSize='large'/>
                </Grid>
                <Grid container direction='column' gap={1}>
                <Typography sx={{color:'#fff'}} variant='body1'>+510-455-6735</Typography>
                <Typography sx={{color:'#b8bfbb'}} variant='body2'>Phone line</Typography>
                </Grid>
            </Grid>
            <Grid container direction='row' justifyContent='center' alignItems='center' mt={4} gap={3}>
                <Grid container direction='row'>
                <LocationOnOutlined sx={{color:'#9fe15b',fontSize:'50px'}} fontSize='large'/>
                </Grid>
                <Grid container direction='column' gap={1}>
                <Typography sx={{color:'#fff'}} variant='body1'>+510-455-6735</Typography>
                <Typography sx={{color:'#b8bfbb'}} variant='body2'>Phone line</Typography>
                </Grid>
            </Grid>
            <Grid container direction='row' justifyContent='center' alignItems='center' mt={4} gap={3}>
                <Grid container direction='row'>
                <DraftsOutlined sx={{color:'#9fe15b',fontSize:'50px'}} fontSize='large'/>
                </Grid>
                <Grid container direction='column' gap={1}>
                <Typography sx={{color:'#fff'}} variant='body1'>+510-455-6735</Typography>
                <Typography sx={{color:'#b8bfbb'}} variant='body2'>Phone line</Typography>
                </Grid>
            </Grid>
      </Grid>
      {/* Links */}
      <Grid container item direction='column' justifyContent='flex-start' alignItems='center'  md={4} xs={12}  mt={4}>
          <Grid container direction='row' display='flex' justifyContent='center' alignItems='baseline'>
            <Typography fontWeight='bold' color='white' variant="h5">Links</Typography>
          </Grid>
          <Grid container direction='column' display='flex' justifyContent='center' alignItems='baseline' gap={3} mt={4}>
            <Typography variant='body2'>
              <Link underline="none" sx={{color:'#bbb3a5',":hover":{color:'#fff'}}}>
                  Our Project
              </Link>
            </Typography>
            <Typography variant='body2'>
              <Link underline="none" sx={{color:'#bbb3a5',":hover":{color:'#fff'}}}>
              About Us
              </Link>
            </Typography>
            <Typography variant='body2'>
              <Link underline="none" sx={{color:'#bbb3a5',":hover":{color:'#fff'}}}>
              New Compaign
              </Link>
            </Typography>
            <Typography variant='body2'>
              <Link underline="none" sx={{color:'#bbb3a5',":hover":{color:'#fff'}}}>
              Upcoming Event
              </Link>
            </Typography>
            <Typography variant='body2'>
              <Link underline="none" sx={{color:'#bbb3a5',":hover":{color:'#fff'}}}>
              Volunteers
              </Link>
            </Typography>
            
            
          </Grid>
      </Grid>
      {/* Newsletter */}
      <Grid container item direction='column' justifyContent='flex-start' alignItems='center'  md={4} xs={12}  mt={4}>
      <Grid container direction='row' display='flex' justifyContent='center' alignItems='baseline'>
            <Typography fontWeight='bold' color='white' variant="h5">Newsletter</Typography>
          </Grid>
          <Grid container direction='column' display='flex' justifyContent='center' alignItems='baseline' gap={3} mt={4}>
            <Typography variant='body2' sx={{color:'#bbb3a5'}}>Sign up now to get daily latest news & updates from us</Typography>
            <Grid container direction='row' display='flex' justifyContent='center' alignItems="center">
            <TextField autoComplete='off' placeholder='Enter Your Name...' sx={{bgcolor:'#272f2a',color:'#5ea20e'}}/>
            <Button sx={{color:'#5ea20e', height:'60px'}} size='large'><ArrowForward/></Button>
            </Grid>
          </Grid>
      </Grid>
        <Divider variant='fullWidth'/>
      <Grid container item display='flex' justifyContent='space-around' alignItems='center' padding={5} xs={12}>
          <Grid item xs={6} display='flex' justifyContent='space-around' alignItems='center'>
            <Typography sx={{color:'#bbb3a5'}} variant='body1'>© Copyright 2023 by Karthick.S</Typography>
          </Grid>
          <Grid item xs={6}display='flex' justifyContent='space-around' alignItems='center'>
            <IconButton sx={{color:'#bbb3a5', borderRadius:'50%', ":hover":{bgcolor:'#53a20e',color:'#fff'}}}>
              <Twitter/>
            </IconButton>
            <IconButton sx={{color:'#bbb3a5', borderRadius:'50%', ":hover":{bgcolor:'#53a20e',color:'#fff'}}}>
              <Facebook/>
            </IconButton>
            <IconButton sx={{color:'#bbb3a5', borderRadius:'50%', ":hover":{bgcolor:'#53a20e',color:'#fff'}}}>
              <Instagram/>
            </IconButton>
            <IconButton sx={{color:'#bbb3a5', borderRadius:'50%', ":hover":{bgcolor:'#53a20e',color:'#fff'}}}>
              <Google/>
            </IconButton>
            <IconButton sx={{color:'#bbb3a5', borderRadius:'50%', ":hover":{bgcolor:'#53a20e',color:'#fff'}}}>
              <YouTube/>
            </IconButton>
          </Grid>
      </Grid>
      </Grid>
    </div>
  )
}

export default Footer