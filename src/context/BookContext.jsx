import React, { createContext, useState, useEffect, useMemo } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [sortingType, setSortingType] = useState(() => localStorage.getItem('bookvibe_sort_type') || '');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const storedReadList = localStorage.getItem('bookvibe_read_list');
      const storedWishList = localStorage.getItem('bookvibe_wish_list');

      if (storedReadList) setReadList(JSON.parse(storedReadList));
      if (storedWishList) setWishList(JSON.parse(storedWishList));
    } catch (error) {
      console.error('Failed to load from localStorage:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('bookvibe_read_list', JSON.stringify(readList));
      localStorage.setItem('bookvibe_wish_list', JSON.stringify(wishList));
      localStorage.setItem('bookvibe_sort_type', sortingType);
    }
  }, [readList, wishList, sortingType, isLoading]);

  const sortedReadList = useMemo(() => {
    const list = [...readList];
    if (sortingType === 'pages') return list.sort((a, b) => Number(b.totalPages) - Number(a.totalPages));
    if (sortingType === 'rating') return list.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    if (sortingType === 'year') return list.sort((a, b) => Number(b.yearOfPublishing) - Number(a.yearOfPublishing));
    return list;
  }, [readList, sortingType]);

  const sortedWishList = useMemo(() => {
    const list = [...wishList];
    if (sortingType === 'pages') return list.sort((a, b) => Number(b.totalPages) - Number(a.totalPages));
    if (sortingType === 'rating') return list.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    if (sortingType === 'year') return list.sort((a, b) => Number(b.yearOfPublishing) - Number(a.yearOfPublishing));
    return list;
  }, [wishList, sortingType]);

  const handleMarkAsRead = (currentBook) => {
    const isExistBook = readList.find((book) => book.bookId === currentBook.bookId);
    if (isExistBook) {
      toast.warning('This book is already in your read list', { position: 'top-right', autoClose: 2000 });
      return;
    }
    const updatedWishList = wishList.filter((book) => book.bookId !== currentBook.bookId);
    setWishList(updatedWishList);
    setReadList([...readList, currentBook]);
    toast.success(`"${currentBook.bookName}" added to read list! 📚`, { position: 'top-right', autoClose: 2000 });
  };

  const handleWishList = (currentBook) => {
    const isExistInReadList = readList.find((book) => book.bookId === currentBook.bookId);
    if (isExistInReadList) {
      toast.info('This book is already in your read list', { position: 'top-right', autoClose: 2000 });
      return;
    }
    const isExistBook = wishList.find((book) => book.bookId === currentBook.bookId);
    if (isExistBook) {
      toast.warning('This book is already in your wishlist', { position: 'top-right', autoClose: 2000 });
      return;
    }
    setWishList([...wishList, currentBook]);
    toast.success(`"${currentBook.bookName}" added to wishlist! ❤️`, { position: 'top-right', autoClose: 2000 });
  };

  const data = {
    readList: sortedReadList,
    wishList: sortedWishList,
    sortingType,
    setSortingType,
    handleMarkAsRead,
    handleWishList,
    isLoading
  };

  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
