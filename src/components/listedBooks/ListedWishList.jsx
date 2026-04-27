import React, { useEffect, useState } from 'react';
import { getAllWishListFromLocalDB } from '../../utils/localStorage';
import BookCard from '../ui/BookCard';

const ListedWishList = ({ sortingType }) => {
  const [wishList, setWishList] = useState([]);
  const [filteredWishList, setFilteredWishList] = useState([]);

  useEffect(() => {
    const storedWishList = getAllWishListFromLocalDB();
    setWishList(storedWishList);
    setFilteredWishList(storedWishList);
  }, []);

  useEffect(() => {
    let updatedList = [...wishList];
    if (sortingType === 'pages') {
      updatedList.sort((a, b) => b.totalPages - a.totalPages);
    } else if (sortingType === 'rating') {
      updatedList.sort((a, b) => b.rating - a.rating);
    }
    setFilteredWishList(updatedList);
  }, [sortingType, wishList]);

  if (filteredWishList.length === 0) {
    return (
      <div className="h-[50vh] bg-gray-100 flex items-center justify-center">
        <h2 className="font-bold text-3xl">No wish list data found</h2>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredWishList.map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default ListedWishList;
