import React, { use } from 'react'
import BookCard from '../ui/BookCard';

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromise);

  return (
    <div className='my-12 container mx-auto px-4'>
      <h2 className="font-bold text-3xl md:text-4xl text-center mb-6">Books</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10">
        {books.map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  )
}

export default AllBooks;