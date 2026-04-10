import React, { useContext } from 'react'
import BookCard from '../ui/BookCard';
import { BookContext } from '../../context/BookContext';

const ListedReadList = () => {

  const { readList } = useContext(BookContext)
  console.log(readList, "bookContext");

  if (readList.length === 0) {
    return <div className="h-[50vh] bg-gray-100 flex items-center justify-center">
      <h2 className='font-bold text-3xl'>No read list data found</h2>
    </div>
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {
          readList.map((book, ind) => <BookCard key={ind} book={book} />)
        }
      </div>
    </div>
  )
}

export default ListedReadList