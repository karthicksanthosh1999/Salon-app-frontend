import { Box, Container, Grid, Typography } from "@mui/material";
import { icons, icons1 } from "../../datas/imgData";
import React from "react";

const Services = () => {
  return (
    <div>
      <Container>
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          mt={4}
        >
          <Typography variant="h4">
            {" "}
            <span style={{ color: "#abc502", fontWeight: "bold" }}>
              OUR
            </span>{" "}
            SERVICES
          </Typography>
          <Typography variant="body1" mt={4}>
            BEST HAIR CARE THEME ON THEMEFOREST.
          </Typography>
        </Grid>
        <Grid item container>
          <Grid
            item
            container
            xs={12}
            direction="row"
            alignItems="center"
            justifyContent="space-evenly"
            mt={4}
          >
            {icons.map((items) => {
              return (
                <Grid
                  item
                  container
                  sm={6}
                  md={4}
                  xs={12}
                  lg={3}
                  direction="column"
                  alignItems="center"
                  justifyContent="space-evenly"
                  gap={1}
                  key={items.id}
                >
                  <Box
                    bgcolor="#abc502"
                    borderRadius="50%"
                    height="100px"
                    width="100px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <img
                      color="#fff"
                      src={items.img}
                      alt="img-1"
                      height="50px"
                      width="50px"
                    />
                  </Box>
                  <Typography fontWeight="bold" textAlign="center" variant="h6">
                    MAKE UP
                  </Typography>
                  <Typography
                    padding="5px 5px"
                    gutterBottom
                    textAlign="center"
                    variant="body1"
                  >
                    {items.description}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>

          <Grid
            item
            container
            xs={12}
            direction="row"
            alignItems="center"
            justifyContent="space-evenly"
            mt={4}
          >
            {icons1.map((items) => {
              return (
                <Grid
                  item
                  container
                  sm={6}
                  md={4}
                  xs={12}
                  lg={3}
                  direction="column"
                  alignItems="center"
                  justifyContent="space-evenly"
                  gap={1}
                  key={items.id}
                >
                  <Box
                    bgcolor="#abc502"
                    borderRadius="50%"
                    height="100px"
                    width="100px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <img
                      style={{ color: "#fff" }}
                      src={items.img}
                      alt="img-1"
                      height="50px"
                      width="50px"
                    />
                  </Box>
                  <Typography textAlign="center" fontWeight="bold" variant="h6">
                    {items.name}
                  </Typography>
                  <Typography
                    padding="5px 5px"
                    gutterBottom
                    textAlign="center"
                    variant="body1"
                  >
                    {items.description}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Services;
