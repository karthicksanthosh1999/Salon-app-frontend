import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()
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
        navigate('/')
      })
      .catch((err) => console.log(err));
  };
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(#7a49b7, #42A1D3)",
        height: "100vh",
      }}
    >
      <Box bgcolor="#7E5665">
        <Typography variant="h5" color="#fff">
          Sign Up
        </Typography>
      </Box>
      <Container>
        <center>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  onChange={(e) =>
                    setValues({ ...values, fname: e.target.value })
                  }
                  sx={{ color: "#fff" }}
                  size="small"
                  type="text"
                  label="First Name"
                  name="fname"
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  onChange={(e) =>
                    setValues({ ...values, lname: e.target.value })
                  }
                  size="small"
                  type="text"
                  name="lname"
                  margin="normal"
                  fullWidth
                  label="Last Name"
                />
              </Grid>
              <TextField
                required
                onChange={(e) =>
                  setValues({ ...values, mobile: e.target.value })
                }
                size="small"
                type="number"
                name="mobile"
                margin="normal"
                fullWidth
                label="Mobile No"
              />
              <TextField
                required
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
                size="small"
                type="email"
                name="email"
                margin="normal"
                fullWidth
                label="Email"
              />
              <TextField
                required
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
                size="small"
                type="password"
                name="password"
                margin="normal"
                fullWidth
                label="Password"
              />
              <Button variant="contained" type="submit" fullWidth>
                Submit
              </Button>
            </Grid>
          </form>
        </center>
      </Container>
    </div>
  );
};

export default Signup;
