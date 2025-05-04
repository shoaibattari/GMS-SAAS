import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import { GraveProvider } from "./context/GraveContext.jsx";
import Footer from "./components/Home/Footer.jsx";
import Navbar from "./components/Home/Navbar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <GraveProvider>
          <Navbar />
          <App />
          <Footer />
        </GraveProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
