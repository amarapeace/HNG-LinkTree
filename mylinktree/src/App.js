import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./components/Home/home";
import Contact from "./components/Contact/contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

// "homepage": "https://amarapeace.github.io/Linktree-Hng",