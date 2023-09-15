import { Container, Table, Paper, TableCell, TableContainer, TableHead, TableRow, Typography, TableBody, Grid, Box } from '@mui/material'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Biiling = () => {
    const [productList,setProductList] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:4000/api/booking/`).then(res=>{
            console.log(res.data.product.products)
            setProductList(res.data.product.products)
        }).catch(err=>console.log(err))
    },[])
  return (
    <div>
        <Container>
            <center>
            <TableContainer component={Paper} sx={{bgcolor:'#EEEEEE'}}>                
            <Typography variant='h3'>Thank For Purchaching</Typography>
            <Table sx={{width: 700,margin: "auto"}}>
                <TableRow sx={{bgcolor:'#4D2DB7'}}>
                    <TableCell><Typography color='#fff'>Singapur Salon</Typography></TableCell>
                </TableRow>
                <TableRow sx={{bgcolor:'#64CCC5'}}>
                    <TableCell><Typography>
                    Kottai Street, Thirupparankundrem, Madurai
                        </Typography> 
                        </TableCell>
                </TableRow>
            </Table>
            <Grid containersx={{display:'flex', alignItems:'center',justifyContent:'center'}}>
                <Box sx={{height:'200px',width:"300px"}} >
                <Typography variant='h5'>User Details</Typography>
                    <Typography textAlign='left' variant="body1"><strong>Name</strong>    : Karthick</Typography>
                    <Typography textAlign='left' variant="body1"> <strong>Email</strong>   : ak@jk.net</Typography>
                    <Typography textAlign='left' variant="body1"><strong>Mobile</strong>  : 8220942384</Typography>
                </Box>
            </Grid>
                <Table sx={{ width: 300,mb:5}}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Qut.No</TableCell>
                            <TableCell align="center">Product Name</TableCell>
                            <TableCell align="center">Product Price (RS)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {productList.map((item,index)=>{
                                return (
                                <TableRow key={item._id}>
                                    <TableCell align="center">{index+1}</TableCell>
                                    <TableCell align="center">{item.name}</TableCell>
                                    <TableCell align="center">{item.price}</TableCell>
                                </TableRow>    
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            </center>
        </Container>
    </div>
  )
}

export default Biiling