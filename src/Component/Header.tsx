"use client";

import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Logo = ({ className = "" }) => (
  <div className={`flex items-center ${className}`}>
    <img 
      src="/NEXORA_LOGO8_resized_for_business_card.png" 
      alt="NXORA LABS"
      className="h-12 w-auto max-w-none"
      onError={(e) => {
        console.error('Logo image failed to load:', e.target.src);
        e.target.style.display = 'none';
      }}
      onLoad={() => console.log('Logo image loaded successfully')}
    />
  </div>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigation = [
    { name: 'Home', href: '/' },
   { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: 'Web Development', href: '/services/web' },
        { name: 'App Development', href: '/services/app' },
        { name: 'Consulting', href: '/services/consulting' },
        { name: 'POS Systems', href: '/services/pos' },
        { name: 'ERP Development', href: '/services/erp' },
        { name: 'Digital Marketing', href: '/services/digital-marketing' }
      ]
    },
    { 
      name: 'Solutions', 
      href: '/solutions',
      dropdown: [
        { name: 'Healthcare', href: '/solutions/healthcare' },
        { name: 'Finance', href: '/solutions/finance' },
        { name: 'Technology', href: '/solutions/technology' },
        { name: 'Education', href: '/solutions/education' }
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="flex items-center space-x-1 text-gray-700 hover:text-blue-700 cursor-pointer transition-colors duration-200"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span className="font-medium">{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                    
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10">
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-blue-700 font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-blue-700 to-green-500 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-800 hover:to-green-600 transition-all duration-200 shadow-md hover:shadow-lg">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            {navigation.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 hover:text-blue-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  {item.name}
                </a>
                {item.dropdown && (
                  <div className="ml-4 border-l-2 border-gray-200">
                    {item.dropdown.map((dropdownItem) => (
                      <a
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block px-4 py-1 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors duration-200"
                      >
                        {dropdownItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-4 pt-4">
              <button className="w-full bg-gradient-to-r from-blue-700 to-green-500 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-800 hover:to-green-600 transition-all duration-200">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Make sure this is a DEFAULT export
export default Header;