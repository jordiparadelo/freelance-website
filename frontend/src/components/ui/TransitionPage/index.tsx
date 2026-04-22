"use client";
// Libs
import { motion } from "motion/react";
import type React from "react";
// Styles
import "./styles.scss";

interface TransitionPageProps {
  children: React.ReactNode;
}

const TransitionPage = ({ children }: TransitionPageProps) => {
  return (
    <>
      {children}
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ delay: 1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ delay: 1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
    </>
  );
};

export default TransitionPage;
