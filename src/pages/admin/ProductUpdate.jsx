import { Box, Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductUpdate = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescripiton] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/product/${id}`)
      .then((res) => {
        setName(res.data.product.name);
        setPrice(res.data.product.price);
        setDescripiton(res.data.product.description);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const updateProduct = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:4000/api/product/${id}`, {
        name,
        price,
        description,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/product/list");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Grid constainer={true} item xs={12}>

        <form onSubmit={updateProduct}>
          <TextField
            fullWidth
            margin="normal"
            placeholder="Enter Product Name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            placeholder="Enter Product Price"
            type="number"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            placeholder="Enter Product Description"
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescripiton(e.target.value)}
          />
          <Button variant="contained" fullWidth type="submit">
            Update
          </Button>
        </form>
        
      </Grid>
    </div>
  );
};

export default ProductUpdate;
