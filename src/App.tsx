import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Button from "./components/button";
import PriceConverter from "./pages/PriceCalculator";
import UnitConverter from "./pages/UnitConverter";

function App() {
  return (
    <HashRouter>
      <h1>johann</h1>

      <div className="button-container">
        <Button>Price Calculator</Button>
        <Button>Unit Converter</Button>
        <Button>Cocktails</Button>
      </div>

      <Routes>
        <Route path="/" element={<Navigate to="/pricecalculator" replace />} />
        <Route path="/pricecalculator" element={<PriceConverter />} />
        <Route path="/unitconverter" element={<UnitConverter />} />
        <Route path="/cocktails" element={<p>None</p>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
