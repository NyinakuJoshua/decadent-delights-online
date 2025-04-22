
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Cake } from "@/data/cakes";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

interface CartItemProps {
  item: Cake & { quantity: number };
}

const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  const handleQuantityChange = (newQuantity: number) => {
    setIsLoading(true);
    
    // Simulate a small delay to show loading state
    setTimeout(() => {
      updateQuantity(item.id, newQuantity);
      setIsLoading(false);
    }, 200);
  };

  const handleRemove = () => {
    setIsLoading(true);
    
    // Simulate a small delay to show loading state
    setTimeout(() => {
      removeFromCart(item.id);
    }, 200);
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center py-4 border-b border-gray-200">
      <div className="w-full sm:w-24 h-24 mb-4 sm:mb-0 mr-0 sm:mr-4 overflow-hidden rounded">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-grow">
        <Link 
          to={`/cake/${item.id}`}
          className="font-medium text-gray-900 hover:text-rose-500 transition-colors"
        >
          {item.name}
        </Link>
        <p className="text-sm text-gray-500 mt-1 line-clamp-1">{item.description}</p>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2">
          <span className="font-semibold text-gray-900 mb-2 sm:mb-0">
            ${(item.price * item.quantity).toFixed(2)}
          </span>
          
          <div className="flex items-center">
            <div className="flex items-center border rounded">
              <button
                onClick={() => handleQuantityChange(item.quantity - 1)}
                disabled={item.quantity <= 1 || isLoading}
                className="px-3 py-1 text-gray-600 hover:text-rose-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Minus size={14} />
              </button>
              <span className="px-3 py-1 min-w-[30px] text-center">
                {isLoading ? "..." : item.quantity}
              </span>
              <button
                onClick={() => handleQuantityChange(item.quantity + 1)}
                disabled={isLoading}
                className="px-3 py-1 text-gray-600 hover:text-rose-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Plus size={14} />
              </button>
            </div>
            <button
              onClick={handleRemove}
              disabled={isLoading}
              className="ml-2 text-gray-500 hover:text-red-500 p-1 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Remove item"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
