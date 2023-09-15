import React from "react";
import { Grid, Box, Button, Typography, Container, Stack } from "@mui/material";
import "./about.css";
import { pngs } from "../../datas/imgData";

const About = () => {
  return (
    <div>
      <Container>
        <Grid container item  direction="row">
          <Grid item md={6} xs={12}>
            <div
              style={{
                position: "relative",
                width: "400px",
                height: "200px",
                color: "white",
              }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZqPO6nknGGvMu56zSYgqSKykkvQHfE5JpVA&usqp=CAU"
                alt="dark Room"
                style={{ width: "495px", height: "450px" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "40px",
                  right: "20px",
                  left: "30px",
                  bottom: "20px",
                  width: "380px",
                  height: "200px",
                }}
              >
                <Typography
                  variant="h5"
                  color="#fff"
                  mt={2}
                  sx={{ color: "#abc502" }}
                >
                  OPENING HOURS!
                </Typography>
                <Typography variant="h5" color="#fff">
                  CHECK OUR CLASS HERE
                </Typography>
                <Grid item  container xs={12} direction="column" mt={4}>
                  <Typography fontWeight="bold" mt={1} variant="body2">
                    MONDAY - FRIDAY 9.00 - 20.00
                  </Typography>
                  <Typography fontWeight="bold" mt={1} variant="body2">
                    MONDAY - FRIDAY 9.00 - 20.00
                  </Typography>
                  <Typography fontWeight="bold" mt={1} variant="body2">
                    MONDAY - FRIDAY 9.00 - 20.00
                  </Typography>
                </Grid>
                <Typography mt={3} variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ullam velit, a reiciendis deleniti, blanditiis aliquam quam,
                  iste voluptate saepe provident quasi numquam, inventore. Sunt,
                  facilis!.
                </Typography>
                <Button
                  size="large"
                  variant="contained"
                  sx={{
                    mt: 4,
                    bgcolor: "#abc502",
                    borderRadius: 0,
                    border: "none",
                    ":hover": { bgcolor: "#212529" },
                  }}
                >
                  Online Reservation
                </Button>
              </div>
            </div>
          </Grid>

          <Grid item md={6} xs={12} mt={4}>
            <Typography
              fontWeight="bold"
              sx={{ color: "#abc502" }}
              variant="body1"
            >
              WELCOME TO THE SALONZONE
            </Typography>
            <Typography variant="h5" fontWeight="bold" mt={2}>
              OBCAECATI AD TEMPORA VITAE QUIDEM DOLORES.
            </Typography>
            <Typography variant="body1" mt={2}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
              ex quasi, pariatur harum! Tempora esse quae in ea reprehenderit
              veritatis molestiae atque, incidunt aut explicabo voluptatum,
              quibusdam temporibus! Quasi, culpa.
            </Typography>
            <Grid container item xs={12} mt={3} gap={0}>
              {pngs.map((item) => {
                return (
                  <Grid item lg={3} md={4} xs={6} key={item.id}>
                    <img
                      style={{
                        height: "120px",
                        width: "120px",
                        borderRadius: "50%",
                      }}
                      className="avatar"
                      src={item.img}
                      alt="img-1"
                    ></img>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default About;
