import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Admin", path: "/login" },
  { name: "Graves", path: "/guest/grave" },
  { name: "Khundis", path: "/guest/khundi" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-primary text-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between md:px-24">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          GMS
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link to={link.path} className="hover:text-gray-300 text-p">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul
          className={`md:hidden bg-primary h-full text-white space-y-2 py-4 px-4 absolute top-14 left-0 w-full z-10 transform transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                onClick={toggleMenu}
                className="block text-p"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
