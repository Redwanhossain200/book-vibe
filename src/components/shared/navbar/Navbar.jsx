import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Listed Books', path: '/books' },
    { title: 'Pages to Read', path: '/pages-to-read' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[150] transition-all duration-500 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[#23BE0A] rounded-xl flex items-center justify-center text-white font-bold text-2xl transition-transform duration-500 group-hover:rotate-[360deg] shadow-lg shadow-[#23BE0A]/20">
            B
          </div>
          <span className="text-2xl font-bold text-gray-900 tracking-tight">BookVibe</span>
        </Link>

        <div className="hidden lg:flex items-center gap-2 bg-gray-100/50 p-1.5 rounded-2xl border border-gray-200/50">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-6 py-2.5 rounded-xl font-bold transition-all duration-300 ${
                isActive(link.path)
                  ? 'bg-white text-[#23BE0A] shadow-sm'
                  : 'text-gray-500 hover:text-[#23BE0A] hover:bg-white/50'
              }`}
            >
              {link.title}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className="px-7 py-3 bg-[#23BE0A] hover:bg-[#1fa008] text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-[#23BE0A]/20 hover:scale-105 active:scale-95">
            Sign In
          </button>
          <button className="hidden sm:block px-7 py-3 bg-[#59C6D2] hover:bg-[#4fb2bd] text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-[#59C6D2]/20 hover:scale-105 active:scale-95">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
