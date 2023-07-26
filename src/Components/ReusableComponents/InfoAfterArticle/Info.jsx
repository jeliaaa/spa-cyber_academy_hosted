import React from "react";
import { Link } from "react-router-dom";
import "./info.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";



const Info = () => {
  return (
    <div className="info_container">
      <div className="info_img">
        <img src="https://picsum.photos/1000/400/" alt="" />
      </div>
      <div className="info_text">
        <div className="main_info_text">
          <h2>Suite Heaven</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            esse ducimus inventore a ullam accusantium illo, soluta porro minus
            nisi!
          </p>
          <br />
          <h3>Offer includes</h3>
          <li>
            Two-night stay in your choice of Classic Suite, Chelsea Suite,
            Berkeley Suite or Grand Terrace Suite
          </li>
          <li>10% off our Room Only rate </li>
          <li>Welcome bottle of champagne, chilled to perfection</li>
          <li>Traditional English breakfast served in your suite</li>
          <li>Complimentary Wi-Fi and local phone calls</li>
          <i>Offer is valid for stays until 30 April 2024 (inclusive).</i>
          <p>
            {/* this link should go to TAC */}
            <Link to="">View offer terms and conditions</Link>
          </p>
        </div>
        <div className="aside_info_text">
          <div className="share_btn">
            <h3>Share</h3>
            <FontAwesomeIcon icon={faShareNodes} />
          </div>
          <div className="book_btn">
            <button>Book Now</button>
            <p>
              Alternatively call our Reservations team on +44 (0)20 7107 8927s
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
