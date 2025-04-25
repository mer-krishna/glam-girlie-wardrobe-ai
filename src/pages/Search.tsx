
import React, { useState } from "react";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import ImageSearch from "../components/ImageSearch";
import { Search as SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import products from "../data/products";
import { Product } from "../contexts/StoreContext";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    const results = products.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setSearchResults(results);
    setHasSearched(true);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-8">
        <div className="max-w-2xl mx-auto mb-12">
          <h1 className="font-pacifico text-3xl md:text-4xl text-barbie-300 text-center mb-8">
            Search Products
          </h1>
          
          <div className="space-y-4">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="text"
                placeholder="Search for products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-6 border-lavender-200 focus:border-barbie-300 focus:ring-barbie-300"
              />
              <button
                type="submit"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              >
                <SearchIcon size={18} />
              </button>
            </form>
            
            <div className="flex justify-center">
              <ImageSearch />
            </div>
          </div>
        </div>

        {hasSearched && (
          <div className="mb-8">
            <p className="text-muted-foreground">
              {searchResults.length === 0
                ? `No results found for "${searchTerm}"`
                : `Found ${searchResults.length} results for "${searchTerm}"`}
            </p>
          </div>
        )}

        {searchResults.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {searchResults.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {!hasSearched && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              Search for products by name, category, or description
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Search;
