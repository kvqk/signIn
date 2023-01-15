import React from "react";
import "./Footer.css";
interface IFooter {
  name?: string;
  ref?: any;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Footer: React.FC<IFooter> = () => {
  return (
    <div id="footerBody">
      <div id="div">
        <div>
          {" "}
          <div id="column">
            <div className="row">
              <img
                id="teamImg"
                src="https://media.discordapp.net/attachments/1028768432398815305/1028768443048144986/unknown.png"
                alt="team"
              />
            </div>
            <div id="textColor">
              <img
                className="footerImg"
                src="https://media.discordapp.net/attachments/1028768432398815305/1028769858374094928/unknown.png"
                alt="insta"
              />{" "}
              <p className="footerText">instagram</p>
            </div>
            <div className="row">
              <img
                className="footerImg"
                src="https://media.discordapp.net/attachments/1028768432398815305/1028769892050153572/unknown.png"
                alt="facebook"
              />
              <p className="footerText">facebook</p>
            </div>
            <div className="row">
              {" "}
              <img
                className="footerImg"
                src="https://media.discordapp.net/attachments/1028768432398815305/1028769925067718696/unknown.png"
                alt="twitter"
              />
              <p className="footerText">twitter</p>
            </div>
            <div id="textColor">
              <img
                className="footerImg"
                src="https://media.discordapp.net/attachments/1028768432398815305/1028769858374094928/unknown.png"
                alt="insta"
              />{" "}
              <p className="footerText">instagram</p>
            </div>
            <div className="row">
              <img
                className="footerImg"
                src="https://media.discordapp.net/attachments/1028768432398815305/1028769892050153572/unknown.png"
                alt="facebook"
              />
              <p className="footerText">facebook</p>
            </div>
            <div className="row">
              ˝{" "}
              <img
                className="footerImg"
                src="https://media.discordapp.net/attachments/1028768432398815305/1028769925067718696/unknown.png"
                alt="twitter"
              />
              <p className="footerText">twitter</p>
            </div>
          </div>
        </div>
      </div>
      <div id="column">
        {" "}
        <div id="div">
          <p id="titleColumn">Use cases</p>
          <p id="longWords">UI Design</p>
          <p id="longWords">UX Design</p>
          <p id="longWords">Prototyping</p>
          <p id="longWords">UI Design</p>
          <p id="longWords">UX Design</p>
          <p id="longWords">Prototyping</p>
        </div>
      </div>
      <div id="column">
        <div id="divThree">
          <p id="shortWords">Explore</p>
          <p id="shortWords">Figma</p>
          <p id="shortWords">Customers</p>
          <p id="longWords">Why I love figma</p>
          <p id="shortWords">Figma</p>
          <p id="shortWords">Customers</p>
          <p id="longWords">Why I love figma</p>
        </div>
      </div>
      <div id="column">
        <div id="divFour">
          <p id="shortWords">Resources</p>
          <p id="longestWord">Community Resources Hub</p>
          <p id="shortWords">Support</p>
          <p id="shortWords">Education</p>
          <p id="longestWord">Community Resources Hub</p>
          <p id="shortWords">Support</p>
          <p id="shortWords">Education</p>
        </div>
      </div>
      <div>
        <div id="divTwo">
          <p id="subscribe">Subscribe to our newsletter</p>
          <input id="email" placeholder="Email" />
        </div>
      </div>
    </div>
  );
};
export default Footer;
