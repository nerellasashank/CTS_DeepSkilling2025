import React from 'react';

const BookDetails = ({ books }) => {
  return (
    <div>
      <h2>📘 Book Details</h2>
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.name}</h3>
          <h4>Price: ₹{book.price}</h4>
        </div>
      ))}
    </div>
  );
};

export default BookDetails;