import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ProductContextType {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  selectedSize: string;
  setSelectedSize: (size: string) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedColor, setSelectedColor] = useState<string>('gray');
  const [selectedSize, setSelectedSize] = useState<string>('M');
  
  return (
    <ProductContext.Provider
      value={{
        selectedColor,
        setSelectedColor,
        selectedSize,
        setSelectedSize
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};