import React from "react";
import Footer from "../../components/Footer/Footer";
import { Header } from "../../components/Header";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div id="contactPage">
      <div>
        <Header />
      </div>
      <div id="formPage">
        <div id="contactForm">
          <div id="contactTitle">
            <p>Want us to contact you</p>
          </div>
          <div id="contactText">Leave us a message</div>
          <div>
            <input id="contactInput" placeholder="Name" />
            <input id="contactInput" placeholder="Email ID" />
            <input id="messageInput" placeholder="Message" />
            <button id="sendButton">SEND</button>
          </div>
        </div>
      </div>
      <div></div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
