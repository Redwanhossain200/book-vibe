import React from 'react';
import { CiStar } from 'react-icons/ci';
import { Link } from 'react-router';

const BookCard = ({ book }) => {
  return (
    <Link to={`/bookDetails/${book.bookId}`} className="block h-full group">
      <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#23BE0A]/30 hover:shadow-2xl hover:shadow-[#23BE0A]/5 transition-all duration-500 h-full flex flex-col hover:-translate-y-2">
        <div className="bg-gray-50 rounded-xl p-8 mb-6 flex justify-center items-center h-64 overflow-hidden">
          <img
            src={book.image}
            alt={book.bookName}
            className="h-full object-contain transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {book.tags.slice(0, 2).map((tag, index) => (
            <span key={index} className="px-4 py-1.5 bg-[#23BE0A]/5 text-[#23BE0A] rounded-full text-sm font-medium transition-colors group-hover:bg-[#23BE0A]/10">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 transition-colors group-hover:text-[#23BE0A]">
            {book.bookName}
          </h2>
          <p className="text-gray-600 font-medium mb-4">
            By: {book.author}
          </p>
        </div>

        <div className="pt-4 border-t border-dashed border-gray-200 flex justify-between items-center text-gray-600 font-medium mt-auto">
          <span className="transition-colors group-hover:text-gray-900">{book.category}</span>
          <div className="flex items-center gap-1 bg-gray-50 px-3 py-1 rounded-lg transition-colors group-hover:bg-[#23BE0A]/5 group-hover:text-[#23BE0A]">
            <span>{book.rating}</span>
            <CiStar className="text-xl" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
