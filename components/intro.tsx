"use client";

import Image from "next/image";
import React from "react"
import { motion } from "framer-motion";

export default function Intro() {
  return (
    // section is a semamtic html tag where every element inside is related to each other vs div
    <section>
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image 
                src="https://images.unsplash.com/photo-1520763185298-1b434c919102?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Tulip icon" 
                width={192}
                height={192}
                quality={100}
                priority={true}
                className="h-24 w-24 rounded-full object-cover border-[0.3rem] border-white shadow-xl"
              />
          </motion.div>
            
          <motion.span 
            className="absolute bottom-0 right-0 text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋🏻
          </motion.span>
        </div>
      </div>
    </section>
  );
}
