
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartItem from "@/components/CartItem";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart, AlertCircle } from "lucide-react";

const Cart = () => {
  const { cart, getCartTotal, clearCart } = useCart();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-grow max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-playfair font-bold text-gray-900 mb-8">Your Shopping Cart</h1>
        
        {cart.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="flex-grow">
              {cart.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
              <div className="mt-4 flex justify-end">
                <button
                  onClick={clearCart}
                  className="text-rose-500 hover:text-rose-700 text-sm font-medium"
                >
                  Clear Cart
                </button>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="w-full lg:w-80">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm sticky top-24">
                <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${getCartTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery</span>
                    <span>$8.99</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${(getCartTotal() + 8.99).toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="mb-6 text-xs text-gray-500">
                  <p>* Taxes will be calculated at checkout</p>
                </div>
                
                <Link to="/order-form">
                  <Button className="w-full bg-rose-500 hover:bg-rose-600">
                    Proceed to Checkout
                  </Button>
                </Link>
                
                <div className="mt-4">
                  <Link to="/" className="text-rose-500 hover:text-rose-600 text-sm font-medium flex items-center justify-center">
                    <ShoppingCart className="h-4 w-4 mr-1" /> Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="mx-auto h-24 w-24 text-gray-400 mb-6">
              <ShoppingCart size={64} className="mx-auto" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added any cakes to your cart yet.</p>
            <Link to="/">
              <Button className="bg-rose-500 hover:bg-rose-600">
                Browse Our Cakes
              </Button>
            </Link>
            
            <div className="mt-12 max-w-md mx-auto bg-blue-50 p-4 rounded-lg flex items-start">
              <AlertCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
              <p className="text-sm text-blue-800 text-left">
                Need help selecting the perfect cake? Feel free to <Link to="/contact" className="underline font-medium">contact us</Link> or check out our <Link to="/" className="underline font-medium">featured cakes</Link> for inspiration.
              </p>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
