import React from "react";
import { Routes, Route } from "react-router";
import NotFound from "./pages/NotFoundPage";
import Main from "./pages/MainPage";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductsDetail from "./pages/ProductsDetail";
import Cart from "./pages/Cart";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import Checkout from "./pages/Checkout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminFab from "./components/AdminFab";
import AdminDashboard from "./pages/AdminDashboard";
import "./App.css";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  const userRole = user ? user.role : "guest";
  const toastTheme =
    localStorage.getItem("theme") === "dracula" ? "dark" : "light";
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        theme={toastTheme}
        pauseOnHover={false}
      />
      {userRole === "admin" ? <AdminFab /> : ""}
      <Routes>
        {/* 1. Pages WITH Header and Nav */}
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:_id" element={<ProductsDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />
        </Route>

        {/* 2. Page WITHOUT Header and Nav */}

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignIn />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
