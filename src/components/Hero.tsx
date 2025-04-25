
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  const [currentBackground, setCurrentBackground] = useState(0);
  const backgrounds = [
    "bg-gradient-to-r from-barbie-100 to-lavender-100",
    "bg-gradient-to-r from-lavender-100 to-barbie-200",
    "bg-gradient-to-r from-barbie-200 to-barbie-300",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${backgrounds[currentBackground]} transition-colors duration-1000 py-12 md:py-20`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-6 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="font-pacifico text-4xl md:text-5xl lg:text-6xl text-barbie-400 text-glow">
            Slay Your Style
          </h1>
          <p className="text-lg md:text-xl font-medium text-foreground">
            Try on fabulous outfits virtually before you buy! Mix and match to create
            your perfect look.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button 
              size="lg"
              className="bg-barbie-300 hover:bg-barbie-400 text-white"
              asChild
            >
              <Link to="/virtual-try-on">Try Now</Link>
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-barbie-300 text-barbie-300 hover:bg-barbie-100"
              asChild
            >
              <Link to="/category/tops">Shop Collection</Link>
            </Button>
          </div>
          <div className="pt-4">
            <p className="text-sm text-muted-foreground font-medium">✨ AI-powered virtual try-on technology ✨</p>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center relative">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-white/30 backdrop-blur-sm animate-float flex items-center justify-center">
            <img 
              src="/lovable-uploads/3d8e521f-ffa7-43ab-be67-e5d4e068c1ac.png" 
              alt="Fashion Model" 
              className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-full border-4 border-white"
            />
          </div>
          <div className="absolute top-0 -right-4 w-20 h-20 bg-white/70 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center">
            <img 
              src="/lovable-uploads/1e66255c-675b-462f-a286-1d206dbefbb2.png" 
              alt="Top" 
              className="w-12 h-12 object-contain animate-pulse"
            />
          </div>
          <div className="absolute bottom-10 -left-4 w-24 h-24 bg-white/70 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center">
            <img 
              src="/lovable-uploads/f86e0461-72ae-41a8-af8d-ea2bcd56ada3.png" 
              alt="Dress" 
              className="w-16 h-16 object-contain animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
          </div>
          <div className="absolute bottom-0 right-10 w-16 h-16 bg-white/70 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center">
            <img 
              src="/lovable-uploads/be729d07-5835-451d-a29c-e3211a876eea.png" 
              alt="Bottoms" 
              className="w-10 h-10 object-contain animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
