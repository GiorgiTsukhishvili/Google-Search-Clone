import React from "react";

import { Navbar, Footer, Routes } from "./components";

const App = () => {
  return (
    <div className="bg-gray-900 min-h-full text-gray-200">
      <Navbar />
      <Routes />
      <Footer />
    </div>
  );
};

export default App;
