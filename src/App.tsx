import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Button from "./components/button";
import Starters from "./pages/Starters";
import Main from "./pages/Main";

function App() {
  return (
    <HashRouter>
      <h1>johann</h1>

      <div className="button-container">
        <Button>Starters</Button>
        <Button>Main</Button>
        <Button>Cocktails</Button>
      </div>

      <Routes>
        <Route path="/" element={<Navigate to="/starters" replace />} />
        <Route path="/starters" element={<Starters />} />
        <Route path="/main" element={<Main />} />
        <Route path="/cocktails" element={<p>None</p>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
