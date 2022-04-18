import React from "react";
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const MainImage = () => {
  return (
    <section className="mainImageContainer">
      <img
        className="mainImage"
        src={require("../assets/mainImage_colorized.webp")}
        alt="Company"
      />
      <div className="mainImageTextContainer">
        <h2>Some amazing statement</h2>
        <p>Details about what is being said</p>
        <div className="mainImageTextButton">Get Started</div>
      </div>
      <nav className="imageSocialLinksContainer">
        <FaInstagram className="imageSocialLink" />
        <FaYoutube className="imageSocialLink" />
        <FaTwitter className="imageSocialLink" />
      </nav>
    </section>
  );
};

export default MainImage;
