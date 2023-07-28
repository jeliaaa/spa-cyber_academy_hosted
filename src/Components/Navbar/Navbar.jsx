import React, {useEffect} from "react";
import "./navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import NavbarOffCanvas from "./NavbarOffCanvas";
import { Link } from "react-router-dom";

const Navbar = () => {
  var Scroll = require('react-scroll');
  var scroll = Scroll.animateScroll;
  useEffect(() => {
    scroll.scrollToTop();
  }, [])
  return (
    <div className="nav_container">
      <NavbarOffCanvas />

      <div className="logo">
        <Link to={'/'}>
          <h1 onClick={scroll.scrollToTop}>The Berkley</h1>
        </Link>
      </div>
      <div className="book_btn">
        <button>
          <Link to={'/booking'} style={{ textDecoration: 'none' }}>
            <p>Book</p>
            <FontAwesomeIcon icon={faCalendarDays} />
          </Link>

        </button>
      </div>
    </div>
  );
};


export default Navbar;
