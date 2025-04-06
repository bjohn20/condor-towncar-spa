import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import BookingPage from "./pages/BookingPage";

import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="containter">
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/about"
            element={<AboutPage />}
          />
          <Route
            path="/services"
            element={<ServicesPage />}
          />
          <Route
            path="/booking"
            element={<BookingPage />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
