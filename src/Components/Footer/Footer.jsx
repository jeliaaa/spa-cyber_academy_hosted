import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="flex-center">
      <div className="footerdiv">
        <aside className="footertop">
          <div className="footertop1">
            <h2>ABOUT US</h2>
            <span>
              I'm a paragraph. Click here to add your own text and edit me. I'm
              a great place for you to tell a story and let your users know a
              little more about you.
            </span>
          </div>
          <div className="footertop2"></div>
          <div className="footertop3">
            <h2>ADDRESS</h2>
            <span>
              <p>123-456-7890</p>
              <p>500 Terry Francois Street San Francisco, CA 94158</p>
              <p>info@mysite.com</p>
            </span>
          </div>
          <div className="footertop4"></div>
          <div className="footertop5">
            <h2>SUBSCRIBE FOR EMAILS</h2>
            <form>
              <div className="formdiv">
                <label htmlFor="Enter your email here*">
                  Enter your email here*
                </label>
                <div className="input">
                  <input type="email" required />
                  <button>Subscribe Now</button>
                </div>
              </div>
            </form>
          </div>
        </aside>
        <aside className='footerbottom'>
          <div className='footerbottomtext'>
          <p>
            <span> © 2023 by HARMONY. Proudly created with </span>
            <span>Hotel's Name</span>
          </p>
          </div>
          <div className='footericon'>
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          </div>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
