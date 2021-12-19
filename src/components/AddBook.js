import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addBook } from "../store/actions";

const AddBook = () => {
  const [title, settitle] = useState("");
  const [price, setprice] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sda");
    const result = { title, price };
    dispatch(addBook(result));
    //{type:'ADDBOOK',payload}
  };
  console.log({ title });
  console.log({ price });
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Book Title</Form.Label>
          <Form.Control
            onChange={(e) => settitle(e.target.value)}
            type="text"
            placeholder="Enter the Title"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control
            onChange={(e) => setprice(e.target.value)}
            type="text"
            placeholder="Price"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>{" "}
    </div>
  );
};

export default AddBook;
