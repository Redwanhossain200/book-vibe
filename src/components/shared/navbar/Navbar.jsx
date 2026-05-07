import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Listed Books', path: '/books' },
    { name: 'Pages to Read', path: '/page-to-read' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-150 transition-all duration-500 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[#23BE0A] rounded-xl flex items-center justify-center text-white font-bold text-2xl transition-transform duration-500 group-hover:rotate-360 shadow-lg shadow-[#23BE0A]/20">
            B
          </div>
          <span className="text-2xl font-bold text-gray-900 tracking-tight">BookVibe</span>
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-base font-bold transition-all duration-300 relative group py-2 ${
                isActive(link.path)
                  ? 'text-[#23BE0A]'
                  : 'text-gray-600 hover:text-[#23BE0A]'
              }`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-[#23BE0A] transition-all duration-300 ${
                isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <button className="px-6 py-2.5 font-bold text-gray-700 hover:text-[#23BE0A] transition-all duration-300 hover:scale-105 active:scale-95">
            Sign In
          </button>
          <button className="px-7 py-2.5 bg-[#23BE0A] hover:bg-[#1fa008] text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-[#23BE0A]/20">
            Sign Up
          </button>
        </div>

        <button
          className="lg:hidden text-3xl text-gray-800 hover:text-[#23BE0A] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-slide-up">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg font-bold p-3 rounded-xl transition-all duration-300 ${
                  isActive(link.path) 
                    ? 'bg-[#23BE0A]/10 text-[#23BE0A]' 
                    : 'text-gray-700 hover:bg-gray-50 hover:text-[#23BE0A]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
              <button className="w-full py-4 font-bold text-gray-700 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
                Sign In
              </button>
              <button className="w-full py-4 font-bold text-white bg-[#23BE0A] rounded-xl hover:bg-[#1fa008] transition-all shadow-lg shadow-[#23BE0A]/20">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
