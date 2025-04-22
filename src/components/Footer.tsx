
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, CakeSlice } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding & About */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center">
              <CakeSlice className="h-8 w-8 text-rose-400" />
              <span className="ml-2 text-xl font-playfair font-bold text-white">Decadent Delights</span>
            </Link>
            <p className="mt-4 text-sm text-gray-300">
              Crafting exquisite cakes for your special moments since 2010. Every cake is made with love and the finest ingredients.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-playfair text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-rose-400 text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/birthday-cakes" className="text-gray-300 hover:text-rose-400 text-sm transition-colors">
                  Birthday Cakes
                </Link>
              </li>
              <li>
                <Link to="/chocolate-cakes" className="text-gray-300 hover:text-rose-400 text-sm transition-colors">
                  Chocolate Cakes
                </Link>
              </li>
              <li>
                <Link to="/cake-slices" className="text-gray-300 hover:text-rose-400 text-sm transition-colors">
                  Cake Slices
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="font-playfair text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-rose-400 mr-2 mt-0.5" />
                <a href="mailto:info@decadentdelights.com" className="text-gray-300 hover:text-rose-400 text-sm transition-colors">
                  info@decadentdelights.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-rose-400 mr-2 mt-0.5" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-rose-400 text-sm transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="text-sm text-gray-300 mt-2">
                123 Bakery Street<br />
                Sweet City, SC 12345
              </li>
            </ul>
          </div>

          {/* Social & Subscribe */}
          <div className="col-span-1">
            <h3 className="font-playfair text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-rose-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-rose-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-rose-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-300">
              Subscribe to our newsletter for special offers and updates.
            </p>
            <form className="mt-2">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="min-w-0 flex-1 px-3 py-2 rounded-l-md bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:ring-rose-400 focus:border-rose-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="flex-shrink-0 px-4 py-2 bg-rose-500 rounded-r-md text-white font-medium hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-sm text-gray-400 text-center">
            © {currentYear} Decadent Delights. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
