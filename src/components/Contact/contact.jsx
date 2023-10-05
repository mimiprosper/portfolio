import React from "react";
import "./contact.css";
import Walmart from "../../assets/walmart.png";
import Adobe from "../../assets/adobe.png";
import Microsoft from "../../assets/microsoft.png";
import Facebook from "../../assets/facebook.png";
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from "../../assets/twitter.png";
import YouTubeIcon from "../../assets/youtube.png"
import InstaIcon from "../../assets/facebook-icon.png";

const Contact = () => {
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
          I have had an opportunity to work with notable group of companies.
          Some of the notable companies i have worked with which include{" "}
        </p>
        <div className="clientImgs">
          <img src={Walmart} alt="clients" className="clientImg" />
          <img src={Adobe} alt="clients" className="clientImg" />
          <img src={Microsoft} alt="clients" className="clientImg" />
          <img src={Facebook} alt="clients" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact me</h1>
        <span className="contactDesc">
          Please fill the form below to discuss any work opportunities
        </span>
        <form action="" className="contactForm">
          <input type="text" className="name" placeholder="Your Name" />
          <input type="email" className="email" placeholder="Your email" />
          <textarea
            className="msg"
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Type your message...."
          ></textarea>
          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <img src={FacebookIcon} alt="facebook" className="link" />
            <img src={TwitterIcon} alt="twitter" className="link" />
            <img src={YouTubeIcon} alt="youtube" className="link" />
            <img src={InstaIcon} alt="instagram" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
