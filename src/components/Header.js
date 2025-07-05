import React, { useState } from 'react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    return (
      <header className="sticky top-0 bg-dark-900/80 backdrop-blur-md shadow-2xl border-b border-dark-700/50 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent hover:scale-105 transition-all duration-300 ">
            Neev Ahuja
          </a>
  
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg bg-dark-800/50 hover:bg-dark-700/50 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
  
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="relative text-gray-300 hover:text-primary-400 transition-all duration-300 font-medium group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-accent-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#projects" className="relative text-gray-300 hover:text-primary-400 transition-all duration-300 font-medium group">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-accent-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#skills" className="relative text-gray-300 hover:text-primary-400 transition-all duration-300 font-medium group">
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-accent-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="relative text-gray-300 hover:text-primary-400 transition-all duration-300 font-medium group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-accent-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>
        </div>
  
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-dark-800/95 backdrop-blur-md shadow-2xl border-t border-dark-700/50">
            <nav className="flex flex-col px-6 py-4 space-y-2">
              <a href="#about" className="py-3 text-gray-300 hover:text-primary-400 hover:bg-dark-700/50 rounded-lg px-3 transition-all duration-300 font-medium" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#projects" className="py-3 text-gray-300 hover:text-primary-400 hover:bg-dark-700/50 rounded-lg px-3 transition-all duration-300 font-medium" onClick={() => setIsMenuOpen(false)}>Projects</a>
              <a href="#skills" className="py-3 text-gray-300 hover:text-primary-400 hover:bg-dark-700/50 rounded-lg px-3 transition-all duration-300 font-medium" onClick={() => setIsMenuOpen(false)}>Skills</a>
              <a href="#contact" className="py-3 text-gray-300 hover:text-primary-400 hover:bg-dark-700/50 rounded-lg px-3 transition-all duration-300 font-medium" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </nav>
          </div>
        )}
      </header>
    );
  }

  export default Header;