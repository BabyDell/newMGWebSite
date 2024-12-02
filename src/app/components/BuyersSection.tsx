import { motion } from "framer-motion";
import { ZoomImage } from "./ZoomImage";

export default function BuyersSection() {
  return (
    <motion.section 
      className="my-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.header 
        className="font-Playfair_Display text-4xl text-center space-y-1 font-extralight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <span className="block md:inline">INTEGRITY. </span>
        <span className="block md:inline">DISCRETION. </span>
        <span className="block md:inline">EXCELLENCE. </span>
      </motion.header>
      <motion.h1 
        className="text-center py-10 mx-10 md:mx-36 font-serif"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        My dedication to integrity, discretion, and outstanding service has
        allowed me to build strong, lasting relationships with clients across
        various industries. While I specialize in helping individuals and
        families find their perfect home in the Greenwich and lower Fairfield
        County areas, I also work with buyers and sellers in nearby communities,
        offering personalized service for every step of the home-buying journey.
      </motion.h1>
      <div className="mx-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 w-full max-w-7xl m-auto">
          <div className="w-full h-96">
            <ZoomImage
              src="/img/mgBuyers.jpg"
              alt="Buyers Image"
              text="Buyers"
              link="/buyers"
            />
          </div>
          <div className="w-full h-96">
            <ZoomImage
              src="/img/mgSellers.jpg"
              alt="Sellers Image"
              text="Sellers"
              link="/sellers"
          />
          </div> 
          <div className="w-full h-96 md:col-span-2 lg:col-span-2 md:w-1/2 md:m-auto">
            <ZoomImage
              src="/img/mgListings.jpg"
              alt="Listings Image"
              text="Listings"
              link="/listings"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

