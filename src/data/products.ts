import { Product } from "../contexts/StoreContext";

const products: Product[] = [
  {
    id: 1,
    name: "Butterfly Crop Top",
    price: 1299,
    image: "/lovable-uploads/1e66255c-675b-462f-a286-1d206dbefbb2.png",
    category: "tops",
    fabric: "100% Cotton Jersey",
    sizes: ["XS", "S", "M", "L"],
    colors: ["#FFB6C1", "#FFFFFF", "#000000"],
    description: "Cute butterfly print crop top with thin shoulder straps. Perfect for summer weather and casual outings."
  },
  {
    id: 2,
    name: "Pleated Mini Skirt",
    price: 1699,
    image: "/lovable-uploads/f86e0461-72ae-41a8-af8d-ea2bcd56ada3.png",
    category: "bottoms",
    fabric: "Polyester Blend",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["#FFFFFF", "#000000", "#9B87F5"],
    description: "Stylish pleated mini skirt with elastic waistband. Versatile piece that can be dressed up or down."
  },
  {
    id: 3,
    name: "Sequin Party Dress",
    price: 3299,
    image: "/lovable-uploads/f243ae82-0f97-4b0d-9bfe-14b430607946.png",
    category: "short dresses",
    fabric: "Sequin Embellished Polyester",
    sizes: ["S", "M", "L"],
    colors: ["#9B87F5", "#FFB6C1", "#C0C0C0"],
    description: "Dazzling sequin party dress that catches the light with every movement. Perfect for special occasions."
  },
  {
    id: 4,
    name: "Floral Maxi Dress",
    price: 2799,
    image: "/lovable-uploads/3d8e521f-ffa7-43ab-be67-e5d4e068c1ac.png",
    category: "long dresses",
    fabric: "Chiffon",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#FFB6C1", "#D6BCFA", "#FFFFFF"],
    description: "Flowing floral maxi dress with a flattering silhouette. Ideal for garden parties and summer events."
  },
  {
    id: 5,
    name: "Checkered Statement Dress",
    price: 4599,
    image: "/lovable-uploads/82df3940-fec4-4c76-8474-49e6aa908dca.png",
    category: "long dresses",
    fabric: "Premium Satin",
    sizes: ["S", "M", "L"],
    colors: ["#000080", "#800000", "#006400"],
    description: "Bold checkered pattern dress with dramatic sleeves. Make a statement at your next event."
  },
  {
    id: 6,
    name: "Pink Lounge Set",
    price: 2199,
    image: "/lovable-uploads/71e4cb5a-4dc3-431a-a760-7cb7deaa8f94.png",
    category: "sets",
    fabric: "Cotton Blend",
    sizes: ["XS", "S", "M", "L"],
    colors: ["#FFB6C1", "#E5DEFF", "#FFDEE2"],
    description: "Comfortable yet stylish pink lounge set with ribbed texture. Perfect for relaxing at home or casual outings."
  },
  {
    id: 7,
    name: "Striped Jumpsuit",
    price: 2499,
    image: "/lovable-uploads/be729d07-5835-451d-a29c-e3211a876eea.png",
    category: "jumpsuits",
    fabric: "Soft Rayon",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#FFFFFF", "#9B87F5"],
    description: "Elegant striped jumpsuit with a flattering cut. Effortlessly chic for both casual and semi-formal occasions."
  },
  {
    id: 8,
    name: "Heart Neck Crop Top",
    price: 1099,
    image: "/lovable-uploads/1e66255c-675b-462f-a286-1d206dbefbb2.png",
    category: "tops",
    fabric: "Cotton Spandex",
    sizes: ["XS", "S", "M", "L"],
    colors: ["#FFFFFF", "#FFB6C1", "#000000"],
    description: "Sweet crop top with heart-shaped neckline. A cute addition to your casual wardrobe."
  },
  {
    id: 9,
    name: "Sparkle Mini Dress",
    price: 2899,
    image: "/lovable-uploads/f86e0461-72ae-41a8-af8d-ea2bcd56ada3.png",
    category: "short dresses",
    fabric: "Sequin Mesh",
    sizes: ["S", "M", "L"],
    colors: ["#FFB6C1", "#D6BCFA", "#C0C0C0"],
    description: "Dazzling mini dress covered in sparkly sequins. Perfect for parties and nights out."
  }
];

export default products;

export const getSuggestedProducts = (currentProductId: number, category: string): Product[] => {
  // First try to find products in the same category
  const sameCategory = products.filter(p => p.category === category && p.id !== currentProductId);
  
  // If we have enough products in the same category, return a random selection
  if (sameCategory.length >= 4) {
    return sameCategory.sort(() => 0.5 - Math.random()).slice(0, 4);
  }
  
  // Otherwise, include products from other categories to reach 4 suggestions
  const otherProducts = products.filter(p => p.category !== category && p.id !== currentProductId);
  return [...sameCategory, ...otherProducts]
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);
};

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const categories = [
  { name: "tops", label: "Tops" },
  { name: "bottoms", label: "Bottoms" },
  { name: "short dresses", label: "Short Dresses" },
  { name: "long dresses", label: "Long Dresses" },
  { name: "sets", label: "Sets" },
  { name: "jumpsuits", label: "Jumpsuits" }
];
