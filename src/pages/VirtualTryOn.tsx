
import React, { useState } from "react";
import Layout from "../components/Layout";
import AnimatedModel from "../components/AnimatedModel";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import { Button } from "@/components/ui/button";
import { categories } from "../data/products";

const VirtualTryOn = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProductImage, setSelectedProductImage] = useState<string | undefined>(undefined);
  
  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-8">
        <div className="text-center mb-12">
          <h1 className="font-pacifico text-4xl md:text-5xl text-barbie-300 mb-4">
            Virtual Try-On
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mix and match outfits to create your perfect look! Select any item to see how it looks on our virtual model.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Virtual Model */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="sticky top-24">
              <AnimatedModel selectedOutfit={selectedProductImage} />
              
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Click on any item from the right to see how it looks!
                </p>
                <Button 
                  className="bg-barbie-300 hover:bg-barbie-400 text-white"
                  onClick={() => setSelectedProductImage(undefined)}
                >
                  Reset Model
                </Button>
              </div>
            </div>
          </div>
          
          {/* Product Selection */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            {/* Category Filter */}
            <div className="mb-8 overflow-x-auto">
              <div className="flex space-x-2 min-w-max pb-3">
                <Button 
                  variant={selectedCategory === "all" ? "default" : "outline"}
                  className={selectedCategory === "all" ? "bg-barbie-300 hover:bg-barbie-400" : ""}
                  onClick={() => setSelectedCategory("all")}
                >
                  All Items
                </Button>
                
                {categories.map((category) => (
                  <Button 
                    key={category.name}
                    variant={selectedCategory === category.name ? "default" : "outline"}
                    className={selectedCategory === category.name ? "bg-barbie-300 hover:bg-barbie-400" : ""}
                    onClick={() => setSelectedCategory(category.name)}
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {filteredProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="cursor-pointer"
                  onClick={() => setSelectedProductImage(product.image)}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VirtualTryOn;
