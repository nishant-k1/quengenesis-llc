import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // ✅ Fix: No HashRouter in index.js
import "./App.css";
import Header from "../shared/Header/Header";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Marketing from "../pages/Marketing/Marketing";
import It from "../pages/It/It";
import ApiIntegration from "../pages/ApiIntegration/ApiIntegration";
import Contact from "../pages/Contact/Contact";
import Payment from "../pages/Payment/Payment";
import Footer from "../shared/Footer/Footer";
import MessengerCustomerChat from "react-messenger-customer-chat";

function App() {
  return (
    <Router>
      {" "}
      {/* ✅ Single Router here */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sales-and-marketing-consulting" element={<Marketing />} />
        <Route path="/technology-and-it-services" element={<It />} />
        <Route path="/api-integration" element={<ApiIntegration />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
      <MessengerCustomerChat pageId="107997134827152" />
    </Router>
  );
}

export default App;
