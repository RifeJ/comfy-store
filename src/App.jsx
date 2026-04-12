import React from "react";
import { Routes, Route } from "react-router";
import NotFound from "./pages/NotFoundPage";
import Main from "./pages/MainPage";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductsDetail from "./pages/ProductsDetail";
import Cart from "./pages/Cart";
import Layout from "./components/Layout"; // Import the layout
import Login from "./pages/Login";
import "./App.css";

function App() {
  return (
    <Routes>
      {/* 1. Pages WITH Header and Nav */}
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductsDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Route>

      {/* 2. Page WITHOUT Header and Nav */}
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
