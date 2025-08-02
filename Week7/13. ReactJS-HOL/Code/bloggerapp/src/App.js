import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';
import './App.css';

function App() {
  const [view, setView] = useState('books');

  const books = [
    { id: 1, name: 'Master React', price: 670 },
    { id: 2, name: 'Deep Dive into Angular 11', price: 550 },
    { id: 3, name: 'Mongo Essentials', price: 450 },
  ];

  const blogs = [
    { title: 'React Learning', author: 'Jordan Walke', desc: 'Intro to React' },
    { title: 'Installation', author: 'Jordan Walke', desc: 'You can install React from npm.' },
  ];

  const courses = [
    { id: 1, name: 'Angular', date: '04/05/2025' },
    { id: 2, name: 'React', date: '06/03/2025' },
  ];

  const renderComponent = () => {
    switch (view) {
      case 'books':
        return <BookDetails books={books} />;
      case 'blogs':
        return <BlogDetails blogs={blogs} />;
      case 'courses':
        return <CourseDetails courses={courses} />;
      default:
        return <p>Select a view</p>;
    }
  };

  return (
    <div className="app-container">
      <h1>📚 BloggerApp Dashboard</h1>
      <div className="button-group">
        <button onClick={() => setView('books')}>Book Details</button>
        <button onClick={() => setView('blogs')}>Blog Details</button>
        <button onClick={() => setView('courses')}>Course Details</button>
      </div>

      <div className="component-section">
        {renderComponent()}
      </div>
    </div>
  );
}

export default App;