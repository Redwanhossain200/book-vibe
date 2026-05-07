import React from 'react';
import { Link } from 'react-router';
import heroImg from '../../assets/hero_img.jpg';

const Banner = () => {
  return (
    <section className="pt-32 pb-16 px-4 md:px-6">
      <div className="container mx-auto bg-gray-50 rounded-[2.5rem] p-10 md:p-20 flex flex-col md:flex-row items-center justify-between gap-16 relative overflow-hidden group">
        <div className="flex-1 space-y-10 text-center md:text-left relative z-10 animate-slide-up">
          <h1 className="text-4xl md:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
            Books to freshen up <br className="hidden md:block" />
            your bookshelf
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
            <Link to="/books" className="px-10 py-4 bg-[#23BE0A] hover:bg-[#1fa008] text-white font-bold rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-[#23BE0A]/20">
              View The List
            </Link>
          </div>
        </div>

        <div className="flex-1 flex justify-center relative animate-fade-in">
          <div className="relative group transition-transform duration-700 hover:scale-110 hover:-rotate-3">
            <img
              src={heroImg}
              alt="Featured Book"
              className="w-72 md:w-md object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
            />
            <div className="absolute -inset-4 bg-[#23BE0A]/5 rounded-full blur-3xl -z-10 group-hover:bg-[#23BE0A]/10 transition-colors" />
          </div>
        </div>

        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-[#23BE0A]/5 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-[#59C6D2]/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
};

export default Banner;
