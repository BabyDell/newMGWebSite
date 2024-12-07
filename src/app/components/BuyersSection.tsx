'use client'

import { motion, useInView } from "framer-motion";
import { ZoomImage } from "./ZoomImage";
import { useRef } from "react";

export default function BuyersSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const paragraphRef = useRef(null);
  const imagesRef = useRef(null);

  const sectionInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const headerInView = useInView(headerRef, { once: true, amount: 0.5 });
  const paragraphInView = useInView(paragraphRef, { once: true, amount: 0.5 });
  const imagesInView = useInView(imagesRef, { once: true, amount: 0.3 });

  return (
    <motion.section 
      ref={sectionRef}
      className="my-16"
      initial={{ opacity: 0 }}
      animate={sectionInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <motion.header 
        ref={headerRef}
        className="font-Playfair_Display text-4xl text-center space-y-1 font-extralight"
        initial={{ opacity: 0, y: 20 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <motion.span 
          className="block md:inline"
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          INTEGRITY.{" "}
        </motion.span>
        <motion.span 
          className="block md:inline"
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          DISCRETION.{" "}
        </motion.span>
        <motion.span 
          className="block md:inline"
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          EXCELLENCE.{" "}
        </motion.span>
      </motion.header>
      <motion.h1 
        ref={paragraphRef}
        className="text-center py-10 mx-10 md:mx-36 font-serif"
        initial={{ opacity: 0, y: 20 }}
        animate={paragraphInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        My dedication to integrity, discretion, and outstanding service has
        allowed me to build strong, lasting relationships with clients across
        various industries. While I specialize in helping individuals and
        families find their perfect home in the Greenwich and lower Fairfield
        County areas, I also work with buyers and sellers in nearby communities,
        offering personalized service for every step of the home-buying journey.
      </motion.h1>
      <motion.div 
        ref={imagesRef}
        className="mx-10"
        initial={{ opacity: 0 }}
        animate={imagesInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 w-full max-w-7xl m-auto">
          <motion.div 
            className="w-full h-96"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <ZoomImage
              src="/img/mgBuyers.jpg"
              alt="Buyers Image"
              text="Buyers"
              link="/buyers"
            />
          </motion.div>
          <motion.div 
            className="w-full h-96"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <ZoomImage
              src="/img/mgSellers.jpg"
              alt="Sellers Image"
              text="Sellers"
              link="/sellers"
            />
          </motion.div> 
          <motion.div 
            className="w-full h-96 md:col-span-2 lg:col-span-2 md:w-1/2 md:m-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <ZoomImage
              src="/img/mgListings.jpg"
              alt="Listings Image"
              text="Listings"
              link="/listings"
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}

