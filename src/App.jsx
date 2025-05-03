import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import GraveYard from "./components/GraveYard/GraveYard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useEffect } from "react";
import UserContext from "./context/UserContext";

function App() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();



  useEffect(() => {
    if (user?.email === "admin@admin.com") {
      navigate("/graveyard");
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
        <Route path="/graveyard" element={<GraveYard />} />
      </Routes>
    </>
  );
}

export default App;
