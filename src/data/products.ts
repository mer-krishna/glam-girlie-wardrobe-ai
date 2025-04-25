import { Product } from "../contexts/StoreContext";

const products: Product[] = [
  {
    id: 1,
    name: "Pink Square Neck Top",
    price: 1299,
    image: "/lovable-uploads/d62ce3cb-580e-4e0e-b1f7-b5dced64e2ec.png",
    category: "tops",
    fabric: "Cotton Spandex Blend",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Pink", "White", "Black"],
    description: "Elegant square neck top with long sleeves. Perfect for a sophisticated yet casual look.",
    reviews: { rating: 4.8, count: 156 },
    discount: 50
  },
  {
    id: 2,
    name: "Butterfly Print Crop Top",
    price: 999,
    image: "/lovable-uploads/99e8434c-f6ff-42b3-9069-fb21dc700388.png",
    category: "tops",
    fabric: "Cotton Jersey",
    sizes: ["S", "M", "L"],
    colors: ["Grey", "Pink"],
    description: "Cute butterfly print crop top with cutout detail. Perfect for a girly casual look.",
    reviews: { rating: 4.9, count: 234 }
  },
  {
    id: 3,
    name: "Pink Layered Mini Skirt",
    price: 1499,
    image: "/lovable-uploads/2bf5fd38-b0e1-43ca-b4e2-8f74d94c2d87.png",
    category: "bottoms",
    fabric: "Satin Blend",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Pink", "White"],
    description: "Adorable layered mini skirt with ruffle details. Perfect for a sweet feminine look.",
    reviews: { rating: 4.7, count: 189 }
  },
  {
    id: 4,
    name: "Pearl Bow Ring",
    price: 599,
    image: "/lovable-uploads/4ef37a36-f2b7-422b-9e8f-52d5494186e9.png",
    category: "jewellery",
    fabric: "Pearl and Metal Alloy",
    sizes: ["One Size"],
    colors: ["Pink", "White"],
    description: "Cute bow ring with pearl detailing. Adds a perfect girly touch to any outfit.",
    reviews: { rating: 4.9, count: 312 }
  },
  {
    id: 5,
    name: "Sequin Party Dress",
    price: 3299,
    image: "/lovable-uploads/f243ae82-0f97-4b0d-9bfe-14b430607946.png",
    category: "dresses",
    fabric: "Sequin Embellished Polyester",
    sizes: ["S", "M", "L"],
    colors: ["#9B87F5", "#FFB6C1", "#C0C0C0"],
    description: "Dazzling sequin party dress that catches the light with every movement. Perfect for special occasions.",
    reviews: { rating: 4.6, count: 178 }
  },
  {
    id: 6,
    name: "Floral Maxi Dress",
    price: 2799,
    image: "/lovable-uploads/3d8e521f-ffa7-43ab-be67-e5d4e068c1ac.png",
    category: "dresses",
    fabric: "Chiffon",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#FFB6C1", "#D6BCFA", "#FFFFFF"],
    description: "Flowing floral maxi dress with a flattering silhouette. Ideal for garden parties and summer events.",
    reviews: { rating: 4.8, count: 245 }
  },
  {
    id: 7,
    name: "Pleated Mini Skirt",
    price: 1699,
    image: "/lovable-uploads/f86e0461-72ae-41a8-af8d-ea2bcd56ada3.png",
    category: "bottoms",
    fabric: "Polyester Blend",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["#FFFFFF", "#000000", "#9B87F5"],
    description: "Stylish pleated mini skirt with elastic waistband. Versatile piece that can be dressed up or down.",
    reviews: { rating: 4.7, count: 203 }
  },
  {
    id: 8,
    name: "Heart Pendant Necklace",
    price: 899,
    image: "/lovable-uploads/1e66255c-675b-462f-a286-1d206dbefbb2.png",
    category: "jewellery",
    fabric: "Sterling Silver",
    sizes: ["One Size"],
    colors: ["Silver", "Gold", "Rose Gold"],
    description: "Delicate heart pendant necklace that adds a touch of romance to any outfit.",
    reviews: { rating: 4.9, count: 287 },
    discount: 30
  },
  {
    id: 9,
    name: "Sparkle Mini Dress",
    price: 2899,
    image: "/lovable-uploads/f86e0461-72ae-41a8-af8d-ea2bcd56ada3.png",
    category: "dresses",
    fabric: "Sequin Mesh",
    sizes: ["S", "M", "L"],
    colors: ["#FFB6C1", "#D6BCFA", "#C0C0C0"],
    description: "Dazzling mini dress covered in sparkly sequins. Perfect for parties and nights out.",
    reviews: { rating: 4.5, count: 167 }
  }
];

export default products;

export const getSuggestedProducts = (currentProductId: number, category: string): Product[] => {
  const sameCategory = products.filter(p => p.category === category && p.id !== currentProductId);
  
  if (sameCategory.length >= 4) {
    return sameCategory.sort(() => 0.5 - Math.random()).slice(0, 4);
  }
  
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
  { name: "dresses", label: "Dresses" },
  { name: "jewellery", label: "Jewellery" }
];
