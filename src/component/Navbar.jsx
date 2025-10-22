import { useState } from "react";
import { Link, NavLink } from "react-router";
import { motion } from "framer-motion";
import { Leaf, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/plants", name: "All Plants" },
    { path: "/add-tree", name: "Add Tree" },
    { path: "/about", name: "About" },
  ];

  return (
    <nav className="bg-white/80  backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-3">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex items-center gap-2"
        >
          <Leaf className="text-green-600 w-7 h-7" />
          <Link
            to="/"
            className="text-2xl  font-bold text-green-700 tracking-wide"
          >
            LeafLink
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `hover:text-green-600 transition duration-200 ${
                    isActive ? "text-green-600 font-semibold" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Login Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="hidden md:block bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
        >
          Login
        </motion.button>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t shadow-sm"
        >
          <ul className="flex flex-col p-4 text-gray-700 font-medium">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 hover:text-green-600 ${
                      isActive ? "text-green-600 font-semibold" : ""
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <li>
              <button className="w-full bg-green-600 text-white py-2 rounded mt-3">
                Login
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
