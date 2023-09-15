import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Avatar, Badge } from "@mui/material";
import { CardTravel, Person2TwoTone, ShoppingCar, ShoppingCart } from "@mui/icons-material";
import { styled } from '@mui/material/styles';
import About from "../pages/AboutPage/About";
import Home from "../pages/Home";
import Pricing from "../pages/OurPricing/Pricing";
import Services from "../pages/Services/Services";
import OurExperts from "../pages/Exports/OurExperts";
import Footer from "./Footer/Footer";
import Contact from "../pages/ContactPage/Contact";
import Counter from "../pages/CountersPage/Counter";
import Gallery from "../pages/Gallery/Gallery";
import logonav from '../sources/Logo/logo-nav.png'
import ScrollToTop from "./ScrollToTop";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

function Navbar(props) {
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [fetch, setFetch] = useState([]);
  const { window } = props;
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/user/adminDetails")
      .then((res) => {
        console.log(res.data);
        if (res.data.Status === "Success") {
          setName(res.data.fname);
          setRole(res.data.role);
          setAuth(true);
        } else {
          setAuth(false);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const removeItems = () =>{
    let fetchItems = [...JSON.parse(localStorage.getItem("products"))];
    fetchItems.forEach((items) => {
        fetchItems.splice(fetchItems.indexOf(items), fetchItems.length);
    });
    localStorage.setItem("products", JSON.stringify(fetchItems));
  }

  const handleLogout = () => {
    axios
      .get("http://localhost:4000/api/user/logout")
      .then((res) => {
        removeItems()
        navigate('/login')
      })
      .catch((err) => console.log(err));
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  useEffect(() => {
    let fetch = localStorage.getItem("products");
    setFetch(JSON.parse(fetch));
  }, [fetch]);

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
    <Box sx={{ display: "flex", overflowX:'hidden'}}>
      <CssBaseline />
      <AppBar component="nav" sx={{ bgcolor: "#ffffff",height:"100px"}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 2,color:"#000",display: { xs: "flex", sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <Box sx={{mt:"30px",display:{xs:'none',md:'flex'}}}>
          <img src={logonav} alt="logo" height={50} width={180}/>
          </Box>
          <Box sx={{ padding:20,mt:"10px",display: { xs: "none", sm: "flex" }}}>
            <Button href="#home"  sx={{ color: "#000",fontSize:15, borderRadius:5,width:100,":hover":{bgcolor:'#abc502',color:'#ffffff'} }} onClick={() => navigate("/")}>Home</Button>
            <Button href="#about"  sx={{ color: "#000",fontSize:15, borderRadius:5,width:100,":hover":{bgcolor:'#abc502',color:'#ffffff'} }}>About</Button>
            <Button href="#services"  sx={{ color: "#000",fontSize:15, borderRadius:5,width:100,":hover":{bgcolor:'#abc502',color:'#ffffff'} }}>Service</Button>
            <Button href="#gallery"  sx={{ color: "#000",fontSize:15, borderRadius:5,width:100,":hover":{bgcolor:'#abc502',color:'#ffffff'} }}>Gallery</Button>
            <Button href="#contact"  sx={{ color: "#000",fontSize:15, borderRadius:5,width:100,":hover":{bgcolor:'#abc502',color:'#ffffff'} }}>Contact</Button>
            <IconButton aria-label="cart">
            <StyledBadge badgeContent={auth ? fetch.length : 0} color="secondary">
               <ShoppingCart />
               </StyledBadge>
             </IconButton>
            {auth ? (
              <Button startIcon={<Person2TwoTone />} sx={{ ml:2,color: "#000",fontSize:15, borderRadius:5,width:150,":hover":{bgcolor:'#abc502',color:'#ffffff'} }} onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <Button startIcon={<Person2TwoTone />} sx={{ ml:2, color: "#000",fontSize:15, borderRadius:5,width:150,":hover":{bgcolor:'#abc502',color:'#ffffff'} }} onClick={() => navigate("/login")}>
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main">
        <Toolbar />
      </Box>
    </Box>
    <div>
        <div>
          <ScrollToTop/>
        </div>
        <div id="home">
          <Home/>
        </div>
        <div  id="about">
          <About/>
        </div>
        <div style={{marginTop:'100px'}}>
          <Counter/>
        </div>
        <div  id="pricing">
          <Pricing />
        </div>
        <div  id="gallery">
          <Gallery/>
        </div>
        <div id="services">
          <Services/>
        </div>
        <div>
          <OurExperts/>
        </div>
        <div id="contact">
          <Contact/>
        </div>
        <div>
          <Footer/>
        </div>
    </div>
    </div>
  );
}

export default Navbar;
