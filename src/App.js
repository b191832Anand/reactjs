import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = (cls) => {
    console.log(cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <Router>
     <div>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Routes>
        <Route path="/" element={<TextForm title="Enter the value" mode={mode} />} />
        <Route path="/about" element={<About mode={mode} />} />
        </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;
