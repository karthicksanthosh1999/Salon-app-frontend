import React, { useEffect, useState } from "react";
import {Fade } from 'react-reveal';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  Modal,
  TextField,
  Typography,
  tableFooterClasses,
} from "@mui/material";
import axios from "axios";
import { Close } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../sources/CarasolImgs/img1.jpg";
import img2 from "../sources/CarasolImgs/img2.jpg";
import img3 from "../sources/CarasolImgs/img3.jpg";
import img5 from "../sources/CarasolImgs/img5.jpg";
import './home.css'

const Home = () => {
  const [data, setData] = useState([]);
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");
  const [auth, setAuth] = useState(false);
  const [fetch, setFetch] = useState([]);
  const navigate = useNavigate();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/user/adminDetails")
      .then((res) => {
        console.log(res.data);
        if (res.data.Status === "Success") {
          setAuth(true);
        } else {
          setAuth(false);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/product/getProduct")
      .then((res) => {
        console.log(res.data.product);
        setData(res.data.product);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (id) => {
    axios
      .get(`http://localhost:4000/api/product/${id}`)
      .then((res) => {
        setOrders([...orders, res.data.product]);
        localStorage.setItem(
          "products",
          JSON.stringify([...orders, res.data.product])
        );
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    let fetch = localStorage.getItem("products");
    setFetch(JSON.parse(fetch));
  }, [fetch]);

  const handleAppoinment = () => {
    axios.defaults.withCredentials = true;
    axios
      .get("http://localhost:4000/api/user/adminDetails")
      .then((res) => {
        if (res.data.Status === "Success") {
          if (fetch.length > 0) {
            navigate("/appoinment");
          } else {
            toast.error("Select Any One Products", {
              position: toast.POSITION.TOP_CENTER,
            });
          }
        } else {
          toast.error("Login First", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const handleClose = (id) => {
    axios.get(`http://localhost:4000/api/product/${id}`).then((res) => {
      console.log(res.data);
      let fetchItems = [...JSON.parse(localStorage.getItem("products"))];
      fetchItems.forEach((items) => {
        if (items._id === res.data.product._id) {
          fetchItems.splice(fetchItems.indexOf(items), 1);
          toast.error("Delete Successfully", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      });
      localStorage.setItem("products", JSON.stringify(fetchItems));
    });
  };

  return (
    <div style={{ height: "100vh" }}>
      <div style={{ marginTop: "5px" }}>
        <Carousel showThumbs={false} infiniteLoop={true}>
          <div>
            <div className="relative">
            <img src={img1} height="600px"/>
              <div className="absolute">
              <Grid sx={{display:{xs:'none',md:'block'}}} container xs={6} md={12} direction="column" alignItems="center" justifyContent='flex-start' gap={3}>
              <Fade top>
                <Typography variant="body2" textAlign={"start"} sx={{color:'#fff'}}>Welcome to Hair Saloon</Typography>
              </Fade>
              <Fade top>
                <Typography variant="h2" fontWeight='bold'sx={{color:'#fff'}}>POPULAR BARBER</Typography>
                <Typography variant="h3" textAlign={"start"}  fontWeight='bold' sx={{color:'#fff'}}>HAIR <span style={{color:'#abc502'}}> SALOON </span></Typography>
              </Fade>
              <Fade top>
                <Button sx={{bgcolor:"#abc502", ":hover":{bgcolor:'#000',display:'-webkit-flex'}}} variant='contained'>Contact Us</Button>
              </Fade>
              </Grid>
              </div>
            </div>
          </div>
          <div>
            <img src={img2} height="600px"/>
          </div>
          <div>
            <img src={img3} height="600px"/>
          </div>
          <div>
            <img src={img5} height="600px"/>
          </div>
        </Carousel>
      </div>
      {/* <Box
        bgcolor="#ff6300"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Typography variant="h4" color="#fff">
          Product List
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center" mt={3}>
        <TextField
          label="Search Products"
          autoComplete="off"
          variant="standard"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>
      <Container sx={{ mt: 3 }}>
        <Grid container item xs={12}>
          {data
            .filter((item) => {
              if (search === " ") {
                return item;
              }
              if (item.name.toLowerCase().includes(search.toLowerCase())) {
                return item;
              }
            })
            .map((item) => {
              return (
                <Grid xs={12} sm={6} md={4} lg={3} item mt={3} key={item._id}>
                  <Box>
                    <Card sx={{ maxWidth: 275 }}>
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          textAlign="center"
                        >
                          {item.name}
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h4"
                          component="div"
                          textAlign="center"
                        >
                          {item.price}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          textAlign="center"
                        >
                          {item.description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          fullwidth
                          variant="contained"
                          onClick={() => handleClick(item._id)}
                        >
                          Add To List
                        </Button>
                      </CardActions>
                    </Card>
                  </Box>
                </Grid>
              );
            })}
        </Grid>
        
        {auth
         ? (
          
            <Grid container>
              <Box sx={{ width: "100%", bgcolor: "#F3FDE8", mt: 2, p: 5 }}>
                <Typography variant="h4">Your list</Typography>
                {
                    fetch.map((item)=>{
                      return (
                        <Card
                            key={item._id}
                          sx={{
                            maxWidth: "100%",
                            m: 4,
                            mb: 3,
                            p: 3,
                            bgcolor: "#F4EEEE",
                            boxShadow: 10,
                          }}
                        >
                          <Grid
                            container
                            display="flex"
                            alignItems="center"
                            justifyContent="end"
                          >
                            <IconButton onClick={()=>handleClose(item._id)}>
                              <Close/>
                            </IconButton>
                          </Grid>
                          <Grid container>
                            <Grid item xs={4}>
                              <Typography variant="h5">{item.name}</Typography>
                              <Typography variant="h5">{item.price}</Typography>
                            </Grid>

                            <Grid item xs={4}>
                              <Typography variant="h5">
                                Book Appoinment Date
                              </Typography>
                            </Grid>
                          </Grid>
                        </Card>
                      )
                    })
                }
                <Grid
                  container
                  display="flex"
                  alignItems="right"
                  justifyContent="end"
                >
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => handleAppoinment()}
                  >
                    Book Appoinment
                  </Button>
                </Grid>
              </Box>
            </Grid>
        
        ) : (
          <div>
            <Typography mt={8} variant="h4" textAlign='center' >Login first , Then book your appoinments</Typography>
          </div>
        )
        }
        <ToastContainer />
      </Container> */}
    </div>
  );
};

export default Home;
