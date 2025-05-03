import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { useProductContext } from '../context/ProductContext';

const ProductImages: React.FC = () => {
  const { selectedColor } = useProductContext();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Images based on selected color
  const images = {
    white: [
      'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg',
      'https://images.pexels.com/photos/9594147/pexels-photo-9594147.jpeg'
    ],
    gray: [
      'https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg',
      'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg'
    ],
    black: [
      'https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg',
      'https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg'
    ],
    red: [
      'https://images.pexels.com/photos/9594147/pexels-photo-9594147.jpeg',
      'https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg'
    ]
  };
  
  const productImages = selectedColor ? images[selectedColor] : images.white;
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };
  
  return (
    <div className="relative w-full">
      <div className="relative">
        <img 
          src={productImages[currentImageIndex]} 
          alt="Full Sleeve T-shirt" 
          className="w-full h-[450px] md:h-[550px] object-cover"
        />
        
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-[#E6C744] flex items-center justify-center">
          <button className="h-full w-full flex items-center justify-center" onClick={nextImage}>
            <ChevronRight size={24} className="text-white" />
          </button>
        </div>
        
        <div className="absolute top-4 right-20">
          <div className="bg-[#f5f5f5] px-3 py-2 text-xs font-medium">
            Place Available
          </div>
        </div>
      </div>
      
      <div className="hidden md:flex mt-4 gap-4">
        {productImages.map((image, index) => (
          <button 
            key={index}
            className={`w-20 h-20 ${currentImageIndex === index ? 'ring-2 ring-[#E6C744]' : ''}`}
            onClick={() => setCurrentImageIndex(index)}
          >
            <img src={image} alt={`Product view ${index + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;