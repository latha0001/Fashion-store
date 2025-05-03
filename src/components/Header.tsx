import React from 'react';
import { Search, ShoppingBag, User, Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="py-4 px-4 flex justify-between items-center border-b border-gray-100">
      <div className="flex items-center">
        <h1 className="font-black text-sm uppercase tracking-wide mr-4">
          ✦ FASHION
        </h1>
      </div>
      
      <nav className="hidden md:flex items-center space-x-6">
        <a href="#" className="text-sm font-medium">NEW ARRIVALS</a>
        <a href="#" className="text-sm font-medium">SHOP</a>
        <a href="#" className="text-sm font-medium">COLLECTIONS</a>
        <a href="#" className="text-sm font-medium">LOOKBOOK</a>
      </nav>
      
      <div className="flex items-center space-x-4">
        <button className="hidden md:flex items-center">
          <Search size={18} />
        </button>
        <button>
          <User size={18} />
        </button>
        <button>
          <ShoppingBag size={18} />
        </button>
        <button className="md:hidden">
          <Menu size={18} />
        </button>
        <button className="hidden md:block bg-black text-white text-xs py-1 px-3 rounded">
          SIGN IN
        </button>
      </div>
    </header>
  );
};

export default Header;