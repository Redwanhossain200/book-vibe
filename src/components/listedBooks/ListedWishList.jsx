import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import BookCard from '../ui/BookCard';

const ListedWishList = ({ sortingType }) => {
  const { WishList } = useContext(BookContext);
  console.log(WishList, 'bookContext');

  const [filteredWishList, setFilteredWishList] = useState(WishList);

  useEffect(() => {
    let updatedList = [...WishList];
    if (sortingType === 'pages') {
      updatedList.sort((a, b) => a.totalPages - b.totalPages);
    } else if (sortingType === 'rating') {
      updatedList.sort((a, b) => a.rating - b.rating);
    }
    setFilteredWishList(updatedList);
  }, [sortingType, WishList]);

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
        {filteredWishList.map((book, ind) => (
          <BookCard key={ind} book={book} />
        ))}
      </div>
    </div>
  );
};

export default ListedWishList;
