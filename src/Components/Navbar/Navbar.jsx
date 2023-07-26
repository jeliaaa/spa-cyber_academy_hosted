import React from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
const Navbar = () => {
  return (
    <div className="nav_container">
      <div className="burger_menu_btn">
        <button>burger menu here</button>
      </div>
      <div className="logo">
        <h1>The Berkley</h1>
      </div>
      <div className="book_btn">
        <button>
          <p>Book</p>
          <FontAwesomeIcon icon={faCalendarDays} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
