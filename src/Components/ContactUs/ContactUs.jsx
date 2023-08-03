import React, { useState } from "react";
import "./ContactUs.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroLeft from "../ReusableComponents/HeroComp/HeroLeft";

const ContactUs = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <section className="contact-us-first-child-container">
        <img src="https://www.the-berkeley.co.uk/siteassets/contact-us/ber-exterior_1920x720.jpg"></img>
      </section>
      <section className="contact-us-second-child-container">
        <div className="share-socials-wrapper">
          <button>
            <span>Share</span>
            <span
              onClick={() => {
                setOpen(!open);
              }}
              className={`${open ? "active" : "inactive"}`}
            >
              <i className="fa-solid fa-share-nodes"></i>
            </span>
          </button>

          <ul className={`menu ${open ? "active" : "inactive"}`}>
            <li>
              <span>
                <i className="fa-brands fa-facebook-f"></i>
              </span>
            </li>
            <li>
              <span>
                <i className="fa-brands fa-twitter"></i>
              </span>
            </li>
            <li>
              <span>
                <i className="fa-brands fa-instagram"></i>
                //ale
              </span>
            </li>
          </ul>
        </div>
      </section>
      <section className="contact-us-main-info">
        <div className="contacts">
          <h1 className="page-title">CONTACT US</h1>
          <div className="contact-main">
            <div className="info">
              <h4 className="page-subtitle">HOTEL SERVICES</h4>
              <ContactInfo
                title="Reservations"
                tel="+44 (0)20 7107 8927"
                email="concierge@the-berkeley.co.uk"
              ></ContactInfo>
              <ContactInfo
                title="Reservations"
                tel="+44 (0)20 7107 8927"
                email="concierge@the-berkeley.co.uk"
              ></ContactInfo>
              <ContactInfo
                title="Reservations"
                tel="+44 (0)20 7107 8927"
                email="concierge@the-berkeley.co.uk"
              ></ContactInfo>
              <ContactInfo
                title="Reservations"
                tel="+44 (0)20 7107 8927"
                email="concierge@the-berkeley.co.uk"
              ></ContactInfo>
              <h4 className="page-subtitle">ROOM RESERVATIONS</h4>
              <ContactInfo
                title="Please contact our Reservations Team:"
                tel="+44 (0)20 7107 8927"
                email="reservations@the-berkeley.co.uk"
              ></ContactInfo>
              <h4 className="page-subtitle">KEY HOTEL PERSONNEL</h4>
              <ContactInfo
                title="Knut Wylde, General Manager"
                tel="+44 (0)20 7107 8927"
                email="reservations@the-berkeley.co.uk"
              ></ContactInfo>
              <ContactInfo
                title="Ninnja Bayram, Hotel Manager "
                tel="+44 (0)20 7107 8927"
                email="reservations@the-berkeley.co.uk"
              ></ContactInfo>
              <ContactInfo
                title="Brona Kelly, Global Head of Sales"
                tel="+44 (0)20 7107 8927"
                email="reservations@the-berkeley.co.uk"
              ></ContactInfo>
              <ContactInfo
                title="Dani Degen, Global Head of Revenue & Reservations"
                tel="+44 (0)20 7107 8927"
                email="reservations@the-berkeley.co.uk"
              ></ContactInfo>
              <ContactInfo
                title="Paula Fitzherbert, Global Head of Communications"
                tel="+44 (0)20 7107 8927"
                email="reservations@the-berkeley.co.uk"
              ></ContactInfo>
            </div>
            <div className="contacts-wrapper">
              <div className="enquiry-form">
                <p>
                  For general enquiries and further information, please contact
                  us:
                </p>
                <button>ENQUIRY FORM</button>
                <p>Tel: +44 (0)20 7235 6000</p>
                <p>Fax: +44 (0)20 7235 4330</p>
                <p>Email: info@the-berkeley.co.uk</p>
              </div>
              <div className="form-wrapper">
                <h4>EVENT ENQUIRIES</h4>
                <EventEnquires
                  text="For enquiries, further information and to book your event, please contact our Events team:"
                  tel="+44 (0)20 7201 1385"
                  email="events@the-berkeley.co.uk"
                />
                <EventEnquires
                  text="If your event is for groups of 10 or more guests and requires rooms or suites to be booked in conjunction with your event venue, please contact our Groups Reservations team :"
                  tel="+44 (0)20 7107 8850 "
                  email="groups@maybourne.com"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <HeroLeft />
    </div>
  );
};

function ContactInfo(props) {
  return (
    <div className="contact-info">
      <p className="name">{props.title}</p>
      <p ClassName="tel">Tel: <u>{props.tel}</u></p>
      <p ClassName="email">Email: <u>{props.email}</u></p>
    </div>
  );
}

function EventEnquires(props) {
  return (
    <div className="event-enquiry">
      <p className="main-text">{props.text}</p>
      <p className="tel">Tel: <u>{props.tel}</u></p>
      <p className="email">Email: <u>{props.email}</u></p>
    </div>
  );
}

export default ContactUs;
