import React from 'react';
import { Outlet, Link } from 'react-router';
import Navbar from '../components/shared/navbar/Navbar';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col font-poppins selection:bg-[#23BE0A]/20 selection:text-[#23BE0A]">
      <Navbar />
      
      <main className="flex-grow animate-fade-in">
        <Outlet />
      </main>

      <footer className="bg-gray-900 text-white pt-20 pb-10 mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2 space-y-6 animate-fade-in">
              <Link to="/" className="flex items-center gap-2 group w-fit">
                <div className="w-10 h-10 bg-[#23BE0A] rounded-xl flex items-center justify-center text-white font-bold text-2xl transition-transform duration-500 group-hover:rotate-[360deg]">
                  B
                </div>
                <span className="text-3xl font-bold tracking-tight">BookVibe</span>
              </Link>
              <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
                Your ultimate destination for discovering your next favorite book. Join our community of readers and track your journey.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: <FaFacebook />, link: 'https://www.facebook.com/redwan.hossain.281607', target: '_blank' },
                  { icon: <FaInstagram />, link: 'https://www.instagram.com/mdredwanhossain2007/?hl=en', target: '_blank' },
                  { icon: <FaGithub />, link: 'https://github.com/Redwanhossain200', target: '_blank' }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.link} 
                    target={social.target}
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-xl hover:bg-[#23BE0A] hover:text-white hover:-translate-y-1 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
              <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-4 text-gray-400 font-medium">
                <li className="hover:text-[#23BE0A] transition-colors cursor-pointer">About Us</li>
                <li className="hover:text-[#23BE0A] transition-colors cursor-pointer">All Books</li>
                <li className="hover:text-[#23BE0A] transition-colors cursor-pointer">Support</li>
                <li className="hover:text-[#23BE0A] transition-colors cursor-pointer">Terms</li>
              </ul>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <h4 className="text-xl font-bold mb-6 text-white">Contact</h4>
              <ul className="space-y-4 text-gray-400 font-medium">
                <li className="hover:text-[#23BE0A] transition-colors cursor-pointer">support@bookvibe.com</li>
                <li className="hover:text-[#23BE0A] transition-colors cursor-pointer">+8801700000000</li>
                <li className="hover:text-[#23BE0A] transition-colors cursor-pointer">Dhaka, Bangladesh</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500 font-medium">
              &copy; {new Date().getFullYear()} BookVibe. Built with ❤️ for book lovers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
