import React, { useEffect, useState } from 'react';
import { getAllReadListFromLocalDB } from '../../utils/localStorage';
import BookCard from '../ui/BookCard';

const ListedReadList = ({ sortingType }) => {
  const [readList, setReadList] = useState([]);
  const [filteredReadList, setFilteredReadList] = useState([]);

  useEffect(() => {
    const storedReadList = getAllReadListFromLocalDB();
    setReadList(storedReadList);
    setFilteredReadList(storedReadList);
  }, []);

  useEffect(() => {
    let updatedList = [...readList];
    if (sortingType === 'pages') {
      updatedList.sort((a, b) => b.totalPages - a.totalPages);
    } else if (sortingType === 'rating') {
      updatedList.sort((a, b) => b.rating - a.rating);
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {filteredReadList.map((book) => (
        <BookCard key={book.bookId} book={book} />
      ))}
    </div>
  );
};

export default ListedReadList;
