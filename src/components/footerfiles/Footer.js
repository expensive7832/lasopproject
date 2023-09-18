import React, { useState } from "react";
import "./Footer.css";
import { Link, NavLink } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { FaEnvelope } from "react-icons/fa";
import TermsAndConditions from "../../assets/terms.pdf";

const getCurrentYear = () => {
  return new Date().getFullYear();
};

function Footer() {
  const [mapopen, setMapopen] = useState(false);
  const handleClick = () => {
    setMapopen(!mapopen);
  };
  return (
    <div>
      <div className="container-fluid footer p-4">
        <div className="row justify-content-between ">
          <div className="col-md-2">
            <Link to="/">
              <img
                style={{ width: "5rem", objectFit: "contain" }}
                src="./../../../images/logo.png"
                alt="logo"
              />
            </Link>

            <Link to="/signup">
              <button className="btn btn-primary but" type="submit">
                Get Started
              </button>
            </Link>
          </div>

          <div className="col-md-4 contact">
            <h5>Contact</h5>
            <div className="row">
              <div className="col-md-1">
                <MdLocationOn />
              </div>
              <div className="col-md-8">
                <p className="para" onClick={handleClick}>
                  No. 86, Olowoira Road, by Solomon avenue junctinon, Olowoira,
                  off Ojodu-Berger, Lagos, Nigeria.
                </p>
              </div>
              <iframe
                className={mapopen ? "map active" : "map"}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.14117143651!2d3.373509974836798!3d6.629382221924189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b91e03948cd71%3A0x2e0be200b973a83e!2sLagos%20School%20of%20Programming%20(LASOP)!5e0!3m2!1sen!2sng!4v1694691333253!5m2!1sen!2sng"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <NavLink to="tel:+234 702 571 3326">
              <BiPhoneCall />
              +234 702 571 3326
            </NavLink>

            <NavLink to="mailto:info@lasop.net">
              <FaEnvelope />
              info@lasop.net
            </NavLink>
          </div>

          <div className="col-md-2 menu">
            <h5>Menu</h5>

            <NavLink to="/calendar">Calendar</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/faq">FAQs</NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </div>

          <div className="col-md-2 company">
            <h5>Company</h5>

            <NavLink to="/">Home</NavLink>
            {/* <NavLink to='/payment'>Payment</NavLink>  */}
            <NavLink to={TermsAndConditions} target="_blank">
              Terms and Conditions
            </NavLink>
            <NavLink to="/calendar">Academic Calendar</NavLink>
            <NavLink to="/hire">Hire</NavLink>
          </div>
          <div className="col-md-2 socials">
            <h5>Socials</h5>
            <NavLink to="https://linkedin.com/company/lasopdotnet">
              <i className="fa-brands fa-linkedin"></i>LinkedIn
            </NavLink>

            <NavLink to="https://wa.me/+2347025713326">
              <i className="fa-brands fa-whatsapp-square"></i>Whatsapp
            </NavLink>

            <NavLink to="https://twitter.com/Lasopdotnet">
              <i className="fa-brands fa-twitter-square"></i>Twitter
            </NavLink>

            <NavLink to="https://www.facebook.com/lasopdotnet">
              <i className="fa-brands fa-facebook-square"></i>Facebook
            </NavLink>

            <NavLink to="https://www.instagram.com/lasopdotnet">
              <i className="fa-brands fa-instagram-square"></i>Instagram
            </NavLink>
          </div>
        </div>
        <br />
        <hr />
        <div className="col-12 col-md-6 col-lg-6 mx-auto py-3">
          <p className="copy text-center">
            &copy;{getCurrentYear()} Lagos School of Programming|All Right
            Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
