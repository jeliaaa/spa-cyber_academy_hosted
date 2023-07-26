import React from "react";
import "./navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import NavbarOffCanvas from "./NavbarOffCanvas";

const Navbar = () => {
  
  return (
    <div className="nav_container">
        <NavbarOffCanvas />
    
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
