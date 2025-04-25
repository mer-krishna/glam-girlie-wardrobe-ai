
import React from "react";
import Layout from "../components/Layout";
import { useStore } from "../contexts/StoreContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { toast } from "sonner";

const Cart = () => {
  const { cart, removeFromCart, updateCartQuantity, clearCart, cartTotal } = useStore();

  const handleCheckout = () => {
    toast.success("Thank you for your order! This is just a demo, so no real purchase has been made.");
    clearCart();
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-8">
        <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm">
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto bg-lavender-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-lavender-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
            </div>
            <h2 className="text-xl font-semibold mb-4">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Button asChild>
              <Link to="/">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Cart Items */}
            <div className="md:col-span-2 lg:col-span-3">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                {/* Header */}
                <div className="hidden md:grid grid-cols-12 bg-lavender-50 px-6 py-3">
                  <div className="col-span-6">
                    <h2 className="text-sm font-medium">Product</h2>
                  </div>
                  <div className="col-span-2 text-center">
                    <h2 className="text-sm font-medium">Price</h2>
                  </div>
                  <div className="col-span-2 text-center">
                    <h2 className="text-sm font-medium">Quantity</h2>
                  </div>
                  <div className="col-span-2 text-right">
                    <h2 className="text-sm font-medium">Total</h2>
                  </div>
                </div>

                {/* Cart Items */}
                {cart.map((item) => (
                  <div key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`} className="grid grid-cols-1 md:grid-cols-12 border-b border-gray-100 px-4 py-4 md:px-6 md:py-6 items-center">
                    {/* Product */}
                    <div className="col-span-6 flex items-center gap-4 mb-4 md:mb-0">
                      <Link to={`/product/${item.product.id}`}>
                        <div className="w-16 h-16 bg-lavender-50 rounded overflow-hidden">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </Link>
                      <div>
                        <Link to={`/product/${item.product.id}`} className="font-medium hover:text-barbie-300">
                          {item.product.name}
                        </Link>
                        <div className="text-xs text-muted-foreground mt-1">
                          Size: {item.selectedSize}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1 flex items-center gap-2">
                          Color: 
                          <span 
                            className="inline-block w-3 h-3 rounded-full" 
                            style={{ backgroundColor: item.selectedColor }}
                          ></span>
                        </div>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex justify-between items-center md:col-span-2 md:block text-center mb-2 md:mb-0">
                      <span className="md:hidden text-muted-foreground">Price:</span>
                      <span>₹{item.product.price.toLocaleString()}</span>
                    </div>

                    {/* Quantity */}
                    <div className="flex justify-between items-center md:col-span-2 md:flex md:justify-center mb-2 md:mb-0">
                      <span className="md:hidden text-muted-foreground">Quantity:</span>
                      <div className="flex items-center border border-input rounded-md">
                        <button
                          onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                          className="px-2 py-1 text-muted-foreground hover:text-foreground"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-1 text-muted-foreground hover:text-foreground"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Total */}
                    <div className="flex justify-between items-center md:col-span-2 md:text-right md:pr-8">
                      <span className="md:hidden text-muted-foreground">Total:</span>
                      <span className="font-medium">₹{(item.product.price * item.quantity).toLocaleString()}</span>
                    </div>

                    {/* Remove Button */}
                    <div className="col-span-1 md:col-span-12 flex md:justify-end">
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-muted-foreground hover:text-barbie-300 mt-2 md:mt-2"
                      >
                        <X size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal ({cart.reduce((acc, item) => acc + item.quantity, 0)} items)</span>
                    <span>₹{cartTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>FREE</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax</span>
                    <span>₹{(cartTotal * 0.18).toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-100 pt-4 mb-6">
                  <div className="flex justify-between">
                    <span className="font-semibold">Total</span>
                    <span className="font-semibold">₹{(cartTotal + (cartTotal * 0.18)).toLocaleString()}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-barbie-300 hover:bg-barbie-400 text-white"
                  onClick={handleCheckout}
                >
                  Checkout
                </Button>
                
                <Button 
                  variant="outline"
                  className="w-full mt-4"
                  asChild
                >
                  <Link to="/">Continue Shopping</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
