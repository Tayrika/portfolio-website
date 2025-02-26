"use client";

import React from "react"
import { motion } from "framer-motion";
// import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";


export default function Intro() {
  return (
    // section is a semamtic html tag where every element inside is related to each other vs div
    <section id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <motion.h1 
        className="mb-10 mt-4 px-4 text-2xl !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span>Hello, I&apos;m Rika, a full-stack developer based in Tokyo, Japan. My focus is React and Next.js. Let&apos;s build something great together!</span>
      </motion.h1>

      <motion.div 
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <div
        className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none"
        // onClick={() => {
        //   setActiveSection("Contact");
        // }}
        >
          Connect me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </div>

        <a className="bg-white/60 p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60" href="https://www.linkedin.com/in/rika-miyata-4bab99243/" target="_blank">
          <BsLinkedin />
        </a>

        <a className="bg-white/60 p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60" href="https://github.com/Tayrika" target="_blank">
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
