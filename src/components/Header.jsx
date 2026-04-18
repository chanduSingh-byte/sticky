import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out 
      ${isScrolled 
        ? 'py-3 bg-white/70 backdrop-blur-md border-b border-white/20 shadow-sm' 
        : 'py-5 bg-transparent'}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo with a Gradient Hook */}
        <div className="group flex items-center space-x-2 cursor-pointer">
          <div className="w-8 h-8 bg-gradient-to-tr from-indigo-600 to-violet-500 rounded-lg shadow-indigo-200 shadow-lg group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-xl font-extrabold tracking-tight text-slate-900">
            Chandan<span className="text-indigo-600">Singh</span>
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'Features', 'About'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors duration-200 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="flex items-center space-x-4">
          <button className="hidden sm:block text-sm font-semibold text-slate-700 hover:text-slate-900">
            Sign In
          </button>
          <button className="px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-indigo-600 hover:shadow-indigo-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;