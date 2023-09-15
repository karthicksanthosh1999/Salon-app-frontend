import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from "react-responsive-carousel";
import img1 from "../../sources/HairSpesalist/img-1.jpg";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import { Facebook, Twitter, YouTube } from "@mui/icons-material";
import "./experts.css";

const ExpertsCarsole = () => {
  return (
    <div>
      <Container>
        <Carousel
          autoPlay
          emulateTouch
          centerMode
          showThumbs={false}
          swipeable
          centerSlidePercentage={40}
          infiniteLoop
          showStatus={false}
        >
          <div>
            <div className="container">
              <img src={img1} alt="Avatar" className="image" />
              <div className="overlay">
                <div className="btn">
                  <IconButton size="large" sx={{bgcolor:'#fff',color:'#abc502', ":hover":{bgcolor:'#abc502',color:'#fff'} }}>
                    <YouTube/>
                  </IconButton>
                  <IconButton size="large" sx={{bgcolor:'#fff',ml:1,mr:1,color:'#abc502', ":hover":{bgcolor:'#abc502',color:'#fff'} }}>
                    <Twitter/>
                  </IconButton>
                  <IconButton size="large" sx={{bgcolor:'#fff',color:'#abc502', ":hover":{bgcolor:'#abc502',color:'#fff'} }}>
                    <Facebook/>
                  </IconButton>
                </div>
              <div className="overlay-txt">
                <div className="text">
                  <h4>Hansika Motwani</h4> 
                  <h6>Hair Style</h6> 
                </div>
              </div>
              </div>
            </div>
          </div>
          <div>
            <div className="container">
            <img src={img1} alt="Avatar" className="image" />
              <div className="overlay">
                <div className="btn">
                  <IconButton size="large" sx={{bgcolor:'#fff',color:'#abc502', ":hover":{bgcolor:'#abc502',color:'#fff'} }}>
                    <YouTube/>
                  </IconButton>
                  <IconButton size="large" sx={{bgcolor:'#fff',ml:1,mr:1,color:'#abc502', ":hover":{bgcolor:'#abc502',color:'#fff'} }}>
                    <Twitter/>
                  </IconButton>
                  <IconButton size="large" sx={{bgcolor:'#fff',color:'#abc502', ":hover":{bgcolor:'#abc502',color:'#fff'} }}>
                    <Facebook/>
                  </IconButton>
                </div>
              <div className="overlay-txt">
                <div className="text">
                <h4>Hansika Motwani</h4> 
                  <h6>Hair Style</h6> 
                </div>
              </div>
              </div>
            </div>
          </div>
          <div>
          <div className="container">
            <img src={img1} alt="Avatar" className="image" />
              <div className="overlay">
                <div className="btn">
                  <IconButton size="large" sx={{bgcolor:'#fff',color:'#abc502', ":hover":{bgcolor:'#abc502',color:'#fff'} }}>
                    <YouTube/>
                  </IconButton>
                  <IconButton size="large" sx={{bgcolor:'#fff',ml:1,mr:1,color:'#abc502', ":hover":{bgcolor:'#abc502',color:'#fff'} }}>
                    <Twitter/>
                  </IconButton>
                  <IconButton size="large" sx={{bgcolor:'#fff',color:'#abc502', ":hover":{bgcolor:'#abc502',color:'#fff'} }}>
                    <Facebook/>
                  </IconButton>
                </div>
              <div className="overlay-txt">
                <div className="text">
                <h4>Hansika Motwani</h4> 
                  <h6>Hair Style</h6>  
                </div>
              </div>
              </div>
            </div>
          </div>
          <div>
          <div className="container">
            <img src={img1} alt="Avatar" className="image" />
              <div className="overlay">
                <div className="btn">
                  <IconButton size="large" sx={{bgcolor:'#fff',color:'#abc502', ":hover":{bgcolor:'#abc502',color:'#fff'} }}>
                    <YouTube/>
                  </IconButton>
                  <IconButton size="large" sx={{bgcolor:'#fff',ml:1,mr:1,color:'#abc502', ":hover":{bgcolor:'#abc502',color:'#fff'} }}>
                    <Twitter/>
                  </IconButton>
                  <IconButton size="large" sx={{bgcolor:'#fff',color:'#abc502', ":hover":{bgcolor:'#abc502',color:'#fff'} }}>
                    <Facebook/>
                  </IconButton>
                </div>
              <div className="overlay-txt">
                <div className="text">
                <h4>Hansika Motwani</h4> 
                  <h6>Hair Style</h6>  
                </div>
              </div>
              </div>
            </div>
          </div>
        </Carousel>
      </Container>
    </div>
  );
};

export default ExpertsCarsole;
