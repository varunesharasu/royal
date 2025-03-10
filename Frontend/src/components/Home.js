


import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card">
        <h1>Welcome to Royal Castle Farm Stay</h1>
        <p>Book your dream resort room today!</p>
        <Link to="/rooms">
          <button className="explore-btn">Explore Rooms</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
