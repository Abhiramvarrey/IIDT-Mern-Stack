// App.js
import React, { useState } from 'react';
import BookSearchForm from './BookSearchForm';
import BookList from './BookList';
import './index.css';
function App() {
  const [books, setBooks] = useState([]);
  
  const handleSearch = async (query) => {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      const data = await response.json();
      setBooks(data.items);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return (
    <div>
      <h1>Book Search</h1>
      <BookSearchForm onSearch={handleSearch} />
      <BookList books={books} />
    </div>
  );
}

export default App;