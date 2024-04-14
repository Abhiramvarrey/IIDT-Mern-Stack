// BookSearchForm.js
import React, { useState } from 'react';

function BookSearchForm({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter book title"
        value={query}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default BookSearchForm;