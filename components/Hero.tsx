"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-700 via-blue-500 to-indigo-500 text-white py-24">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          Empowering Your Business with Innovative IT and Consultancy Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-xl mb-8 max-w-2xl"
        >
          Sina Consulting Services: Business, IT, Management, and Educational Experts. We deliver results-driven strategies for organizations looking to thrive in a fast-changing world.
        </motion.p>
        <motion.a
          href="/services"
          className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded shadow hover:bg-blue-100 transition"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Discover Our Services
        </motion.a>
      </div>
    </section>
  );
}