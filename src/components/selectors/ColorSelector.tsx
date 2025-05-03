import React from 'react';
import { useProductContext } from '../../context/ProductContext';

const ColorSelector: React.FC = () => {
  const { selectedColor, setSelectedColor } = useProductContext();
  
  const colors = [
    { id: 'black', value: '#000000' },
    { id: 'white', value: '#FFFFFF' },
    { id: 'gray', value: '#C2C8DA' },
    { id: 'red', value: '#E74C3C' },
    { id: 'orange', value: '#E67E22' },
    { id: 'yellow', value: '#E6C744' }
  ];
  
  return (
    <div className="flex space-x-2">
      {colors.map((color) => (
        <button
          key={color.id}
          className={`w-6 h-6 rounded-full ${
            selectedColor === color.id ? 'ring-2 ring-offset-2 ring-gray-400' : ''
          }`}
          style={{ backgroundColor: color.value, border: color.id === 'white' ? '1px solid #ddd' : 'none' }}
          onClick={() => setSelectedColor(color.id)}
          aria-label={`Select ${color.id} color`}
        />
      ))}
    </div>
  );
};

export default ColorSelector;