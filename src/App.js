import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./pages/Home";
import productCreate from "./pages/admin/CreateProduct";
import ProductUpdate from "./pages/admin/ProductUpdate";
import ProductList from "./pages/admin/ProductList";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/product/list" Component={ProductList}/>
          <Route path="/product/create" Component={productCreate}/>
          <Route path="/product/:id" Component={ProductUpdate}/>
          <Route path="/signup/" Component={Signup}/>
          <Route path="/login/" Component={Login}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
