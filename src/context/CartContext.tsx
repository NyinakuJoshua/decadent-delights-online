
import { createContext, useContext, useState, ReactNode } from "react";
import { Cake } from "../data/cakes";

interface CartItem extends Cake {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (cake: Cake, quantity?: number) => void;
  removeFromCart: (cakeId: number) => void;
  updateQuantity: (cakeId: number, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (cake: Cake, quantity: number = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === cake.id);
      
      if (existingItem) {
        return prevCart.map(item => 
          item.id === cake.id 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      } else {
        return [...prevCart, { ...cake, quantity }];
      }
    });
  };

  const removeFromCart = (cakeId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== cakeId));
  };

  const updateQuantity = (cakeId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cakeId);
      return;
    }

    setCart(prevCart => 
      prevCart.map(item => 
        item.id === cakeId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal,
      getCartCount
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
