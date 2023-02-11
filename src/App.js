import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import BookList from './components/BookList';
import CategoryPage from './components/CategoryPage';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/categories" element={<CategoryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
