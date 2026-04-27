import React, { useContext, useEffect, useState } from 'react';
import BookCard from '../ui/BookCard';
import { BookContext } from '../../context/BookContext';

const ListedReadList = ({ sortingType }) => {
  const { readList } = useContext(BookContext);
  console.log(readList, 'bookContext');

  const [filteredReadList, setFilteredReadList] = useState(readList);

  useEffect(() => {
    let updatedList = [...readList];
    if (sortingType === 'pages') {
      updatedList.sort((a, b) => a.totalPages - b.totalPages);
    } else if (sortingType === 'rating') {
      updatedList.sort((a, b) => a.rating - b.rating);
    }
    setFilteredReadList(updatedList);
  }, [sortingType, readList]);

  if (filteredReadList.length === 0) {
    return (
      <div className="h-[50vh] bg-gray-100 flex items-center justify-center">
        <h2 className="font-bold text-3xl">No read list data found</h2>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredReadList.map((book, ind) => (
          <BookCard key={ind} book={book} />
        ))}
      </div>
    </div>
  );
};

export default ListedReadList;
