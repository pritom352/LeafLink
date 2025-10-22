import { motion } from "framer-motion";
import { FaLeaf, FaHandsHelping, FaSeedling } from "react-icons/fa";
import tree2 from "../assets/tree2.jpg";

const About = () => {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-16 px-6 md:px-12 lg:px-20">
      {/* Header Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl font-bold text-green-600 mb-4">
          About <span className="text-green-700">LeafLink</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          LeafLink is an online platform that connects plant lovers and garden
          enthusiasts. You can easily buy and sell trees, flowers, and garden
          accessories — helping to make our world greener, one plant at a time.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={tree2}
            alt="About LeafLink"
            className="rounded-3xl shadow-2xl border border-green-200"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-green-700">
            Our Mission 🌱
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At LeafLink, our mission is simple — to make it easier for anyone to
            access nature. Whether you’re a gardener, seller, or just starting
            your green journey, our platform helps you connect, trade, and grow
            together.
          </p>

          <h2 className="text-2xl font-semibold text-green-700">
            Why Choose Us?
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-3">
              <FaLeaf className="text-green-500 text-xl" />
              Easy buying and selling system for all types of plants
            </li>
            <li className="flex items-center gap-3">
              <FaHandsHelping className="text-green-500 text-xl" />
              Secure contact between sellers and buyers
            </li>
            <li className="flex items-center gap-3">
              <FaSeedling className="text-green-500 text-xl" />
              Promoting eco-friendly and sustainable living
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom Quote Section */}
      <motion.div
        className="mt-20 text-center bg-green-100 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-green-800 text-lg md:text-xl font-medium italic">
          “Plant a tree today, and let your roots make the Earth a better
          tomorrow.”
        </p>
      </motion.div>
    </section>
  );
};

export default About;
