import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-8 pb-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-black mb-4">FASHION</h2>
            <p className="text-xs text-gray-400 max-w-xs">
              Complete your style with awesome clothes from us.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="bg-[#E6C744] w-6 h-6 rounded-full flex items-center justify-center">
                <Facebook size={14} className="text-black" />
              </a>
              <a href="#" className="bg-[#E6C744] w-6 h-6 rounded-full flex items-center justify-center">
                <Twitter size={14} className="text-black" />
              </a>
              <a href="#" className="bg-[#E6C744] w-6 h-6 rounded-full flex items-center justify-center">
                <Instagram size={14} className="text-black" />
              </a>
              <a href="#" className="bg-[#E6C744] w-6 h-6 rounded-full flex items-center justify-center">
                <Youtube size={14} className="text-black" />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-sm font-medium mb-2">LINKS</h3>
              <ul className="text-xs text-gray-400 space-y-1">
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-2">SHOP</h3>
              <ul className="text-xs text-gray-400 space-y-1">
                <li><a href="#">T-Shirts</a></li>
                <li><a href="#">Shirts</a></li>
                <li><a href="#">Jeans</a></li>
                <li><a href="#">Hoodies</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-2">HELP</h3>
              <ul className="text-xs text-gray-400 space-y-1">
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Shipping</a></li>
                <li><a href="#">Returns</a></li>
                <li><a href="#">Size Guide</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-4">
          <p className="text-xs text-gray-500 text-center">
            © 2025 FASHION. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;