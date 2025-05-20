
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { ShoppingCart, Menu, X, User, LogOut } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useMobileDetect } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut, isAdmin } = useAuth();
  const { totalItems } = useCart();
  const location = useLocation();
  const { isMobile } = useMobileDetect();

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Birthday Cakes", path: "/birthday-cakes" },
    { label: "Chocolate Cakes", path: "/chocolate-cakes" },
    { label: "Cake Slices", path: "/cake-slices" },
    { label: "Contact", path: "/contact" },
  ];

  const isActivePath = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="font-playfair font-bold text-xl text-rose-500">Decadent Delights</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  isActivePath(item.path)
                    ? "text-rose-500 border-b-2 border-rose-500"
                    : "text-gray-700 hover:text-rose-500 hover:border-b-2 hover:border-rose-300"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {isAdmin && (
              <Link
                to="/admin"
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  isActivePath("/admin")
                    ? "text-rose-500 border-b-2 border-rose-500"
                    : "text-gray-700 hover:text-rose-500 hover:border-b-2 hover:border-rose-300"
                }`}
              >
                Admin Dashboard
              </Link>
            )}
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart" className="relative text-gray-700 hover:text-rose-500">
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            
            {user ? (
              <div className="relative ml-3 flex items-center space-x-2">
                <span className="text-sm text-gray-700">{user.user_metadata?.full_name || user.email}</span>
                <Button variant="outline" size="sm" onClick={handleSignOut}>
                  <LogOut className="h-4 w-4 mr-1" />
                  Sign Out
                </Button>
              </div>
            ) : (
              <Link to="/auth">
                <Button variant="outline" size="sm">
                  <User className="h-4 w-4 mr-1" />
                  Sign In
                </Button>
              </Link>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <Link to="/cart" className="relative text-gray-700 hover:text-rose-500 mr-4">
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-rose-500 focus:outline-none"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block pl-3 pr-4 py-2 text-base font-medium ${
                  isActivePath(item.path)
                    ? "text-rose-500 border-l-4 border-rose-500 bg-rose-50"
                    : "text-gray-700 hover:text-rose-500 hover:bg-rose-50 hover:border-l-4 hover:border-rose-300"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {isAdmin && (
              <Link
                to="/admin"
                className={`block pl-3 pr-4 py-2 text-base font-medium ${
                  isActivePath("/admin")
                    ? "text-rose-500 border-l-4 border-rose-500 bg-rose-50"
                    : "text-gray-700 hover:text-rose-500 hover:bg-rose-50 hover:border-l-4 hover:border-rose-300"
                }`}
              >
                Admin Dashboard
              </Link>
            )}
            
            {user ? (
              <div className="px-3 py-3 space-y-2">
                <p className="text-sm text-gray-700">{user.user_metadata?.full_name || user.email}</p>
                <Button variant="outline" size="sm" onClick={handleSignOut} className="w-full">
                  <LogOut className="h-4 w-4 mr-1" />
                  Sign Out
                </Button>
              </div>
            ) : (
              <Link to="/auth" className="block px-3 py-2">
                <Button variant="outline" size="sm" className="w-full">
                  <User className="h-4 w-4 mr-1" />
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
