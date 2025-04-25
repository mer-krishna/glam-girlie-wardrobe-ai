
import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import AnimatedModel from "../components/AnimatedModel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { categories } from "../data/products";
import products from "../data/products";

const Index = () => {
  const featuredProducts = products.slice(0, 4);
  const newArrivals = products.slice(4, 8);

  return (
    <Layout>
      <Hero />
      
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-pacifico text-3xl md:text-4xl text-barbie-300 mb-4">
            Featured Collection
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our handpicked selection of the cutest, trendiest pieces that will make you slay! Mix and match to create your perfect look.
          </p>
        </div>
        
        <ProductGrid products={featuredProducts} />
        
        <div className="flex justify-center mt-8">
          <Button 
            variant="outline"
            className="border-barbie-300 text-barbie-300 hover:bg-barbie-100"
            asChild
          >
            <Link to="/category/tops">View All</Link>
          </Button>
        </div>
      </section>
      
      <section className="py-12 px-4 md:px-8 bg-lavender-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-pacifico text-3xl md:text-4xl text-barbie-300 mb-4">
              Virtual Try-On
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how our clothes look on you before you buy! Our AI-powered virtual dressing room allows you to mix and match different pieces.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <h3 className="text-2xl font-bold">Try Before You Buy!</h3>
              <p className="text-muted-foreground">
                Our virtual try-on technology lets you see exactly how our clothes will look on you. Mix and match tops, bottoms, and dresses to find your perfect outfit!
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-barbie-200 flex items-center justify-center text-barbie-400 font-bold shrink-0">
                    1
                  </div>
                  <p>Select your favorite clothing items</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-barbie-200 flex items-center justify-center text-barbie-400 font-bold shrink-0">
                    2
                  </div>
                  <p>See them on our virtual model in real-time</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-barbie-200 flex items-center justify-center text-barbie-400 font-bold shrink-0">
                    3
                  </div>
                  <p>Mix and match to create perfect combinations</p>
                </div>
              </div>
              <Button 
                className="bg-barbie-300 hover:bg-barbie-400 text-white"
                asChild
              >
                <Link to="/virtual-try-on">Try Now</Link>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <AnimatedModel />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-pacifico text-3xl md:text-4xl text-barbie-300 mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find exactly what you're looking for by browsing our carefully curated categories.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link 
              key={category.name}
              to={`/category/${category.name}`} 
              className="group"
            >
              <div className="aspect-square rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-barbie-300/70 group-hover:to-barbie-400/70 transition-all duration-300"></div>
                <img 
                  src={`/lovable-uploads/${category.name === "tops" ? "1e66255c-675b-462f-a286-1d206dbefbb2.png" : 
                         category.name === "bottoms" ? "be729d07-5835-451d-a29c-e3211a876eea.png" :
                         category.name === "short dresses" ? "f86e0461-72ae-41a8-af8d-ea2bcd56ada3.png" : 
                         category.name === "long dresses" ? "3d8e521f-ffa7-43ab-be67-e5d4e068c1ac.png" : 
                         category.name === "sets" ? "71e4cb5a-4dc3-431a-a760-7cb7deaa8f94.png" : 
                         "82df3940-fec4-4c76-8474-49e6aa908dca.png"}`} 
                  alt={category.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white font-bold text-xl md:text-2xl text-shadow">
                    {category.label}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-pacifico text-3xl md:text-4xl text-barbie-300 mb-4">
            New Arrivals
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Be the first to shop our latest additions and stay ahead of the trends.
          </p>
        </div>
        
        <ProductGrid products={newArrivals} />
        
        <div className="flex justify-center mt-8">
          <Button 
            variant="outline"
            className="border-barbie-300 text-barbie-300 hover:bg-barbie-100"
            asChild
          >
            <Link to="/category/tops">Browse All</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
