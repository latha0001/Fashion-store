import React from 'react';
import { useProductContext } from '../context/ProductContext';
import ColorSelector from './selectors/ColorSelector';
import SizeSelector from './selectors/SizeSelector';

const ProductInfo: React.FC = () => {
  const { selectedSize, setSelectedSize } = useProductContext();
  
  return (
    <div className="px-4 py-6">
      <h1 className="text-xl font-medium">Full Sleeve T-shirts</h1>
      
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div>
          <div className="text-sm font-medium mb-2">Fabric :</div>
          <div className="border border-[#E6C744] rounded px-3 py-1 text-xs inline-block">
            Cotton
          </div>
        </div>
        
        <div>
          <div className="text-sm font-medium mb-2">Colors :</div>
          <div className="border border-gray-200 rounded px-3 py-1 text-xs inline-block">
            Gray
          </div>
          
          <div className="mt-2">
            <ColorSelector />
          </div>
        </div>
        
        <div className="mt-4">
          <div className="text-sm font-medium mb-2">Sizes :</div>
          <SizeSelector />
        </div>
        
        <div className="mt-4">
          <div className="text-sm font-medium mb-2">Prices :</div>
          <div className="text-lg font-bold">₹450</div>
          <div className="text-xs text-gray-500">
            -25% M.R.P : ₹599
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex space-x-4">
        <button className="bg-black text-white py-2 px-6 rounded text-sm font-medium flex-1">
          Add to Cart
        </button>
        <button className="bg-[#E6C744] text-black py-2 px-6 rounded text-sm font-medium flex-1">
          Buy Now
        </button>
      </div>
      
      <div className="mt-6">
        <h3 className="text-sm font-medium mb-2">Product Details:</h3>
        <p className="text-xs text-gray-600 leading-relaxed">
          This premium full sleeve t-shirt is crafted from 100% cotton for maximum comfort and durability. 
          Perfect for everyday wear, it features a classic fit that flatters all body types. 
          The breathable fabric keeps you comfortable throughout the day.
        </p>
      </div>
    </div>
  );
};

export default ProductInfo;