'use client';

import React from 'react';
import { Feather } from 'lucide-react';

interface HeaderProps {
  title: string;
  showBackButton: boolean;
  onBackPress: () => void;
}

const Header = ({ title, showBackButton, onBackPress }: HeaderProps) => {
  return (
    <div className="flex items-center justify-center p-4 bg-white border-b border-gray-200 relative">
      {showBackButton && (
        <button 
          onClick={onBackPress} 
          className="absolute left-4"
        >
          <Feather name="arrow-left" size={24} color="#333" />
        </button>
      )}
      <h1 className="text-lg font-semibold">{title}</h1>
    </div>
  );
};

export default Header;
