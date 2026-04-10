import React, { createContext } from 'react'


export const BookContext = createContext();

const BookProvider = ({ children }) => {

  const data = {
    test: "demo"
  }

  return <BookContext.Provider value={data}>
    {children}
  </BookContext.Provider>
}

export default BookProvider