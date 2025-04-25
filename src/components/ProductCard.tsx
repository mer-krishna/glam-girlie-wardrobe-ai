
import React from "react";
import { Link } from "react-router-dom";
import { Heart, Star, StarHalf } from "lucide-react";
import { useStore, Product } from "../contexts/StoreContext";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { toggleFavorite, isInFavorites } = useStore();
  const isFavorite = isInFavorites(product.id);

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} size={14} className="fill-barbie-300 text-barbie-300" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" size={14} className="fill-barbie-300 text-barbie-300" />);
    }

    return stars;
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(product);
  };

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow">
        <div className="relative aspect-square overflow-hidden bg-lavender-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          <button
            onClick={handleFavoriteClick}
            className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm z-10 hover:bg-white"
          >
            <Heart
              size={18}
              className={`${
                isFavorite ? "fill-barbie-300 text-barbie-300" : "text-gray-400"
              }`}
            />
          </button>
          {product.discount && (
            <Badge className="absolute top-3 left-3 bg-barbie-300 hover:bg-barbie-400">
              {product.discount}% OFF
            </Badge>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-foreground truncate">{product.name}</h3>
          <div className="flex justify-between items-center mt-1">
            <p className="text-barbie-400 font-bold">₹{product.price.toLocaleString()}</p>
            <p className="text-xs text-gray-500 uppercase">{product.category}</p>
          </div>
          <div className="flex items-center gap-1 mt-2">
            {renderStars(product.reviews.rating)}
            <span className="text-xs text-gray-500 ml-1">
              ({product.reviews.count})
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
