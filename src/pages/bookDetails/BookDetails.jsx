import React, { useContext, useState } from 'react'
import { useLoaderData, useParams, useNavigate } from 'react-router'
import { BookContext } from '../../context/BookContext';


const BookDetails = () => {
  const { bookId: bookParamsId } = useParams();
  // console.log(bookParamsId, "bookParamsId");
  const books = useLoaderData();
  const navigate = useNavigate();

  const expectedBook = books?.find((book) => book.bookId == bookParamsId) || {};

  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags = [],
    publisher,
    yearOfPublishing
  } = expectedBook;

  const { handleMarkAsRead, handleWishList } = useContext(BookContext)



  if (!expectedBook.bookId) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
        <div className="relative mb-6">
          <svg className="w-32 h-32 text-gray-200" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl">🔍</span>
          </div>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2 font-playfair">Book Not Found</h2>
        <p className="text-gray-500 max-w-md mb-8">
          The book you are looking for doesn't exist or has been removed from our library.
        </p>
        <button
          onClick={() => navigate('/')}
          className="btn bg-[#50B1C9] hover:bg-[#3e8ea2] border-none text-white px-10"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-6 px-4 md:my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-base-100 rounded-xl">
        <figure className='w-full flex justify-center items-center bg-gray-100 rounded-2xl p-8 md:p-12'>
          <img
            src={image}
            alt={bookName}
            className='h-75 md:h-125 object-contain rounded-2xl'
          />
        </figure>

        <div className="flex flex-col space-y-4 py-2">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair">{bookName}</h2>
          <h3 className="text-xl font-medium text-gray-700">By: {author}</h3>

          <p className='py-3 border-y border-gray-200 text-lg font-medium text-gray-600'>{category}</p>

          <p className='text-gray-600 leading-relaxed'>
            <span className='font-bold text-black'>Review: </span> {review}
          </p>

          <div className='flex flex-wrap items-center gap-3 py-2'>
            <span className="font-bold">Tag:</span>
            {tags.map((tag, index) => (
              <span key={index} className="px-4 py-1 text-green-600 bg-green-50 rounded-full font-medium text-sm">
                # {tag}
              </span>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-4 space-y-3">
            <div className="grid grid-cols-2 max-w-sm">
              <span className="text-gray-500">Number of Pages:</span>
              <span className="font-bold">{totalPages}</span>
            </div>
            <div className="grid grid-cols-2 max-w-sm">
              <span className="text-gray-500">Publisher:</span>
              <span className="font-bold">{publisher}</span>
            </div>
            <div className="grid grid-cols-2 max-w-sm">
              <span className="text-gray-500">Year of Publishing:</span>
              <span className="font-bold">{yearOfPublishing}</span>
            </div>
            <div className="grid grid-cols-2 max-w-sm">
              <span className="text-gray-500">Rating:</span>
              <span className="font-bold">{rating}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <button className="btn btn-outline border-gray-300 px-8 hover:bg-gray-800 rounded-2xl hover:text-white transition-colors" onClick={() => handleMarkAsRead(expectedBook)}>
              Mark as Read
            </button>
            <button className="btn bg-[#50B1C9] hover:bg-[#3e8ea2] border-none rounded-2xl hover:text-black text-white px-8" onClick={() => handleWishList(expectedBook)}>
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;