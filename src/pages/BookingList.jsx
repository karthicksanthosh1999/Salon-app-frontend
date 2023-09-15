import React, { useState, useEffect, useRef } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CSVLink } from "react-csv";
import axios from "axios";
import {
  Alert,
  Box,
  Button,
  Fade,
  FormControl,
  Grid,
  Grow,
  IconButton,
  MenuItem,
  Modal,
  NativeSelect,
  Select,
  Snackbar,
  Tooltip,
  Zoom,
} from "@mui/material";
import {
  Check,
  CheckBox,
  DisabledByDefault,
  Download,
  List,
  ListAltOutlined,
  RocketTwoTone,
} from "@mui/icons-material";
import Dropdown from "./Dropdown";
import {useReactToPrint} from 'react-to-print'
 
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));


export default function BookingList() {
  const componentPDF = useRef()
  const [drop,setDrop] = useState([])
  // const [fname, setFname] = useState("");
  // const [lname, setlname] = useState("");
  // const [mobile, setMobile] = useState("");
  // const [email, setEmail] = useState("");
  // const [total, setTotal] = useState();
  // const [date, setDate] = useState();
  const [products, setProducts] = useState([]);
  const [rows, setRows] = useState([]);
  const [productList,setProductList] = useState([])
  const [openModal, setOpenModal] = useState(false);

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

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/booking/")
      .then((res) => {
        // setFname(res.data.product.fname);
        // setlname(res.data.product.lname);
        // setEmail(res.data.product.email);
        // setMobile(res.data.product.mobile);
        // setDate(res.data.product.date);
        // setTotal(res.data.product.total);
        setRows(res.data.product);
        setProducts(res.data.product);
        console.log(res.data.product);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleModal = (id) => {
    axios.get(`http://localhost:4000/api/booking/${id}`)
      .then((res) => {
        console.log(res.data.product.products)
        setProductList(res.data.product.products)
        setDrop(res.data.product)
       
      })
      .catch((err) => console.log(err));
    setOpenModal(true);
  };

  const generatePDF = useReactToPrint({
    content: ()=>componentPDF.current,
    documentTitle:'User Bill'
  })

  var total = 0
  const addtion = () =>{
    for(var i = 0; i<productList.length; i++){
      total += productList[i].price
    }
    return total
  }
   addtion()
  return (
    <div>
      <TableContainer component={Paper}>
        <Grid item xs={12}>
          <IconButton>
            <Download />
            <CSVLink data={rows} filename="User Data.csv">Download</CSVLink>
          </IconButton>
        </Grid>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Roll No</StyledTableCell>
              <StyledTableCell>Fist Name</StyledTableCell>
              <StyledTableCell>Last Name</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Mobile</StyledTableCell>
              <StyledTableCell>Products</StyledTableCell>
              <StyledTableCell>Booking Data</StyledTableCell>
              <StyledTableCell>Total Amount</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={row._id}>
                <StyledTableCell>{index + 1}</StyledTableCell>
                <StyledTableCell>{row.fname}</StyledTableCell>
                <StyledTableCell>{row.lname}</StyledTableCell>
                <StyledTableCell>{row.email}</StyledTableCell>
                <StyledTableCell>{row.mobile}</StyledTableCell>
                <StyledTableCell>
                  <IconButton
                    onClick={() => handleModal(row._id)}
                    sx={{ color: "blue" }}
                  >
                    <ListAltOutlined />
                  </IconButton>
                </StyledTableCell>
                <StyledTableCell>{row.date}</StyledTableCell>
                <StyledTableCell>{row.total}</StyledTableCell>
                <StyledTableCell>
                  <Dropdown userId = {row._id}/>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <Snackbar
        open={openSnak}
        autoHideDuration={6000}
        TransitionComponent={Grow}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={() => () => setOpenSnak(false)}
      >
        <Alert
          onClose={() => setOpenSnak(false)}
          severity="warning"
          sx={{ width: "100%" }}
        >
          Status Changed
        </Alert>
      </Snackbar> */}
       <Modal  open={openModal} onClose={() => setOpenModal(false)}>
        <Box sx={style}>
          <div ref={componentPDF}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Qua.No</TableCell>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Product Price</TableCell>
                </TableRow>
              </TableHead>
              {
                productList.length > 0 ? productList.map((item,index)=>{
                  return (
                    <TableRow key={item._id}>
                      <TableCell>{index +1}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.price}</TableCell>
                    </TableRow>
                  )
                }) : (<div>Loading...</div>)
              }
           
              <TableRow>
                <TableCell rowSpan={2}/>
                <TableCell>Total</TableCell>
                <TableCell>{total}</TableCell>
              </TableRow>
                
            </Table>
          </TableContainer>
          </div>
              <Button fullWidth size="small" variant='contained' onClick={generatePDF}>Genarate Bill</Button>
        </Box>
      </Modal>
    </div>
  );
}
