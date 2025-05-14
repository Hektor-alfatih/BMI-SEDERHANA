import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // install icon

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-indigo-700">BMI App</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="text-gray-700 hover:text-indigo-600 font-medium">Beranda</Link></li>
          <li><Link to="/detail" className="text-gray-700 hover:text-indigo-600 font-medium">Detail</Link></li>
        </ul>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-gray-700">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 px-4 space-y-2">
          <Link to="/" onClick={() => setOpen(false)} className="block text-gray-700 hover:text-indigo-600">Beranda</Link>
          <Link to="/detail" onClick={() => setOpen(false)} className="block text-gray-700 hover:text-indigo-600">Detail</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
