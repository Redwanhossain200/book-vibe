import React, { useContext, useState, useMemo, useEffect } from 'react';
import { BookContext } from '../../context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ListedReadList from '../../components/listedBooks/ListedReadList';
import ListedWishList from '../../components/listedBooks/ListedWishList';
import { BsArrowDown } from 'react-icons/bs';

const Books = () => {
  const { readList, wishList, sortingType, setSortingType } = useContext(BookContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const sortOptions = [
    { value: '', label: 'Default Order' },
    { value: 'rating', label: 'Rating' },
    { value: 'pages', label: 'Number of pages' },
    { value: 'year', label: 'Publisher year' },
  ];

  const getCurrentSortLabel = () => {
    const option = sortOptions.find(o => o.value === sortingType);
    return option ? option.label : 'Sort By';
  };

  return (
    <div className="container mx-auto pt-36 pb-24 px-4 md:px-6 relative">
      <div className="bg-gray-100/50 rounded-[2.5rem] py-12 mb-16 text-center animate-fade-in border border-gray-100 relative z-0">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Your Bookshelf</h1>
      </div>

      <div className="flex justify-center mb-16 relative z-[100]">
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="px-8 py-4 bg-[#23BE0A] hover:bg-[#1fa008] text-white font-bold rounded-2xl flex items-center gap-3 transition-all duration-300 shadow-xl shadow-[#23BE0A]/20 hover:scale-105 active:scale-95 min-w-[240px] justify-between relative z-[101]"
          >
            {getCurrentSortLabel()} <BsArrowDown className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {isDropdownOpen && (
            <>
              <div 
                className="fixed inset-0 z-[100]" 
                onClick={() => setIsDropdownOpen(false)}
              />
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-[102] overflow-hidden animate-slide-up p-2">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSortingType(option.value);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left px-5 py-3.5 rounded-xl transition-all duration-200 font-bold ${
                      sortingType === option.value 
                        ? 'bg-[#23BE0A]/10 text-[#23BE0A]' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-[#23BE0A]'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <Tabs className="animate-fade-in relative z-0" style={{ animationDelay: '200ms' }}>
        <TabList className="flex items-center gap-2 border-b border-gray-100 mb-12">
          <Tab 
            className="px-8 py-4 cursor-pointer outline-none font-bold text-gray-500 border-b-4 border-transparent transition-all duration-300 hover:text-[#23BE0A]" 
            selectedClassName="!border-[#23BE0A] !text-[#23BE0A]"
          >
            Read Books
            <span className="ml-2 px-2 py-0.5 bg-gray-100 text-gray-500 rounded-lg text-xs">
              {readList.length}
            </span>
          </Tab>
          <Tab 
            className="px-8 py-4 cursor-pointer outline-none font-bold text-gray-500 border-b-4 border-transparent transition-all duration-300 hover:text-[#23BE0A]" 
            selectedClassName="!border-[#23BE0A] !text-[#23BE0A]"
          >
            Wishlist
            <span className="ml-2 px-2 py-0.5 bg-gray-100 text-gray-500 rounded-lg text-xs">
              {wishList.length}
            </span>
          </Tab>
        </TabList>

        <TabPanel key={`read-${sortingType}`}>
          <ListedReadList books={readList} />
        </TabPanel>
        <TabPanel key={`wish-${sortingType}`}>
          <ListedWishList books={wishList} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
