import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-indigo-400 font-Playfair_Display">
            Maria Gutierrez
          </h3>
          <p className="text-sm">Helping you find your dream home.</p>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-indigo-400 transition-colors">
              <Facebook size={24} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="hover:text-indigo-400 transition-colors">
              <Instagram size={24} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="hover:text-indigo-400 transition-colors">
              <Twitter size={24} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="hover:text-indigo-400 transition-colors">
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="hover:text-indigo-400 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-indigo-400 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/listings"
                className="hover:text-indigo-400 transition-colors"
              >
                Listings
              </Link>
            </li>
            <li>
              <Link
                href="/sellers"
                className="hover:text-indigo-400 transition-colors"
              >
                Sellers
              </Link>
            </li>
            <li>
              <Link
                href="/buyers"
                className="hover:text-indigo-400 transition-colors"
              >
                Buyers
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-indigo-400 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
          <address className="not-italic">
            <p>123 Real Estate Street</p>
            <p>Atlanta, GA 30301</p>
            <p className="mt-2">Phone: (760) 391-8941</p>
            <p>Email: agent@realestate.com</p>
          </address>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-700 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Maria Gutiererz. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
