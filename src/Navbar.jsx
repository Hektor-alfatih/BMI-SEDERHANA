import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-indigo-700">BMI App</div>
      <ul className="flex space-x-6">
        <li>
          <Link
            to="/"
            className="text-gray-700 hover:text-indigo-600 font-medium transition"
          >
            Beranda
          </Link>
        </li>
        <li>
          <Link
            to="/detail"
            className="text-gray-700 hover:text-indigo-600 font-medium transition"
          >
            Detail
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
