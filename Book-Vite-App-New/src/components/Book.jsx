import React from "react";
import "../App.css";
import { useState } from "react";
const Book = ({ book }) => {
    const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);
  function handleButton() {
    alert("Book Added to Cart");
  }
  
  function handleadd() {
    setCount(count + 1);
    setTotal(total + 1);
  }
  function handlesub() {
    if (count > 0) {
      setCount(count - 1);
      setTotal(total - 1);
    }
  }
  return (
    <div className="card">
      <img src={book.image} alt="" width="200" height="200" />
      <h3>Title={book.title}</h3>
      <h4>Price=₹{book.price}</h4>
      <div className="allbuttons">
      <button onClick={handlesub }>-</button>
      <button onClick={handleButton}>Add To Cart</button>
      <button onClick={handleadd}>+</button>
      </div>
    </div>
  );
};

export default Book;
