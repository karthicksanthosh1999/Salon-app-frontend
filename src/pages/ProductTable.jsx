import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
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

const ProductTable = ({local}) => {

  const [fname,setFname] = useState('')
  const [lname,setlname] = useState('')
  const [mobile,setMobile] = useState('')
  const [email,setEmail] = useState('')
  const [products,setProducts] = useState([])

  // const navigate = useNavigate();

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("products")) || "[]");
    let productList = JSON.parse(localStorage.getItem("products"));
    console.log(productList)    
  }, []);

    //Fetch User Details
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/user/adminDetails")
      .then((res) => {
        console.log(res.data);
        if (res.data.Status === "Success") {
            setFname(res.data.fname)
            setlname(res.data.lname)
            setEmail(res.data.email)
            setMobile(res.data.mobile)
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClose = (id) => {
    axios.get(`http://localhost:4000/api/product/${id}`).then((res) => {
      console.log(res.data);
      let fetchItems = [...JSON.parse(localStorage.getItem("products"))]

      fetchItems.forEach((items) => {
        if (items._id === res.data.product._id) {
          fetchItems.splice(fetchItems.indexOf(items), 1)
          toast.error("Delete Successfully", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      });
      localStorage.setItem("products", JSON.stringify(fetchItems));
    });
  };

  
  const dateHandler = () =>{
    const details = {fname,lname,email,mobile,products}
      axios.post('http://localhost:4000/api/booking/',{...details})
        .then(res=>{
          console.log(res.data)
        }).catch(err=>console.log(err))
  }

  return (
    <div>
            {local.map((item) => {
              return (
                <div>
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
                </div>
              )
            })}
    </div>
  );
};

export default ProductTable;
