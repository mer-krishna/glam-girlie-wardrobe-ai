import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  fabric: string;
  sizes: string[];
  colors: string[];
  description: string;
  reviews: {
    rating: number;
    count: number;
  };
  discount?: number;
}

interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

interface StoreContextType {
  cart: CartItem[];
  favorites: Product[];
  addToCart: (product: Product, quantity: number, size: string, color: string) => void;
  removeFromCart: (productId: number) => void;
  updateCartQuantity: (productId: number, quantity: number) => void;
  toggleFavorite: (product: Product) => void;
  isInFavorites: (productId: number) => boolean;
  clearCart: () => void;
  cartTotal: number;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    setCartTotal(total);
  }, [cart]);

  const addToCart = (product: Product, quantity: number, size: string, color: string) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(
        item => 
          item.product.id === product.id && 
          item.selectedSize === size && 
          item.selectedColor === color
      );

      if (existingItem) {
        return prevCart.map(item => 
          item.product.id === product.id && 
          item.selectedSize === size && 
          item.selectedColor === color
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { product, quantity, selectedSize: size, selectedColor: color }];
      }
    });
    
    toast.success(`${product.name} added to cart!`);
  };

  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
    toast.info("Item removed from cart");
  };

  const updateCartQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCart(prevCart => 
      prevCart.map(item => 
        item.product.id === productId 
          ? { ...item, quantity } 
          : item
      )
    );
  };

  const toggleFavorite = (product: Product) => {
    setFavorites(prevFavorites => {
      const isAlreadyFavorite = prevFavorites.some(fav => fav.id === product.id);
      
      if (isAlreadyFavorite) {
        toast.info(`${product.name} removed from lovable items`);
        return prevFavorites.filter(fav => fav.id !== product.id);
      } else {
        toast.success(`${product.name} added to lovable items!`);
        return [...prevFavorites, product];
      }
    });
  };

  const isInFavorites = (productId: number) => {
    return favorites.some(fav => fav.id === productId);
  };

  const clearCart = () => {
    setCart([]);
    toast.success("Cart cleared!");
  };

  return (
    <StoreContext.Provider
      value={{
        cart,
        favorites,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        toggleFavorite,
        isInFavorites,
        clearCart,
        cartTotal
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};
