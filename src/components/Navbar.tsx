
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Menu, X, CakeSlice, User } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Navbar = () => {
  const { getCartCount } = useCart();
  const { user, signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOrderNowClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (user) {
      navigate("/order-form");
    } else {
      toast.error("Please sign in to place an order");
      navigate("/auth");
    }
  };

  const handleSignOut = async () => {
    await signOut();
    setIsMenuOpen(false); // Close mobile menu if open
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
            <button 
              onClick={handleOrderNowClick} 
              className="inline-flex items-center justify-center rounded-md px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white text-sm font-medium transition-colors"
            >
              Order Now
            </button>
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-rose-500" />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-rose-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {getCartCount()}
                </span>
              )}
            </Link>
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700">
                  Welcome, {user.email}
                </span>
                <Button
                  variant="outline"
                  className="border-rose-500 text-rose-500 hover:bg-rose-50"
                  onClick={handleSignOut}
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <Link to="/auth">
                <Button variant="outline" className="border-rose-500 text-rose-500 hover:bg-rose-50">
                  <User className="h-5 w-5 mr-2" />
                  Sign In
                </Button>
              </Link>
            )}
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
          <button 
            onClick={(e) => {
              handleOrderNowClick(e);
              setIsMenuOpen(false);
            }}
            className="w-full px-3 py-2 bg-rose-500 hover:bg-rose-600 text-white text-base font-medium rounded-md"
          >
            Order Now
          </button>
          {user ? (
            <>
              <span className="block px-3 py-2 text-base font-medium text-gray-700">
                Welcome, {user.email}
              </span>
              <button
                onClick={async () => {
                  await handleSignOut();
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-rose-500 hover:bg-gray-50 rounded-md"
              >
                Sign Out
              </button>
            </>
          ) : (
            <Link
              to="/auth"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-rose-500 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
