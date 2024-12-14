"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  Menu,
  X,
  Home,
  User,
  FileText,
  Users,
  MessageSquare,
} from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? "auto" : "hidden";
  };

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: User, label: "About", href: "/about" },
    { icon: FileText, label: "Listings", href: "/listings" },
    { icon: Users, label: "Sellers", href: "/sellers" },
    { icon: Users, label: "Buyers", href: "/buyers" },
    { icon: MessageSquare, label: "Contact", href: "/contact" },
  ];

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const itemVariants = {
    closed: { x: -20, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  return (
    <>
      <nav
        className={`fixed w-full transition-all duration-300 ease-in-out z-50 ${
          scrolled ? "bg-black bg-opacity-50 h-16" : "bg-transparent h-20"
        }`}
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="text-white text-3xl font-semibold mr-10 font-Owswald tracking-wider mb-1"
            >
              Maria Gutierrez
            </Link>
            <div className="hidden lg:flex space-x-10">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-xl text-white hover:text-indigo-400 transition-colors font-Montserrat text-center text-shadow"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="mailto:maria@example.com"
              className="text-white hover:text-indigo-400 transition-colors"
            >
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </a>
            <a
              href="tel:+1234567890"
              className="text-white hover:text-indigo-400 transition-colors"
            >
              <Phone size={20} />
              <span className="sr-only">Phone</span>
            </a>
            <button
              onClick={toggleMenu}
              className="block lg:hidden text-white hover:text-gray-300 focus:outline-none"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>  

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-y-0 right-0 w-full sm:w-80 bg-black z-40 flex items-center justify-center"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <nav className="text-center w-full">
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <Link
                    href={item.href}
                    className="block py-4 text-white hover:text-gray-300 text-2xl transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    <div className="flex items-center justify-center">
                      <item.icon size={24} className="mr-2" />
                      <span>{item.label}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
