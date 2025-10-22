import { FaFacebook, FaInstagram, FaTwitter, FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-700 via-green-600 to-green-800 text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <FaLeaf className="text-3xl text-lime-300" />
            <h2 className="text-2xl font-bold">LeafLink</h2>
          </div>
          <p className="text-gray-200 text-sm leading-relaxed">
            Growing a greener world — one plant at a time. Discover, add, and
            share your favorite trees and make our planet bloom.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-lime-300">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add-plant">Add Plant</Link>
            </li>
            <li>
              <Link to="/plants">All Plants</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-lime-300">Contact</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li>Email: contact@LeafLink.com</li>
            <li>Phone: +880 1234-567890</li>
            <li>Address: Dhaka, Bangladesh</li>
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-lime-300">
            Follow Us
          </h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-lime-300 transition">
              <FaFacebook size={22} />
            </a>
            <a href="#" className="hover:text-lime-300 transition">
              <FaInstagram size={22} />
            </a>
            <a href="#" className="hover:text-lime-300 transition">
              <FaTwitter size={22} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-green-500 mt-10 pt-4 text-center text-gray-300 text-sm">
        © {new Date().getFullYear()} LeafLink — All Rights Reserved 🌿
      </div>
    </footer>
  );
};

export default Footer;
