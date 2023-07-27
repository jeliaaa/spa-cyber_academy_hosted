import React from "react";
import "./hero.css";
import { Link } from "react-router-dom";

const HeroLeft = () => {
  return (
      <div className="hero_container">
      <div className="hero_img">
        <img src="https://picsum.photos/900/" alt="" />
      </div>
      <div className="hero_text">
        <h2>Modern luxury in Knightsbridge</h2>
        <p>
          When it comes to 5-star hotels in London, The Berkeley is one of a
          kind. Stunning interiors by A-list designers, afternoon tea with a
          twist, service that raises a smile… everything about this luxury hotel
          is refreshingly different. And if you feel like exploring our
          neighbourhood, all the boutiques and treats of Knightsbridge and
          Belgravia are on your doorstep.
        </p>
        <button><Link to={'/suites-and-rooms'} style={{color: 'white'}}>Explore our rooms and suites</Link></button>
      </div>
    </div>
    
  );
};

export default HeroLeft;
