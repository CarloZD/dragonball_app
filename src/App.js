import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lista" element={<ListPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="*" element={<h2 className="text-center mt-5 text-danger">404 - Página no encontrada</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
