"use client"

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // Show navbar only when scrolled away from top
      if (window.scrollY > 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="w-full flex justify-center fixed top-0 z-50 px-4 py-5">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={slideInFromTop}
        className={`max-w-[1200px] h-[65px] rounded-full shadow-md shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md transition-all duration-300 ${
          scrolled ? 'bg-black/70' : ''
        } ${
          visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 hidden'
        }`}
      >
        <div className="w-full h-full flex flex-row items-center justify-between m-auto px-8">
          <motion.a
            href="#hero"
            className="h-auto w-auto flex flex-row items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/Sathya Logo.png"
              alt="logo"
              width={40}
              height={40}
              className="cursor-pointer hover:animate-slowspin"
            />
          </motion.a>

          <div className="flex-1 max-w-[600px] h-full flex flex-row items-center justify-center mx-6">
            <div className="text-xs sm:text-sm md:text-base flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-[30px] py-[10px] rounded-full text-gray-200">
              <motion.a 
                href="#about-me" 
                className="cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-emerald-500 hover:to-cyan-500 px-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                About
              </motion.a>
              <motion.a 
                href="#skills" 
                className="cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 px-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Skills
              </motion.a>
              <motion.a 
                href="#projects" 
                className="cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 px-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Projects
              </motion.a>
              <motion.a 
                href="#contact" 
                className="cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 px-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Contact
              </motion.a>
            </div>
          </div>

          <div className="hidden md:flex flex-row gap-5">
            {Socials.map((social) => (
              <motion.a 
                href={social.href} 
                key={social.name} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image
                  src={social.src}
                  alt={social.name}
                  key={social.name}
                  width={24}
                  height={24}
                  className="hover:opacity-80"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;