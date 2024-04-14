import React from 'react';
import NameForm from './NameForm';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './home';
import About from './about';
import Counter from './Counter';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <NameForm />
        <Counter />
      </div>
    </BrowserRouter>
  );
}

export default App;
