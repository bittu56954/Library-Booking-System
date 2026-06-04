import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">

      {/* Hero Section */}
      <section className="about-hero">

        <div className="hero-content">
          <span className="tag">📚 About Our Library</span>

          <h1>
            Smart Library Management System
          </h1>

          <p>
            Our Library Management System provides an easy and efficient way
            to manage books, members, borrowing records, and library resources.
            Students and readers can discover books, track reading history,
            and access knowledge from anywhere.
          </p>

          <button>Explore Library</button>
        </div>

        <div className="hero-image">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png"
            alt="Library"
          />
        </div>

      </section>

      {/* Features Section */}

      <section className="features">

        <h2>Why Choose Our Library?</h2>

        <div className="feature-grid">

          <div className="card">
            <h3>📚 Huge Collection</h3>
            <p>
              Access thousands of books from different categories,
              authors, and publishers.
            </p>
          </div>

          <div className="card">
            <h3>🔍 Quick Search</h3>
            <p>
              Find books instantly using title, author name,
              ISBN, or category.
            </p>
          </div>

          <div className="card">
            <h3>🔔 Notifications</h3>
            <p>
              Get reminders for due dates, book returns,
              and new arrivals.
            </p>
          </div>

          <div className="card">
            <h3>📖 Reading History</h3>
            <p>
              Track all previously borrowed books
              and reading activities.
            </p>
          </div>

          <div className="card">
            <h3>👤 User Profiles</h3>
            <p>
              Manage personal details and
              library membership information.
            </p>
          </div>

          <div className="card">
            <h3>📊 Statistics</h3>
            <p>
              Monitor books, members,
              and borrowing records efficiently.
            </p>
          </div>

        </div>

      </section>

      {/* Stats Section */}

      <section className="stats">

        <div className="stat-box">
          <h1>10K+</h1>
          <p>Books Available</p>
        </div>

        <div className="stat-box">
          <h1>5K+</h1>
          <p>Active Members</p>
        </div>

        <div className="stat-box">
          <h1>500+</h1>
          <p>Authors</p>
        </div>

        <div className="stat-box">
          <h1>99%</h1>
          <p>User Satisfaction</p>
        </div>

      </section>

    </div>
  );
};

export default About;