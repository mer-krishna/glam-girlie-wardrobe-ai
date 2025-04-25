
import React, { useState } from "react";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ImageSearch = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      toast.info("Coming soon! Search by image feature is under development.");
    }
  };

  return (
    <div className="flex items-center gap-2">
      <input
        type="file"
        accept="image/*"
        id="image-upload"
        className="hidden"
        onChange={handleImageUpload}
      />
      <label htmlFor="image-upload">
        <Button variant="outline" className="cursor-pointer" asChild>
          <div>
            <Upload size={16} className="mr-2" />
            Search by Image
          </div>
        </Button>
      </label>
    </div>
  );
};

export default ImageSearch;
