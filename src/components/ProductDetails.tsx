import React from 'react';
import Header from './Header';
import ProductImages from './ProductImages';
import ProductInfo from './ProductInfo';
import RelatedProducts from './RelatedProducts';
import Footer from './Footer';

const ProductDetails: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="px-4 py-4">
          <h2 className="text-xl font-medium">T-shirts</h2>
        </div>
        
        <div className="md:flex md:px-4 md:gap-8">
          <div className="md:w-1/2 lg:w-3/5">
            <ProductImages />
          </div>
          
          <div className="md:w-1/2 lg:w-2/5">
            <ProductInfo />
          </div>
        </div>
        
        <div className="mt-8">
          <RelatedProducts />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetails;