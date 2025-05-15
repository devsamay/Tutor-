import React, { useState, useEffect } from 'react';
import { BookOpen, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 text-2xl font-bold">
          <div className="bg-blue-600 text-white p-2 rounded-lg">
            <BookOpen size={24} />
          </div>
          <span className="text-blue-600">THRESHOLD 
            <span className="text-amber-500"> HOME TUITION</span>
          </span>
        </a>

        <nav className={`fixed md:relative top-0 right-0 h-screen md:h-auto w-full md:w-auto 
          bg-white md:bg-transparent transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} 
          md:translate-x-0 transition-transform duration-300 ease-in-out 
          flex items-center justify-center md:justify-end z-50 md:z-auto
          shadow-2xl md:shadow-none`}
        >
          <button 
            className="absolute top-6 right-6 p-2 text-slate-800 md:hidden"
            onClick={closeMenu}
          >
            <X size={24} />
          </button>
          <ul className="flex flex-col md:flex-row items-center gap-8 md:gap-6">
            {['home', 'about', 'services', 'exams', 'testimonials', 'team', 'contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item}`} 
                  className="text-lg md:text-base font-medium capitalize text-slate-800 hover:text-blue-600 
                    relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full 
                    after:h-0.5 after:bg-amber-500 after:transition-all after:duration-300"
                  onClick={closeMenu}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button 
          className="md:hidden text-slate-800 p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;