import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BMICalculator from "./bmi-calculator";
import Detail from "./Detail";
import Navbar from "./Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BMICalculator />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
