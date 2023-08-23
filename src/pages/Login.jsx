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
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  const [values,setValues] = useState({
    email:'',
    password : ''
  })
  axios.defaults.withCredentials = true; 
  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:4000/api/user/login',values)
      .then((res)=>{
        console.log(res.data)
        setValues(res.data)
        if(res.data.Status === "Authendication Completed"){
          if(res.data.role === "admin"){
              navigate('/product/list')
          }else{
            navigate('/')
          }
        }
      })
      .catch(err=>console.log(err))
  }
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(#7a49b7, #42A1D3)",
        height: "100vh",
      }}>
      <Box bgcolor="#7E5665">
        <Typography variant="h5" color="#fff">
          Login
        </Typography>
      </Box>
      <Container>
        <center>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={1}>
              
              <TextField
                required
                size="small"
                type="email"
                name="email"
                margin="normal"
                fullWidth
                label="Email"
                onChange={(e)=>setValues({...values,email:e.target.value})}

              />
              <TextField
                required
                size="small"
                type="password"
                name="password"
                margin="normal"
                fullWidth
                label="Password"
                onChange={(e)=>setValues({...values,password:e.target.value})}
              />
              <Button variant="contained" type="submit" fullWidth>
                Login
              </Button>
            </Grid>
          </form>
        </center>
      </Container>
    </div>
  );
};

export default Login;
