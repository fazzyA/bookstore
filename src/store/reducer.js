import React from "react";
const initialState = {
  books: [
    { id: 1, title: "harry potter", price: 500 },
    { id: 2, title: "harry potter2", price: 500 },
  ],
  num: 10,
  str: "faiza",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIST":
      return state.books;

      case "ADDBOOK":
          console.log(action.payload)
          const newBook=[]
          newBook.push(action.payload)
      return {
          ...state,
          books: [...state.books, ...newBook]
      }

    default:
      return state
  }
};

export default reducer;
