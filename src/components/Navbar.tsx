import React from "react";

import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar = () => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center ">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-2xl  font-bold  py-1 px-2 rounded ">Google</p>
        </Link>
      </div>
      <Search />
    </div>
  );
};

export default Navbar;
