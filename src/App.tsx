import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Button from "./components/button";
import PriceConverter from "./pages/PriceCalculator";
import UnitConverter from "./pages/UnitConverter";
import Login from "./pages/Login"

function App() {
  return (
    <HashRouter>
      <h1>restaurant.utils</h1>

      <div className="button-container">
        <Button>Unit Converter</Button>
        <Button>Price Calculator</Button>
        <Button>Login</Button>
      </div>

      <Routes>
        <Route path="/" element={<Navigate to="/unitconverter" replace />} />
        <Route path="/unitconverter" element={<UnitConverter />} />
        <Route path="/pricecalculator" element={<PriceConverter />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
