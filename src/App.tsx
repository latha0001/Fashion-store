import React from 'react';
import ProductDetails from './components/ProductDetails';
import { ProductProvider } from './context/ProductContext';

function App() {
  return (
    <ProductProvider>
      <div className="min-h-screen bg-white">
        <ProductDetails />
      </div>
    </ProductProvider>
  );
}

export default App;