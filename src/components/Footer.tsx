import Link from "next/link"
import { Facebook, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-200 py-8 px-4 text-center">
      <div className="container mx-auto">
        <h2 className="text-2xl mb-4 font-Owswald tracking-wider font-bold text-slate-900">Maria Gutierrez</h2>
        
        <div className="flex justify-center items-center space-x-4 mb-4 font-Playfair_Display">
          <div className="flex items-center ">
            <Phone className="w-5 h-5 mr-2" />
            <span className="">(123) 456-7890</span>
          </div>
          <div className="flex items-center">
            <Mail className="w-5 h-5 mr-2" />
            <a href="mailto:info@yourcompany.com" className="hover:underline md:text-base text-xm hover:text-gray-600 transition-all">info@yourcompany.com</a>
          </div>
          <a href="https://facebook.com/yourcompany" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-600 transition-colors">
            <Facebook className="w-5 h-5" />
            <span className="sr-only">Facebook</span>
          </a>
        </div>
        
        <nav className="mb-6 font-serif">
          <ul className="flex flex-wrap justify-center space-x-4">
            {["Home", "About", "Listings", "Sellers", "Buyers", "Contact"].map((item) => (
              <li key={item}>
                <Link href={`/${item.toLowerCase()}`} className="hover:underline text-gray-500 hover:text-black transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Maria Gutierrez. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

