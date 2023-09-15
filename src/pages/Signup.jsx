import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { PeopleAltOutlined } from "@mui/icons-material";

const Signup = () => {
  const navigate = useNavigate();
  const [numMeg, setNumMeg] = useState("")

  const [values, setValues] = useState({
    fname: "",
    lname: "",
    mobile: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/user/signup", values)
      .then((res) => {
        console.log(res.data);
        setValues(res.data);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div style={{ position: "relative" }}>
        <img
          src="https://img.freepik.com/premium-photo/empty-light-wall-background_665280-9234.jpg?w=360"
          alt="img1"
          style={{ width: "100%", height: "200px" }}
        />
        <div
          style={{
            position: "absolute",
            top: "35%",
            left: "40%",
            width: "200px",
            height: "100px",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            textAlign="center"
            sx={{ color: "#fff" }}
          >
            My Account
          </Typography>
        </div>
      </div>
      <Container component="main" maxWidth="sm">
        <Grid container mt={5}>
          <Grid
            container
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            gap={2}
          >
            <Button
              variant="outlined"
              sx={{ color: "#abc502" }}
              onClick={() => navigate("/login")}
            >
              <PeopleAltOutlined />
            </Button>
            <Typography
              variant="body1"
              fontWeight="bold"
              sx={{ color: "#808080" }}
            >
              {" "}
              Don't have an Account? Register Now.
            </Typography>
          </Grid>
          <Divider sx={{ border: 1 }} variant="fullWidth" />
          <Grid container xs={12} mt={3}>
            <Typography variant="body1" sx={{ color: "#808080" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi id perspiciatis facilis nulla possimus quasi, amet qui.
              Ea rerum officia, aspernatur nulla neque nesciunt alias.
            </Typography>
          </Grid>
          <Grid container mt={3}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  margin="normal"
                  placeholder="First Name"
                  required
                  onChange={(e) =>
                    setValues({ ...values, fname: e.target.value })
                  }
                  autoFocus
                  name="fname"
                  type="text"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  margin="normal"
                  placeholder="Last Name"
                  onChange={(e) =>
                    setValues({ ...values, lname: e.target.value })
                  }
                  required
                  name="lname"
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
                margin="normal"
                size="large"
                type="email"
                name="email"
                fullWidth
                placeholder="Email"
              />
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  margin="normal"
                  placeholder="Mobile"
                  required
                  onChange={(e) =>
                    setValues({ ...values, mobile: e.target.value })
                  }
                  type="number"
                  name="mobile"
                />
                {/* <p>{numMeg}</p> */}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  margin="normal"
                  placeholder="Password"
                  onChange={(e) =>
                    setValues({ ...values, password: e.target.value })
                  }
                  required
                  type="password"
                  name="password"
                />
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  fullwidth
                  type="button"
                  onClick={handleSubmit}
                  sx={{
                    color: "#fff",
                    bgcolor: "#abc502",
                    boxShadow: 3,
                    ":hover": {
                      bgcolor: "",
                      boxShadow: 3,
                    },
                  }}
                >
                  Register Now
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Signup;
