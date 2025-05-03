import React, { useRef } from 'react';

const RelatedProducts: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const products = [
    {
      id: 1,
      name: 'V-Neck T-Shirts',
      image: 'https://images.pexels.com/photos/2887767/pexels-photo-2887767.jpeg',
      price: '₹350'
    },
    {
      id: 2,
      name: 'Full Sleeve T-Shirts',
      image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg',
      price: '₹450'
    },
    {
      id: 3,
      name: 'Polo T-Shirts',
      image: 'https://images.pexels.com/photos/8545986/pexels-photo-8545986.jpeg',
      price: '₹399'
    },
    {
      id: 4,
      name: 'Graphic T-Shirts',
      image: 'https://images.pexels.com/photos/9594147/pexels-photo-9594147.jpeg',
      price: '₹499'
    }
  ];
  
  return (
    <div className="py-6">
      <h2 className="px-4 text-lg font-medium mb-4">Related Products</h2>
      
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {products.map((product) => (
          <div 
            key={product.id} 
            className="min-w-[150px] max-w-[150px] mx-2 first:ml-4 last:mr-4"
          >
            <div className="bg-gray-50 rounded">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="mt-2">
              <h3 className="text-xs font-medium">{product.name}</h3>
              <p className="text-xs">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;