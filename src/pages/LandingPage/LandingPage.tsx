import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header";
import "./LandingPage.css";
const LandingPage = () => {
  return (
    <div>
      <div id="background">
        <Header />
        <div style={{ paddingBottom: "45px" }}>
          <p id="instantText">Instant collaborations for remote teams</p>
          <p id="text1">
            All in one for your remote team chats, collaboration and track
            projects
          </p>
          <input id="emailInput" placeholder="Email" />
          <button id="button1">Get early access</button>
        </div>
      </div>
      <div id="page2">
        <div>
          <img
            id="meetingImg"
            src="https://media.discordapp.net/attachments/919796487658037310/1027080093526405212/unknown.png"
            alt="meeting"
          />
          <img
            id="calender"
            src="https://media.discordapp.net/attachments/909558988364976211/1027090813731229696/unknown.png"
            alt="yellowCalender"
          />
          <img
            id="product"
            src="https://media.discordapp.net/attachments/966476303500976211/1028009949806211143/unknown.png
            "
            alt="product"
          />
          <img
            id="notification"
            src="https://media.discordapp.net/attachments/966476303500976211/1028015344671015042/unknown.png"
            alt="notification"
          />

          <p id="teamworkTxt">Your Hub for teamwork</p>
          <p id="giveText">
            Give everyone you work with—inside and outside your company—a more
            productive way to stay in sync. Respond faster with emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </p>
        </div>
      </div>
      <div id="pageThree">
        <img
          id="pageThreeImg"
          src="https://media.discordapp.net/attachments/966476303500976211/1028024886087667822/unknown.png"
          alt="l"
        />
        <img
          id="pageThreeImgTwo"
          src="https://media.discordapp.net/attachments/966476303500976211/1028026865522315284/unknown.png"
          alt="Hey"
        />
        <img
          id="pin"
          src="https://media.discordapp.net/attachments/966476303500976211/1028732964982493264/unknown.png"
          alt="Pin"
        />
        <p id="simpleText">Simple task management</p>
        <p id="simpleGiveText">
          Give everyone you work with—inside and outside your company—a more
          productive way to stay in sync. Respond faster with emoji, keep
          conversations focused in channels, and simplify all your communication
          into one place.
        </p>
      </div>
      <div id="pageThree">
        <div>
          <p id="scheduleTitle">Scheduling that actually works</p>
          <p id="scheduleText">
            Give everyone you work with—inside and outside your company—a more
            productive way to stay in sync. Respond faster with emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </p>
          <img
            id="computerImg"
            src="https://media.discordapp.net/attachments/966476303500976211/1028739543987408967/unknown.png"
            alt="computer"
          />
          <img
            id="calenderTwo"
            src="https://media.discordapp.net/attachments/966476303500976211/1028741190402719814/unknown.png"
            alt="calender"
          />
        </div>
      </div>
      <div id="pageThree">
        <div id="pageThreeDiv">
          <p id="whatText">What people say about us</p>
          <div id="row">
            <img
              className="reviews"
              src="https://media.discordapp.net/attachments/966476303500976211/1028743225290281040/unknown.png"
              alt="Amy"
            />
            <img
              className="reviews"
              src="https://media.discordapp.net/attachments/966476303500976211/1028744034543468664/unknown.png"
              alt="Jane"
            />
            <img
              className="reviews"
              src="https://media.discordapp.net/attachments/966476303500976211/1028746364970074213/unknown.png"
              alt="Eleanor"
            />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
