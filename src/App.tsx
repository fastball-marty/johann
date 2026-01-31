import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./styles/App.css";
import Button from "./components/button";
import Starters from "./pages/Starters";

function App() {
  return (
    <BrowserRouter>
      <h1>johann</h1>

      <div className="button-container">
        <Button>Starters</Button>
        <Button>Main</Button>
        <Button>Cocktails</Button>
      </div>

      <Routes>
        <Route path="/" element={<Navigate to="/starters" replace />} />
        <Route path="/starters" element={<Starters />} />
        <Route path="/main" element={<Starters />} />
        <Route path="/cocktails" element={<Starters />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
