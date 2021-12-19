import React from "react";
import  { useSelector } from 'react-redux'

const BookList = () => {
  const books = useSelector((state) => state.books);
  return (
    <div>
       { books && books.map((item) => (
        <div>
          <h1>{item.title}</h1>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
