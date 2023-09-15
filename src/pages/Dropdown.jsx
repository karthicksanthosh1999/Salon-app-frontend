import { Alert, FormControl, Grow, IconButton, NativeSelect, Snackbar, Tooltip, Zoom } from '@mui/material';
import React, { useEffect, useState } from 'react'
import axios from "axios";
import {useNavigate, useParams} from'react-router-dom'
import { CheckBox, DisabledByDefault } from '@mui/icons-material';



const Dropdown = (props) => {
    const [status, setstatus] = useState("");
    const [drop,setDrop] = useState([])
    const [openSnak, setOpenSnak] = useState(false); 
    const [open, setOpen] = useState(false);
    const [openChange, setOpenChange] = useState(false) 
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:4000/api/booking/${props.userId}`)
        .then((res)=>{
            console.log(res.data)
            setDrop(res.data.product.status)
        }).catch(err=>console.log(err))
    },[])


    const handleSubmit = (id) =>{
        const details = {status}
        axios.put(`http://localhost:4000/api/booking/${id}`,details)
            .then((res)=>{
                console.log(res.date)
                setOpenChange(false)
                setOpenSnak(true)
            }).catch(err=>console.log(err))
    }

    const handleChange = (e) =>{
        setstatus(e.target.value)
        setOpenChange(true)
        console.log(props.userId)
    }

  return (
    <div>
        <FormControl size="small">
            <NativeSelect
            value={status}
            variant="filled"
            onChange={handleChange}>
            <option value={drop} selected>
                {drop}
            </option>
            <option value={"Pending"}>Pending</option>
            <option value={"Progress"}>Progress</option>
            <option value={"Completed"}>Completed</option>
            </NativeSelect>
        </FormControl> 
        {
            openChange ? (
        <div>
        <Tooltip title="Update" arrow TransitionComponent={Zoom}>
            <IconButton
            sx={{ color: "green" }}
            onClick={(e) => handleSubmit(props.userId)}
            >
            <CheckBox />
            </IconButton>
        </Tooltip>
        <Tooltip title="Cancel" arrow TransitionComponent={Zoom}>
            <IconButton
            sx={{ color: "red" }}
            onClick={() => setOpen(false)}
            >
            <DisabledByDefault />
            </IconButton>
        </Tooltip>
        </div>
            ) : (<div></div>)
        }
        <div>
                <Snackbar
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
      </Snackbar> 
        </div>
    </div>
  )
}

export default Dropdown