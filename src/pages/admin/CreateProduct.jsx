import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    price: 0,
    description: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/product/postProduct", inputs)
      .then((res) => {
        console.log(res.data);
        setInputs(res.data);
        navigate("/product/list");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Grid constainer xs={12}>
        <Box bgcolor='orange' display='flex' alignItems='center' justifyContent='center'>
          <Typography variant="h4">Create Product</Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            placeholder="Enter Product Name"
            type="text"
            name="name"
            onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
          />
          <TextField
            fullWidth
            margin="normal"
            placeholder="Enter Product Price"
            type="number"
            name="price"
            onChange={(e) => setInputs({ ...inputs, price: e.target.value })}
          />
          <TextField
            fullWidth
            margin="normal"
            placeholder="Enter Product Description"
            type="text"
            name="description"
            onChange={(e) =>
              setInputs({ ...inputs, description: e.target.value })
            }
          />
          <Button variant="contained" fullWidth type="submit">
            Create
          </Button>
        </form>
      </Grid>
    </div>
  );
};

export default CreateProduct;
