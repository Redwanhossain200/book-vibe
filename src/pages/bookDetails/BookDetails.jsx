import React, { useContext, use } from 'react';
import { useParams, Link } from 'react-router';
import { BookContext } from '../../context/BookContext';

const booksPromise = fetch('/booksData.json').then((res) => res.json());

const BookDetails = () => {
  const { bookId } = useParams();
  const books = use(booksPromise);
  const { handleMarkAsRead, handleWishList } = useContext(BookContext);

  const expectedBook = books.find((book) => book.bookId === parseInt(bookId));

  if (!expectedBook) {
    return (
      <div className="pt-32 text-center py-20">
        <h2 className="text-2xl font-bold">Book not found!</h2>
        <Link to="/" className="text-[#23BE0A] underline mt-4 inline-block">Back to Home</Link>
      </div>
    );
  }

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = expectedBook;

  return (
    <div className="container mx-auto pt-32 pb-16 px-4 md:px-6">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2 bg-gray-50 rounded-3xl p-12 flex justify-center items-center">
          <img src={image} alt={bookName} className="w-full max-w-sm object-contain drop-shadow-xl" />
        </div>

        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">{bookName}</h1>
          <p className="text-xl font-medium text-gray-600 border-b border-gray-100 pb-4">By: {author}</p>
          <p className="text-xl font-medium text-gray-600 border-b border-gray-100 pb-4">{category}</p>
          
          <p className="text-gray-600 leading-relaxed">
            <span className="font-bold text-gray-900">Review: </span> {review}
          </p>

          <div className="flex items-center gap-4 py-4 border-b border-gray-100">
            <span className="font-bold text-gray-900">Tag:</span>
            <div className="flex gap-3">
              {tags.map((tag, i) => (
                <span key={i} className="tag-badge">#{tag}</span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-y-3 max-w-sm text-gray-600">
            <span>Number of Pages:</span> <span className="font-bold text-gray-900">{totalPages}</span>
            <span>Publisher:</span> <span className="font-bold text-gray-900">{publisher}</span>
            <span>Year of Publishing:</span> <span className="font-bold text-gray-900">{yearOfPublishing}</span>
            <span>Rating:</span> <span className="font-bold text-gray-900">{rating}</span>
          </div>

          <div className="flex gap-4 pt-6">
            <button
              onClick={() => handleMarkAsRead(expectedBook)}
              className="btn-outline px-10"
            >
              Read
            </button>
            <button
              onClick={() => handleWishList(expectedBook)}
              className="btn-secondary px-10"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
