import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Card,
  Container,
  Divider,
  FormControl,
  Grid,
  IconButton,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PeopleAltOutlined } from "@mui/icons-material";

const Login = () => {
  const navigate = useNavigate();
  const[message , setMessage] = useState("")
  const[passMsg , setPassMsg] = useState("")
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/user/login", values)
      .then((res) => {
        console.log(res.data);
        setValues(res.data);

        const regExpEmail = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/
            if(regExpEmail.test(values.email)){
              setPassMsg("Email is valid")
            }else if(!regExpEmail.test(values.email)){
              setPassMsg("Email is not valid")
            }else if(values.email === ""){
              setPassMsg("")
            }

        const regExpPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
            if(regExpPass.test(values.password)){
              setMessage("Password is valid")
              console.log('Success')
              if (res.data.Status === "Authendication Completed") {
                if (res.data.role === "admin") {
                  navigate("/product/list");
                  window.location.reload();
                } else {
                  navigate("/");
                  window.location.reload();
                }
              }

            }else if(!regExpPass.test(values.password)){
              setMessage("Password is not valid")
            }else if(values.password === ""){
                setMessage("")
            }

        if (res.data.message === "Password is incorrect") {
          toast.info("Password is incorrect", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      
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
            <Typography
              variant="body1"
              fontWeight="bold"
              sx={{ color: "#808080" }}
            >
              Login
            </Typography>
          </Grid>
          <Divider sx={{ border: 1 }} variant="fullWidth" />
          <Grid container xs={12} mt={3}>
            <Typography variant="body1" sx={{ color: "#808080" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Typography>
          </Grid>
          <Grid container mt={3}>
            
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  margin="normal"
                  placeholder="Email"
                  autoFocus
                  onChange={(e) =>
                    setValues({ ...values, email: e.target.value })
                  }
                  type="email"
                  name="email"
                />
                 <p>{passMsg}</p>
               
              </Grid>
            </Grid>
            <Grid container xs={12}>
              <TextField
                required
                type="password"
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
                name="password"
                fullWidth
                margin="normal"
                placeholder="Password"
              />
               <p>{message}</p>
            </Grid>
            <Grid container>
              <Grid item xs={6} mt={2}>
                <Button
                  variant="contained"
                  size="large"
                  fullwidth
                  type="button"
                  onClick={handleSubmit}
                  sx={{
                    color: "#fff",
                    bgcolor: "#212529",
                    boxShadow: 3,
                    ":hover": {
                      bgcolor: "#fff",
                      color: "#212529",
                      boxShadow: 3,
                    },
                  }}
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
