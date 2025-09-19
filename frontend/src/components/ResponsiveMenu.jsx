import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

function ResponsiveMenu({ open }) {
  return (
    <div>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-0 w-full h-full bg-black/60 z-20"
          >
            <div className="text-xl font-semibold uppercase bg-slate-50 text-black py-10 m-6 rounded-3xl">
              <ul className="flex flex-col justify-center items-center gap-10">
                <li>
                  <Link
                    to="/"
                    className="text-black !no-underline items-center justified-between"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="text-black !no-underline">
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ResponsiveMenu;
