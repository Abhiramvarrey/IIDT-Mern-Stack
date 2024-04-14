// BookList.js
import React from 'react';
import './index.css';
function BookList({ books }) {
  return (
    <div>
      <h2>Books</h2>
        {books.map((book, index) => (
          <div class="book-list" >
            <ul>
              <div class="book-item" key={index}>
            <h3>{book.volumeInfo.title}</h3>
            <p>Author: {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown'}</p>
            <p>Publisher: {book.volumeInfo.publisher || 'Unknown'}</p>
            <p>Published Date: {book.volumeInfo.publishedDate || 'Unknown'}</p>
            <img
              src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ''}
              alt="Book cover"
            />
            </div>
          </ul>
          </div>
        ))}
    </div>
  );
}

export default BookList;