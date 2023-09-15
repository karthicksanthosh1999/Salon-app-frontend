import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { Button, Container, Grid } from "@mui/material";
import { Backspace } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

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
}));

export default function Userlist() {
  const navigate = useNavigate()
  const [rows, setRows] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("http://localhost:4000/api/user/getalluser")
      .then((res) => {
        console.log(res.data.user);
        setRows(res.data.user);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Container>
        <Grid container display="flex" alignItems="center" justifyContent="end">
          <Button variant="contained" startIcon={<Backspace />} onClick={()=>navigate('/product/list')}>
            Back
          </Button>
        </Grid>
      </Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700, mt: 3 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Roll No</StyledTableCell>
              <StyledTableCell align="center">User Name</StyledTableCell>
              <StyledTableCell align="center">Mobile</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Role</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={row.index}>
                <StyledTableCell align="center">{index + 1}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.fname} {row.lname}
                </StyledTableCell>
                <StyledTableCell align="center">{row.mobile}</StyledTableCell>
                <StyledTableCell align="center">{row.email}</StyledTableCell>
                <StyledTableCell align="center">{row.role}</StyledTableCell>
                <StyledTableCell align="center">{row.protein}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
