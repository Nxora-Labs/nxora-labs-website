import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Logo = ({ className = "" }) => (
  <div className={`flex items-center ${className}`}>
    <div className="flex items-center space-x-1">
      <span className="text-3xl font-bold text-blue-700">N</span>
      <div className="relative">
        <span className="text-3xl font-bold text-blue-700">O</span>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        </div>
      </div>
      <span className="text-3xl font-bold text-green-500">R</span>
      <span className="text-3xl font-bold text-green-500">A</span>
    </div>
    <div className="ml-3 border-l-4 border-blue-700 pl-3">
      <span className="text-lg font-bold text-blue-700 tracking-wider">LABS</span>
    </div>
  </div>
);

const Footer = () => {
  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'Research & Development', href: '/services/research' },
        { name: 'Data Analytics', href: '/services/analytics' },
        { name: 'AI Solutions', href: '/services/ai' },
        { name: 'Consulting', href: '/services/consulting' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Healthcare', href: '/solutions/healthcare' },
        { name: 'Finance', href: '/solutions/finance' },
        { name: 'Technology', href: '/solutions/technology' },
        { name: 'Education', href: '/solutions/education' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'News', href: '/news' },
        { name: 'Partners', href: '/partners' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'Help Center', href: '/help' },
        { name: 'Community', href: '/community' },
        { name: 'Contact Us', href: '/contact' }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Logo className="mb-6" />
            <p className="text-gray-300 mb-6 leading-relaxed">
              NORA LABS is at the forefront of innovation, delivering cutting-edge research and development solutions that transform industries and drive technological advancement.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-500" />
                <span className="text-gray-300">contact@noralabs.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-500" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-green-500" />
                <span className="text-gray-300">123 Innovation Drive, Tech City</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4 text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links & Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Social Links */}
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                <Github className="w-6 h-6" />
              </a>
            </div>

            {/* Newsletter Signup */}
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
              <span className="text-gray-300">Stay updated with our latest innovations</span>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-blue-700 to-green-500 rounded-r-lg font-medium hover:from-blue-800 hover:to-green-600 transition-all duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              © 2025 NORA LABS. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Make sure this is a DEFAULT export
export default Footer;