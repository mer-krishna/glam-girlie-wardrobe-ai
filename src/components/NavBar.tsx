
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Menu, X, Search } from "lucide-react";
import { useStore } from "../contexts/StoreContext";
import { categories } from "../data/products";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "../hooks/use-mobile";

const NavBar: React.FC = () => {
  const { cart, favorites } = useStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-lavender-100 py-3 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="font-pacifico text-2xl md:text-3xl text-barbie-300 text-glow">
            SlayStyle
          </span>
        </Link>

        {/* Mobile Menu Button */}
        {isMobile && (
          <Button variant="ghost" onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        )}

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/" className="nav-item">Home</Link>
            {categories.map((category) => (
              <Link 
                key={category.name}
                to={`/category/${category.name}`} 
                className="nav-item"
              >
                {category.label}
              </Link>
            ))}
            <Link to="/virtual-try-on" className="nav-item">
              Virtual Try-on
            </Link>
          </nav>
        )}

        {/* Desktop Icons */}
        {!isMobile && (
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/search" className="p-1.5 text-foreground hover:text-barbie-300 transition-colors">
              <Search size={20} />
            </Link>
            <Link to="/favorites" className="p-1.5 relative">
              <Heart size={20} className="text-foreground hover:text-barbie-300 transition-colors" />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-barbie-300 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  {favorites.length}
                </span>
              )}
            </Link>
            <Link to="/cart" className="p-1.5 relative">
              <ShoppingCart size={20} className="text-foreground hover:text-barbie-300 transition-colors" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-barbie-300 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        )}

        {/* Mobile Icons */}
        {isMobile && (
          <div className="flex items-center space-x-3">
            <Link to="/search" className="p-1 text-foreground">
              <Search size={20} />
            </Link>
            <Link to="/favorites" className="p-1 relative">
              <Heart size={20} className="text-foreground" />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-barbie-300 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  {favorites.length}
                </span>
              )}
            </Link>
            <Link to="/cart" className="p-1 relative">
              <ShoppingCart size={20} className="text-foreground" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-barbie-300 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && isMobile && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-lavender-100 shadow-lg animate-accordion-down">
          <nav className="flex flex-col p-4 space-y-3">
            <Link 
              to="/" 
              className="px-4 py-2 text-foreground hover:bg-lavender-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            {categories.map((category) => (
              <Link 
                key={category.name}
                to={`/category/${category.name}`} 
                className="px-4 py-2 text-foreground hover:bg-lavender-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {category.label}
              </Link>
            ))}
            <Link 
              to="/virtual-try-on" 
              className="px-4 py-2 text-foreground hover:bg-lavender-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Virtual Try-on
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
