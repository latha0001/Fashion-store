import React from 'react';
import { useProductContext } from '../../context/ProductContext';

const SizeSelector: React.FC = () => {
  const { selectedSize, setSelectedSize } = useProductContext();
  
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  
  return (
    <div className="flex space-x-2">
      {sizes.map((size) => (
        <button
          key={size}
          className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${
            selectedSize === size
              ? 'bg-black text-white'
              : 'bg-white text-black border border-gray-300'
          }`}
          onClick={() => setSelectedSize(size)}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizeSelector;