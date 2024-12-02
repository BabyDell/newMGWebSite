'use client';

import { motion } from "framer-motion";
import { ChevronRight } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import AboutSection from "./AboutSection";
import BuyersSection from "./BuyersSection";

export default function Home() {
  return (
    <div>
      <motion.div 
        className="h-dvh relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/img/mgHome.jpg"
          alt="hero"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black opacity-25" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.h1 
            className="text-white text-6xl text-center font-Italiana tracking-wider font-extrabold"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Maria Gutierrez Estates
          </motion.h1>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Link
              href="/homes"
              className="relative flex items-center justify-center text-white text-xl font-bold bg-gray-800 py-3 px-8 rounded-sm mt-10 shadow-lg transform transition-all duration-500 hover:shadow-xl group"
            >
              <span className="relative z-10 flex items-center justify-center">
                Search All Homes
                <ChevronRight
                  className="group-hover:translate-x-2 transition-transform duration-500 ml-2"
                  size={24}
                />
              </span>
              <span className="absolute inset-0 bg-gray-950 group-hover:w-full transition-all duration-500 w-0" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
      <BuyersSection />
      <AboutSection />
    </div>
  );
}

