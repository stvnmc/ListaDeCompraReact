import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <section style={{ display: "flex" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product:id" element={<ProductDetails />} />
          </Routes>
          <Sidebar />
        </section>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
