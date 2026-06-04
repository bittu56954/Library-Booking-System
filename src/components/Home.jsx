import React from "react";
import "./Home.css";

const Home = () => {
  const features = [
    {
      img: "https://png.pngtree.com/png-clipart/20201228/ourlarge/pngtree-icon-search-3d-png-image_2661788.jpg",
      title: "Search Books",
      desc: "Access thousands of books from different categories and discover new authors."
    },
    {
      img: "https://www.prestigesevergreen.info/images/prestige/explore-the-peaceful-library-and-reading-spaces-at-prestige-evergreen-varthur.webp",
      title: "Explore Library",
      desc: "Discover a wide collection of books from various genres and categories."
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKVaEIZwlMHRDQdqIAyksmdIe1QLNJGJiJzw&s",
      title: "Borrow Books",
      desc: "Borrow books easily and track issue dates and due dates."
    },
    {
      img: "https://image.slidesharecdn.com/historyofreading-140915223535-phpapp01/85/History-of-reading-2-320.jpg",
      title: "Reading History",
      desc: "Keep track of your reading journey and library activities."
    },
    {
      img: "https://img.magnific.com/free-vector/blue-notification-bell-with-one-notification_78370-6899.jpg",
      title: "Notifications",
      desc: "Get alerts regarding due dates and book availability."
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s",
      title: "User Profile",
      desc: "Manage your personal details and library account."
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2uSHcZCFsCyGpBZ9_Mzp2haO50KcVVIeq6g&s",
      title: "Library Statistics",
      desc: "Monitor books, members and borrowing activities."
    },
    {
      img: "https://cdn.mos.cms.futurecdn.net/sZ75BCU8UuZ7Z2gfkBhYtj.jpg",
      title: "Digital Resources",
      desc: "Access e-books and study materials from anywhere."
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRahDGuxW508K3g_KvdDiOlvELfuRNOA0dLQQ&s",
      title: "Recommended Books",
      desc: "Get personalized book recommendations."
    }
  ];

  return (
    <div className="home">

      <section className="hero">
        <h1>📚 Welcome to Library Management System</h1>

        <p>
          Explore a vast digital library featuring thousands of books across
          multiple genres. Download your favorite titles instantly and track
          your reading progress with ease.
        </p>
      </section>

      <section className="feature-grid">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <img src={item.img} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>

    </div>
  );
};

export default Home;