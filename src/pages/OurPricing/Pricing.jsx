import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Grid,
  Box,
  Button,
  Typography,
  Container,
  Card,
  CardContent,
  CardMedia,
  Stack,
  IconButton,
} from "@mui/material";
import axios from "axios";
import { Close } from "@mui/icons-material";
import { Audio, Puff } from 'react-loader-spinner'

const Pricing = () => {
  const [data, setData] = useState([]);
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");
  const [auth, setAuth] = useState(false);
  const [fetch, setFetch] = useState([]);
  const [isLoading,setIsLoading] = useState(false)
  const navigate = useNavigate();

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
        setIsLoading(true)
        setTimeout(() => {
          setIsLoading(false);
        }, 2000)
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (id) => {
    axios
      .get(`http://localhost:4000/api/product/${id}`)
      .then((res) => {
        if (!auth) {
          toast.error("Login First", {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          setOrders([...orders, res.data.product]);
          localStorage.setItem(
            "products",
            JSON.stringify([...orders, res.data.product])
          );
        }
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
    <div>
      <Box>
        <Container>
          <Grid item container direction="row" mt={6}>
            <Grid
              item
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h4">
                {" "}
                <span style={{ color: "#abc502", fontWeight: "bold" }}>
                  OUR
                </span>{" "}
                PRICING
              </Typography>
              <Typography variant="body1" mt={4}>
                BEST HAIR CARE THEME ON THEMEFOREST.
              </Typography>
            </Grid>

            <Grid item container xs={12} mt={2}>
              {/* left side chair image */}
              <Grid item md={4} xs={12}>
                <Typography variant="h5" fontWeight="bold" mt={2}>
                  JOIN OUR GYMZONE CLUB
                </Typography>
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  sx={{ color: "#abc502" }}
                  mt={2}
                >
                  Lorem ipsum dolor sit.
                </Typography>
                <Typography variant="body2" mt={2}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsam ullam assumenda deserunt!
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#abc502",
                    borderRadius: "0",
                    height: "60px",
                    width: "150px",
                    mt: 4,
                    ":hover": { bgcolor: "#2d3630" },
                  }}
                >
                  View More
                </Button>
                <img
                  style={{ marginTop: "50px", width: "300px" }}
                  src="https://kodesolution.com/html/2016/haircare-html/haircare-html-b5/images/about/5.png"
                  alt="chair"
                />
              </Grid>
              {/* products */}
              <Grid
                item
                container
                md={8}
                xs={12}
                flexDirection="row"
                columnSpacing={2}
              >
                {isLoading ?
                <Grid item xs={12} display='flex' alignItems='center' justifyContent='center'>
                  <Puff
                height="80"
                width="80"
                radius="9"
                color="#abc502"
                ariaLabel="loading"
              />
                </Grid>
               :
               data.map((item, index) => {
                return (
                  <Grid item xs={12} md={6} key={item._id}>
                    <Card sx={{ maxWidth: "800px", boxShadow: "none" }}>
                      <CardMedia>
                        <Stack
                          direction="row"
                          spacing={6}
                          alignItems="center"
                          paddingLeft={3}
                          justifyContent="flex-start"
                        >
                          <img
                            src="https://i.pinimg.com/originals/e8/75/40/e87540606f0001441d853770c0f8d95d.jpg"
                            alt="img-1"
                            style={{
                              borderRadius: "50%",
                              height: "130px",
                              width: "130px",
                              border: "10px solid #EBEEF5",
                            }}
                          />
                          <Stack
                            direction="column"
                            justifyContent="flex-start"
                            alignItems="center"
                          >
                            <Typography variant="body1" fontWeight="bold">
                              {item.name}
                            </Typography>{" "}
                            <br />
                            <Typography
                              variant="h4"
                              sx={{ color: "#abc502" }}
                              fontWeight="bold"
                            >
                              ${item.price}
                            </Typography>
                          </Stack>
                        </Stack>
                      </CardMedia>
                      <CardContent>
                        <Typography variant="body1">
                          {item.description}
                        </Typography>
                        <Button
                          variant="contained"
                          sx={{
                            bgcolor: "#abc502",
                            borderRadius: "0",
                            height: "50px",
                            width: "100%",
                            mt: 4,
                            ":hover": { bgcolor: "#2d3630" },
                          }}
                          onClick={() => handleClick(item._id)}
                        >
                          Buy This Package
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                )
              })
               
               }
              </Grid>
            </Grid>

            {auth ? (
              <Grid container>
                <Box sx={{ width: "100%", bgcolor: "#F3FDE8", mt: 2, p: 5 }}>
                  <Typography variant="h4">Your list</Typography>
                  {fetch.length > 0 ? (
                    fetch.map((item) => {
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
                            <IconButton onClick={() => handleClose(item._id)}>
                              <Close />
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
                      );
                    })
                  ) : (
                    <Typography variant="h5" textAlign="center">
                      Select Any Appoinment
                    </Typography>
                  )}
                  <Grid
                    container
                    display="flex"
                    alignItems="right"
                    justifyContent="end"
                  >
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "#abc502",
                        borderRadius: "0",
                        height: "50px",
                        width: "100%",
                        mt: 4,
                        ":hover": { bgcolor: "#2d3630" },
                      }}
                      onClick={() => handleAppoinment()}
                    >
                      Book Appoinment
                    </Button>
                  </Grid>
                </Box>
              </Grid>
            ) : (
              <div>
                <Typography mt={8} variant="h4" textAlign="center">
                  Login first , Then book your appoinments
                </Typography>
              </div>
            )}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Pricing;
