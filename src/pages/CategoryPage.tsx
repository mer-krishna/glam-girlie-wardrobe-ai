
import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import ProductGrid from "../components/ProductGrid";
import { getProductsByCategory } from "../data/products";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CategoryBanners = {
  "tops": {
    title: "Tops",
    description: "From cute crop tops to stylish blouses, find the perfect top to complete your look.",
    image: "/lovable-uploads/1e66255c-675b-462f-a286-1d206dbefbb2.png"
  },
  "bottoms": {
    title: "Bottoms",
    description: "Stylish pants, skirts, and shorts to mix and match with your favorite tops.",
    image: "/lovable-uploads/be729d07-5835-451d-a29c-e3211a876eea.png"
  },
  "short dresses": {
    title: "Short Dresses",
    description: "Cute and flirty short dresses for every occasion.",
    image: "/lovable-uploads/f86e0461-72ae-41a8-af8d-ea2bcd56ada3.png"
  },
  "long dresses": {
    title: "Long Dresses",
    description: "Elegant and stylish long dresses for a sophisticated look.",
    image: "/lovable-uploads/3d8e521f-ffa7-43ab-be67-e5d4e068c1ac.png"
  },
  "sets": {
    title: "Sets",
    description: "Perfectly coordinated sets to make outfit planning a breeze.",
    image: "/lovable-uploads/71e4cb5a-4dc3-431a-a760-7cb7deaa8f94.png"
  },
  "jumpsuits": {
    title: "Jumpsuits",
    description: "Trendy jumpsuits for an effortlessly chic look.",
    image: "/lovable-uploads/82df3940-fec4-4c76-8474-49e6aa908dca.png"
  }
};

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const products = getProductsByCategory(category || "");
  
  const bannerInfo = CategoryBanners[category as keyof typeof CategoryBanners] || {
    title: category,
    description: "Find your perfect style",
    image: "/lovable-uploads/3d8e521f-ffa7-43ab-be67-e5d4e068c1ac.png"
  };

  return (
    <Layout>
      {/* Category Banner */}
      <div 
        className="relative bg-lavender-100 py-12 md:py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${bannerInfo.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="font-pacifico text-4xl md:text-5xl text-barbie-300 mb-4">
            {bannerInfo.title}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            {bannerInfo.description}
          </p>
          <Button 
            className="bg-barbie-300 hover:bg-barbie-400 text-white"
            asChild
          >
            <Link to="/virtual-try-on">Try On Virtually</Link>
          </Button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-8">
        {products.length > 0 ? (
          <ProductGrid products={products} />
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold mb-4">No products found</h2>
            <p className="text-muted-foreground mb-8">
              We couldn't find any products in this category. 
              Check back later or browse other categories.
            </p>
            <Button asChild>
              <Link to="/">Return to Home</Link>
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CategoryPage;
