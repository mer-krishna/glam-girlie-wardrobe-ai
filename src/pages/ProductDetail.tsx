
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById, getSuggestedProducts } from "../data/products";
import Layout from "../components/Layout";
import ProductGrid from "../components/ProductGrid";
import { Heart } from "lucide-react";
import { useStore } from "../contexts/StoreContext";
import { Button } from "@/components/ui/button";
import SizeChart from "../components/SizeChart";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(parseInt(id || "0"));
  const { addToCart, toggleFavorite, isInFavorites } = useStore();
  
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [showSizeChart, setShowSizeChart] = useState(false);
  
  const suggestedProducts = product ? getSuggestedProducts(product.id, product.category) : [];
  const isFavorite = product ? isInFavorites(product.id) : false;

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0]);
      setSelectedColor(product.colors[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto py-12 px-4 md:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Link to="/" className="text-barbie-300 hover:underline">
            Return to home page
          </Link>
        </div>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize, selectedColor);
  };

  const handleToggleFavorite = () => {
    toggleFavorite(product);
  };

  const handleQuantityChange = (value: number) => {
    if (value >= 1 && value <= 10) {
      setQuantity(value);
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-8">
        {/* Breadcrumbs */}
        <div className="mb-8 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-barbie-300">Home</Link>
          <span className="mx-2">/</span>
          <Link 
            to={`/category/${product.category}`} 
            className="hover:text-barbie-300"
          >
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="rounded-lg overflow-hidden bg-lavender-50">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-2xl font-bold text-barbie-400">₹{product.price.toLocaleString()}</p>
            
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Fabric</p>
              <p className="font-medium">{product.fabric}</p>
            </div>
            
            {/* Color Selection */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">Color</p>
                <p className="text-xs font-medium">{selectedColor}</p>
              </div>
              <div className="flex gap-3">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`color-swatch ${selectedColor === color ? 'selected' : ''}`}
                    style={{ backgroundColor: color }}
                    aria-label={`Select color ${color}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Size Selection */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">Size</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="link" 
                      className="text-xs text-barbie-300 p-0 h-auto"
                    >
                      Size Chart
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <SizeChart />
                  </DialogContent>
                </Dialog>
              </div>
              <div className="flex gap-3">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Quantity */}
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">Quantity</p>
              <div className="flex items-center border border-input rounded-md w-32">
                <button 
                  onClick={() => handleQuantityChange(quantity - 1)}
                  className="px-3 py-2 text-muted-foreground hover:text-foreground"
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={quantity}
                  onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
                  className="w-full text-center border-0 focus:ring-0"
                />
                <button 
                  onClick={() => handleQuantityChange(quantity + 1)}
                  className="px-3 py-2 text-muted-foreground hover:text-foreground"
                  disabled={quantity >= 10}
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button 
                className="flex-1 bg-barbie-300 hover:bg-barbie-400 text-white"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <Button 
                variant="outline" 
                className={`p-3 border ${isFavorite ? 'border-barbie-300' : 'border-input'}`}
                onClick={handleToggleFavorite}
              >
                <Heart 
                  className={`${isFavorite ? 'fill-barbie-300 text-barbie-300' : ''}`} 
                  size={20} 
                />
              </Button>
            </div>
            
            {/* Product Description */}
            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground mb-2">Product Description</p>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
        
        {/* Suggested Products */}
        <div className="mt-16">
          <ProductGrid 
            products={suggestedProducts} 
            title="You Might Also Like"
          />
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
