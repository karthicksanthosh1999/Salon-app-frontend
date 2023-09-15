import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./pages/Home";
import productCreate from "./pages/admin/CreateProduct";
import ProductUpdate from "./pages/admin/ProductUpdate";
import ProductList from "./pages/admin/ProductList";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Userlist from "./pages/Userlist";
import Appoinment from "./pages/Appoinment";
import { ToastContainer } from 'react-toastify';
import BookingList from "./pages/BookingList";
import Biiling from "./components/Biiling";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Navbar}/>
          <Route path="/product/list" Component={ProductList}/>
          <Route path="/product/create" Component={productCreate}/>
          <Route path="/product/:id" Component={ProductUpdate}/>
          <Route path="/signup/" Component={Signup}/>
          <Route path="/login" Component={Login}/>
          <Route path="/userlist/" Component={Userlist}/>
          <Route path="/appoinment/" Component={Appoinment}/>
          <Route path="/booking/" Component={BookingList}/>
          <Route path="/billing/" Component={Biiling}/>
          <Route path='*' Component={ErrorPage}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </div>
  );
}

export default App;
