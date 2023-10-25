import React from "react";

import { AiFillYoutube, AiFillFacebook, AiFillInstagram } from "react-icons/ai";

import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>Techystar</h1>
        <p>@all rights reserved</p>
      </div>
      <div>
        <h5>follow us</h5>

        <div>
          <a href="https://youtube.com">
            <AiFillYoutube />
          </a>
          <a href="https://facebook.com">
            {" "}
            <AiFillFacebook />
          </a>
          <a href="https://instagram.com">
            {" "}
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
