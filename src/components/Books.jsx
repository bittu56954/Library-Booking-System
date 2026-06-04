import React, { useState } from 'react';
import './Books.css';

const Books = () => {
 
  const myBooksCollection = [
    {
      id: "LIB-9081",
      title: "Surely You're Joking, Mr. Feynman!",
      author: "Richard P. Feynman",
      category: "Biography",
      status: "Available",
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&q=80"
    },
    {
      id: "LIB-4432",
      title: "Show Your Work!",
      author: "Austin Kleon",
      category: "Self-Help",
      status: "Available",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80"
    },
    {
      id: "LIB-1102",
      title: "Think Again",
      author: "Adam Grant",
      category: "Psychology",
      status: "Borrowed",
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&q=80"
    },
    {
      id: "LIB-7761",
      title: "Project Hail Mary",
      author: "Andy Weir",
      category: "Sci-Fi",
      status: "Available",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80"
    }
  ];

  return (
    <div className="lms-main-wrapper">
      
   
      <div className="lms-header">
        <div>
          <h2 style={{marginLeft:'500px'}}>Discover Books</h2>
          <p style={{marginLeft:'450px'}}>Browse and manage your library collections easily</p>
        </div>
       
      </div>

      
      <div className="lms-control-bar">
        <div className="search-box-wrapper">
          <span className="search-icon">🔍</span>
          <input 
            type="text" 
            placeholder="Search by book title, author, or ISBN..." 
            className="lms-search-input"
          />
        </div>
        
        <div className="filter-group">
          <select className="lms-dropdown">
            <option value="all">All Genres</option>
            <option value="biography">Biography</option>
            <option value="selfhelp">Self-Help</option>
            <option value="scifi">Sci-Fi</option>
          </select>

          <select className="lms-dropdown">
            <option value="all">All Status</option>
            <option value="available">Available</option>
            <option value="borrowed">Borrowed</option>
          </select>
        </div>
      </div>

     
      <div className="lms-books-grid">
        {myBooksCollection.map((book) => (
          <div key={book.id} className="lms-premium-card">
            
           
            <div className="lms-image-holder">
              <img src={book.image} alt={book.title} className="lms-actual-img" />
              <div className={`lms-badge-tag ${book.status.toLowerCase()}`}>
                {book.status}
              </div>
            </div>

          
            <div className="lms-content-holder">
              <span className="lms-category-label">{book.category}</span>
              <h4 className="lms-book-title" title={book.title}>{book.title}</h4>
              <p className="lms-book-author">by {book.author}</p>
              <div className="lms-footer-info">
                <span className="lms-id-badge">ID: {book.id}</span>
              </div>
            </div>

       
            <div className="lms-actions-bar">
              <button className="lms-secondary-btn">View Info</button>
              <button 
                className="lms-primary-btn" 
                disabled={book.status === "Borrowed"}
              >
                {book.status === "Available" ? "Issue Book" : "On Hold"}
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Books;