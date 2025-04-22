
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X, CakeSlice } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const { getCartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <CakeSlice className="h-8 w-8 text-rose-500" />
              <span className="ml-2 text-xl font-playfair font-bold text-gray-900">Decadent Delights</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-rose-500 px-3 py-2 text-sm font-medium transition-colors">
              Home
            </Link>
            <Link to="/birthday-cakes" className="text-gray-700 hover:text-rose-500 px-3 py-2 text-sm font-medium transition-colors">
              Birthday Cakes
            </Link>
            <Link to="/chocolate-cakes" className="text-gray-700 hover:text-rose-500 px-3 py-2 text-sm font-medium transition-colors">
              Chocolate Cakes
            </Link>
            <Link to="/cake-slices" className="text-gray-700 hover:text-rose-500 px-3 py-2 text-sm font-medium transition-colors">
              Cake Slices
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-rose-500 px-3 py-2 text-sm font-medium transition-colors">
              Contact
            </Link>
            <Link to="/order-form" className="inline-flex">
              <Button variant="default" className="bg-rose-500 hover:bg-rose-600">Order Now</Button>
            </Link>
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-rose-500" />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-rose-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {getCartCount()}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Link to="/cart" className="relative mr-4">
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-rose-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {getCartCount()}
                </span>
              )}
            </Link>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-rose-500 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link 
            to="/" 
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-rose-500 hover:bg-gray-50 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/birthday-cakes" 
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-rose-500 hover:bg-gray-50 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Birthday Cakes
          </Link>
          <Link 
            to="/chocolate-cakes" 
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-rose-500 hover:bg-gray-50 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Chocolate Cakes
          </Link>
          <Link 
            to="/cake-slices" 
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-rose-500 hover:bg-gray-50 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Cake Slices
          </Link>
          <Link 
            to="/contact" 
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-rose-500 hover:bg-gray-50 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link 
            to="/order-form" 
            className="block px-3 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <Button className="w-full bg-rose-500 hover:bg-rose-600">Order Now</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
