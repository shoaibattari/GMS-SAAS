import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Guest from "./views/Guest";
import Admin from "./components/Admin/Admin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useEffect, useState } from "react";
import UserContext from "./context/UserContext";
import Category from "./components/Guest/Category";
import SubCategory from "./components/Guest/SubCategory";

function App() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email === "admin@admin.com") {
      navigate("/admin");
    } else {
      navigate("/");
    }
  }, [user]);

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/guest" element={<Guest />} />
        <Route path="/guest/:category" element={<Category />} />
        <Route path="/guest/:category/:subCategory" element={<SubCategory />} />
      </Routes>
    </>
  );
}

export default App;
