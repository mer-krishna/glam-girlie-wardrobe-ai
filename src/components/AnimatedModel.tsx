
import React from "react";

interface AnimatedModelProps {
  selectedOutfit?: string;
}

const AnimatedModel: React.FC<AnimatedModelProps> = ({ selectedOutfit }) => {
  // This would be replaced with actual model animation logic in a real implementation
  // For now we'll just render a placeholder with some animation

  return (
    <div className="relative w-full aspect-[3/4] bg-gradient-to-b from-lavender-100 to-lavender-200 rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {selectedOutfit ? (
          <div className="relative w-3/4 h-3/4">
            {/* Model base - this would be a 3D model in a real implementation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-64 bg-[url('/lovable-uploads/3d8e521f-ffa7-43ab-be67-e5d4e068c1ac.png')] bg-contain bg-center bg-no-repeat animate-float"></div>
            </div>
            
            {/* Outfit overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src={selectedOutfit} 
                alt="Selected outfit" 
                className="max-w-full max-h-full object-contain animate-float" 
                style={{ animationDelay: "0.5s" }}
              />
            </div>
          </div>
        ) : (
          <div className="text-center space-y-4 p-4">
            <div className="w-40 h-64 mx-auto bg-[url('/lovable-uploads/1e66255c-675b-462f-a286-1d206dbefbb2.png')] bg-contain bg-center bg-no-repeat animate-float"></div>
            <h3 className="font-pacifico text-xl text-barbie-300">Select an outfit to try on!</h3>
            <p className="text-sm text-muted-foreground">Click on any piece of clothing to see how it looks on the model</p>
          </div>
        )}
        
        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-xs shadow-sm border border-lavender-100 animate-pulse">
            AI-Powered Virtual Try-On
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedModel;
