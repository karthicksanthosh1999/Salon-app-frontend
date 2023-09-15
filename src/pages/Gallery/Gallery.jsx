import React from "react";
import {
  Grid,
  Typography,
  Button,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Stack,
  IconButton,
} from "@mui/material";
import "./gallery.css";
import { YouTube } from "@mui/icons-material";
import { pricing, pricing1 } from "../../datas/imgData";

const Gallery = () => {
  return (
    <div>
      <Grid container direction="column">
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          mt={3}
        >
          <Typography variant="h4">
            {" "}
            <span style={{ color: "#abc502", fontWeight: "bold" }}>
              OUR
            </span>{" "}
            GALARY
          </Typography>
          <Typography variant="body1" mt={4}>
            BEST HAIR CARE THEME ON THEMEFOREST.
          </Typography>
        </Grid>

        {/* First Half */}
        <Grid
          container
          direction="row"
          display="flex"
          alignItems="center"
          justifyContent="center"
          mt={3}
          spacing={1}
          padding="30px"
        >
          {pricing.map((item) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} mt={2} key={item.id}>
                <div className="container1">
                  <img
                    src={item.img}
                    alt={item.title}
                    height={250}
                    width={250}
                  />
                  <div className="overlay1">
                    <div className="btn">
                      <IconButton
                        size="large"
                        sx={{
                          bgcolor: "#fff",
                          color: "#abc502",
                          ":hover": { bgcolor: "#abc502", color: "#fff" },
                        }}
                      >
                        <YouTube />
                      </IconButton>
                    </div>
                    <div className="text1">{item.title}</div>
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>

        {/* Second Half */}
        <Grid
          container
          direction="row"
          display="flex"
          alignItems="center"
          justifyContent="center"
          spacing={1}
          padding="30px"
        >
          {pricing1.map((item) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} mt={2} key={item.id}>
                <div className="container1">
                  <img
                    src={item.img}
                    alt={item.title}
                    height={250}
                    width={250}
                  />
                  <div className="overlay1">
                    <div className="btn">
                      <IconButton
                        size="large"
                        sx={{
                          bgcolor: "#fff",
                          color: "#abc502",
                          ":hover": { bgcolor: "#abc502", color: "#fff" },
                        }}
                      >
                        <YouTube />
                      </IconButton>
                    </div>
                    <div className="text1">{item.title}</div>
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default Gallery;
