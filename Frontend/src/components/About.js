
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_e1zaJyTgT-LyxMqP-kHWsd0ecoJeZJ8hPA&s" 
             alt="Resort Logo" 
             className="resort-logo" />
        <h1>Welcome to Royal Castle Farm Stay</h1>
      </div>

      <div className="about-content">
        <h2>About Our Resort</h2>
        <p>
          Nestled in the heart of Tamil Nadu, <b>Royal Castle Farm Stay Resort</b> offers a serene escape from the 
          hustle and bustle of city life. Located at <b>SF.No.328/4, Andipalayam Road, EnneiKadai Karar, Odathurai, 
          Erode, Tamil Nadu, 638455</b>, our resort provides a perfect blend of comfort, luxury, and nature.
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>🌿 Perfect for a family getaway and kids-friendly environment</li>
          <li>♿ Wheelchair accessible entrance and parking for easy mobility</li>
          <li>🌈 LGBTQ+ friendly resort, ensuring a welcoming atmosphere for all</li>
          <li>💕 Cozy and romantic ambiance, ideal for couples</li>
        </ul>

        <h2>Highlighted Amenities</h2>
        <div className="amenities">
          <span>🏊‍♂️ Swimming Pool</span>
          <span>💆‍♀️ Spa</span>
          <span>🍽️ Restaurant</span>
          <span>🎮 Indoor Games</span>
          <span>🛎️ 24-hour Room Service</span>
          <span>🧒 Kids Play Area</span>
        </div>
      
        <h2>Contact Us</h2>
        <p>📞 Contact Number: <b>+91 7598063666</b></p>
        <p>📧 Email: <b>contact@royalcastlefarmstayresort.com</b></p>
      </div>
    </div>
  );
};

export default About;