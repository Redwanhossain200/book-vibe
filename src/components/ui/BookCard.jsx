import React from 'react'
import { CiStar } from 'react-icons/ci';
import { Link } from 'react-router';

const BookCard = ({ book }) => {
  return (
    <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-100 shadow-sm border border-gray-200 w-full hover:shadow-md transition-shadow p-6 rounded-2xl">
      <figure className='bg-[#F3F3F3] rounded-2xl py-8 flex justify-center items-center h-57.5'>
        <img
          src={book.image}
          alt={book.bookName}
          className='h-full object-contain shadow-sm rounded-md'
        />
      </figure>

      <div className="card-body mt-6">
        <div className='flex flex-wrap items-center gap-2 mb-4'>
          {book.tags.map((tag, index) => (
            <span key={index} className="px-4 py-1 text-green-500 bg-green-50 rounded-full font-medium text-sm">
              {tag}
            </span>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-[#131313] mb-2">{book.bookName}</h2>
        <p className="font-medium text-gray-600 mb-5">By : {book.author}</p>

        <div className="flex justify-between items-center border-t border-dashed pt-5 border-gray-300">
          <div className="font-medium text-gray-600">{book.category}</div>
          <div className="font-medium flex items-center gap-2">
            {book.rating} <CiStar className="text-2xl" />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BookCard