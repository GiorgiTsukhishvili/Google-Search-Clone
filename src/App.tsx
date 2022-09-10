import React from "react";

import { Navbar, Footer, Results } from "./components";
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-[#202124] min-h-full text-gray-200">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/search" replace />} />
        <Route path="/search" element={<Results />} />
        <Route path="/videos" element={<Results />} />
        <Route path="/image" element={<Results />} />
        <Route path="/news" element={<Results />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
