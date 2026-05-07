import React from 'react';
import BookCard from '../ui/BookCard';
import { Link } from 'react-router';

const ListedWishList = ({ books }) => {
  if (!books || books.length === 0) {
    return (
      <div className="py-20 text-center bg-gray-50 rounded-3xl border border-dashed border-gray-200 animate-fade-in">
        <h2 className="text-2xl font-bold text-gray-400 mb-4">Your wishlist is empty</h2>
        <Link to="/" className="text-[#23BE0A] font-bold hover:underline">Start Exploring</Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
      {books.map((book) => (
        <BookCard key={book.bookId} book={book} />
      ))}
    </div>
  );
};

export default ListedWishList;
