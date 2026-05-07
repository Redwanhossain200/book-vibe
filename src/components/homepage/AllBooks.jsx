import React, { use } from 'react';
import BookCard from '../ui/BookCard';

const booksPromise = fetch('/booksData.json').then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromise);

  return (
    <section className="py-24 container mx-auto px-4 md:px-6">
      <div className="text-center space-y-4 mb-20 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
          Featured Books
        </h2>
        <div className="w-24 h-1.5 bg-[#23BE0A] mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {books && books.length > 0 ? (
          books.map((book, index) => (
            <div 
              key={book.bookId} 
              className="animate-slide-up" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <BookCard book={book} />
            </div>
          ))
        ) : (
          <div className="col-span-full py-32 text-center bg-gray-50 rounded-[3rem] border border-dashed border-gray-200">
            <p className="text-gray-400 text-2xl font-bold">The library is currently being restocked...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllBooks;
