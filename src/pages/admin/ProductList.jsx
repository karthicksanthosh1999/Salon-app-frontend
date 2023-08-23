import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/product/getProduct")
      .then((res) => {
        console.log(res.data.product);
        setData(res.data.product);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:4000/api/product/${id}`);
  };

  return (
    <div style={{height:'100vh',backgroundColor:'#DCDEB4'}}>
      <Box
        bgcolor="#ff6300"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Typography variant="h4" color="#fff">
          Product List
        </Typography>
      </Box>
      <Grid container display='flex' alignItems='right' justifyContent='right' sx={{mt:2}}>
        <Grid item >
          <Button variant="contained" startIcon={<Add />} onClick={()=>navigate('/product/create')}>
            Add Product
          </Button>
        </Grid>
      </Grid>
      <Container sx={{mt:3}} display='flex' alignItems='center' justifyContent='center'>
      <Grid container xs={12} >
        {data.map((item) => {
          return (
            <Grid  xs={12} sm={6} md={4} lg={3} item mt={3} key={item._id}>
              <Box >
              <Card sx={{ maxWidth: 275 }} >
                <CardContent >
                  <Typography gutterBottom variant="h5" component="div" textAlign='center'>
                    {item.name}
                  </Typography>
                  <Typography gutterBottom variant="h4" component="div" textAlign='center'>
                    {item.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" textAlign='center'>
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ display:'flex',justifyContent:'center',alignItems:'center'}}>
                  <Button
                    onClick={() => deleteProduct(item._id)}
                    size="small"
                    variant="contained"
                    sx={{ bgcolor: "red" }}
                  >
                    Delete
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => navigate(`/product/${item._id}`)}
                  >
                    Update
                  </Button>
                </CardActions>
              </Card>
              </Box>
            </Grid>
          );
        })}
      </Grid>
      </Container>
    </div>
  );
};

export default ProductList;
