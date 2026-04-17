import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [readList, setReadList] = useState([]);
  const [WishList, setWishList] = useState([]);

  const handleMarkAsRead = (currentBook) => {
    // step 1: store book id or store book object
    // step 2: where to store
    // step 3: array or collection
    // step 4: if the book is already exist then show a alert or toast
    // step 5: if not then add the book in the array or collection

    const isExistBook = readList.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistBook) {
      toast.error('The book is already exist');
    } else {
      setReadList([...readList, currentBook]);
      toast.success(`${currentBook.bookName} is added to read list`);
    }
    console.log(currentBook, readList, 'bookId');
  };

  const handleWishList = (currentBook) => {
    // step 1: store book id or store book object
    // step 2: where to store
    // step 3: array or collection
    // step 4: if the book is already exist then show a alert or toast
    // step 5: if not then add the book in the array or collection

    const isExistInReadList = readList.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistInReadList) {
      toast.error('This book is already in read list');
      return;
    }

    const isExistBook = WishList.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistBook) {
      toast.error('The book is already exist');
    } else {
      setWishList([...WishList, currentBook]);
      toast.success(`${currentBook.bookName} is added to wish list`);
    }
    console.log(currentBook, readList, 'bookId');
  };

  const data = {
    readList,
    setReadList,
    handleMarkAsRead,
    setWishList,
    WishList,
    handleWishList,
  };

  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
