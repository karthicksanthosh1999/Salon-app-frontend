import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const TAX_RATE = 0.07;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow("Paperclips (Box)", 100, 1.15),
  createRow("Paper (Case)", 10, 45.99),
  createRow("Waste Basket", 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function Appoinment() {
  const [fname, setFname] = useState("");
  const [lname, setlname] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [products, setProducts] = useState([{}]);
  const [date, setDate] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/user/adminDetails")
      .then((res) => {
        setFname(res.data.fname);
        setlname(res.data.lname);
        setEmail(res.data.email);
        setMobile(res.data.mobile);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("products")));
    console.log(JSON.parse(localStorage.getItem("products")));
  }, []);

  const handleClose = () => {
    let fetchItems = [...JSON.parse(localStorage.getItem("products"))];
    fetchItems.forEach((items) => {
      fetchItems.splice(fetchItems.indexOf(items), fetchItems.length);
      setInterval(navigate("/"), 6000);
    });
    localStorage.setItem("products", JSON.stringify(fetchItems));
  };

  const handleSubmit = () => {
    const details = { date, fname, lname, email, mobile, products, total };
    axios
      .post("http://localhost:4000/api/booking/", details)
      .then((res) => {
        console.log(res.data.Status);
        if (res.data.Status === "success") {
          toast.success("Appoinment get successfully", {
            position: toast.POSITION.TOP_CENTER,
          });
          handleClose();
        } else {
          toast.warning("Date is unavilable", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      })
      .catch((err) => console.log(err));
  };

var total = 0
const addtion = () =>{
  for(var i =0; i<products.length; i++ ){
    total += products[i].price
  }
  return total
}
addtion()

  return (
    <div>
      <Container>
        <Box>
          <TableContainer component={Paper} sx={{ bgcolor: "#D5FFD0" }}>
            <Table sx={{ minWidth: 700 }} aria-label="spanning table">
              <TableHead>
                <TableRow>
                  <TableCell
                    align="center"
                    colSpan={3}
                    sx={{
                      bgcolor: "#2d3630",
                      color: "#fff",
                      fontWeight: "bold",
                    }}
                  >
                    Details
                  </TableCell>
                  <TableCell
                    sx={{
                      bgcolor: "#0C356A",
                      color: "#fff",
                      fontWeight: "bold",
                    }}
                    align="right"
                  >
                    Price
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>No Of Products</TableCell>
                  <TableCell align="right">Products</TableCell>
                  <TableCell align="right">Description</TableCell>
                  <TableCell align="right">Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((row, index) => (
                  <TableRow key={row._id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.description}</TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell rowSpan={3} />
                  <TableCell
                    colSpan={2}
                    sx={{
                      bgcolor: "#2d3630",
                      color: "#fff",
                      fontWeight: "bold",
                    }}
                  >
                    Total
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      bgcolor: "#2d3630",
                      color: "#fff",
                      fontWeight: "bold",
                    }}
                  >
                    {total}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Card sx={{ bgcolor: "#D5FFD0", mt: 4 }}>
          <CardContent>
            <Grid container item xs={12}>
              <Grid item xs={6}>
                <Typography variant="h5">Details : </Typography>
                <Typography variant="body1">
                  Name : {fname} {lname}
                </Typography>
                <Typography variant="body1">Mobile : {mobile}</Typography>
                <Typography variant="body1">Email : {email}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h5">Select Appoinment Date</Typography>
                <TextField
                  required
                  type="date"
                  margin="normal"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Grid
          container
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: "#abc502",
              borderRadius: "0",
              height: "50px",
              // width: "100%",
              mt: 4,
              ":hover": { bgcolor: "#2d3630" },
            }}
            onClick={() => handleSubmit()}
          >
            Confirm Your Appoinment
          </Button>
        </Grid>
      </Container>
    </div>
  );
}
