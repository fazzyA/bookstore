import React from "react";
const initialState = {
  books: [
    { id: 1, title: "harry potter", price: 500 },
    { id: 2, title: "harry potter2", price: 500 },
  ],
  num: 10,
  str: "faiza",
  posts: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIST":
      return state.books;

    case "ADDBOOK":
      console.log(action.payload)
      const newBook = []
      newBook.push(action.payload)

      return {
        ...state,
        books: [...state.books, ...newBook]
      }
    case "GET_POST_SUCCESS":
      console.log(action.payload)
      return {
        ...state,
        posts: action.payload
      }

    default:
      return state
  }
};

export default reducer;
