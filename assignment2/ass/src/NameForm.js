import React, { useState } from 'react';
import Greeting from './greeting';

const NameForm = () => {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGreeting(`Hello, ${name}!`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange} placeholder="Enter your name" />
        <button type="submit">Submit</button>
      </form>
      <h1>{greeting}</h1>
    </div>
  );
};

export default NameForm;