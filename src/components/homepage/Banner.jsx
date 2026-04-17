import React from 'react';
import bookImg from '../../assets/pngwing 1.png';

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-125 lg:min-h-[70vh] rounded-3xl my-8 container mx-auto px-4 lg:px-20">
      <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between gap-12 py-12 lg:py-0">
        <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
          <img
            src={bookImg}
            className="w-full max-w-75 md:max-w-100 drop-shadow-2xl"
            alt="Banner Book"
          />
        </div>

        <div className="space-y-8 text-center lg:text-left lg:w-1/2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#131313]">
            Books to freshen up <br className="hidden md:block" /> your
            bookshelf
          </h1>
          <button className="btn bg-[#23BE0A] hover:bg-[#1fa308] border-none text-white px-7 py-4 h-auto text-xl font-bold rounded-lg">
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
