
import React from "react";
import Layout from "../components/Layout";
import { useStore } from "../contexts/StoreContext";
import ProductCard from "../components/ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Favorites = () => {
  const { favorites } = useStore();

  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-8">
        <h1 className="font-pacifico text-3xl md:text-4xl text-barbie-300 mb-8">
          My Lovable Items
        </h1>

        {favorites.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm">
            <div className="w-20 h-20 mx-auto bg-lavender-100 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-lavender-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-4">Your favorites list is empty</h2>
            <p className="text-muted-foreground mb-8">
              Save your favorite items by clicking the heart icon on any product.
            </p>
            <Button asChild>
              <Link to="/">Start Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favorites.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Favorites;
