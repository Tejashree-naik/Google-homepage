// src/components/MainContent.js
import React from "react";
import "./Body.css";

const Body = () => {
  return (
    <main className="App-main">
      <img
        className="lnXdpd"
        alt="Paris Games Powerlifting"
        height="200"
        src="https://www.google.com/logos/doodles/2024/paris-games-powerlifting-6753651837110571-law.gif"
        title="Paris Games Powerlifting"
        width="200"
        id="hplogo"
      />
      <div className="Search-bar">
        <div className="Search-input-container">
          <input
            type="text"
            className="Search-input"
            placeholder="Search Google or type a URL"
          />
        </div>
      </div>
      <div className="Buttons">
        <button className="Search-button">Google Search</button>
        <button className="Search-button">I'm Feeling Lucky</button>
      </div>
      <div id="SIvCob">
        Google offered in:{" "}
        <a href="https://www.google.com/setprefs?sig=0_M8lBdiFexPymsZWgb2UXZz_UKNM%3D&amp;hl=hi&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjQqq6DlauIAxUrXmwGHfu7MyoQ2ZgBCCQ">
          हिन्दी
        </a>{" "}
        <a href="https://www.google.com/setprefs?sig=0_M8lBdiFexPymsZWgb2UXZz_UKNM%3D&amp;hl=bn&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjQqq6DlauIAxUrXmwGHfu7MyoQ2ZgBCCU">
          বাংলা
        </a>{" "}
        <a href="https://www.google.com/setprefs?sig=0_M8lBdiFexPymsZWgb2UXZz_UKNM%3D&amp;hl=te&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjQqq6DlauIAxUrXmwGHfu7MyoQ2ZgBCCY">
          తెలుగు
        </a>{" "}
        <a href="https://www.google.com/setprefs?sig=0_M8lBdiFexPymsZWgb2UXZz_UKNM%3D&amp;hl=mr&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjQqq6DlauIAxUrXmwGHfu7MyoQ2ZgBCCc">
          मराठी
        </a>{" "}
        <a href="https://www.google.com/setprefs?sig=0_M8lBdiFexPymsZWgb2UXZz_UKNM%3D&amp;hl=ta&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjQqq6DlauIAxUrXmwGHfu7MyoQ2ZgBCCg">
          தமிழ்
        </a>{" "}
        <a href="https://www.google.com/setprefs?sig=0_M8lBdiFexPymsZWgb2UXZz_UKNM%3D&amp;hl=gu&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjQqq6DlauIAxUrXmwGHfu7MyoQ2ZgBCCk">
          ગુજરાતી
        </a>{" "}
        <a href="https://www.google.com/setprefs?sig=0_M8lBdiFexPymsZWgb2UXZz_UKNM%3D&amp;hl=kn&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjQqq6DlauIAxUrXmwGHfu7MyoQ2ZgBCCo">
          ಕನ್ನಡ
        </a>{" "}
        <a href="https://www.google.com/setprefs?sig=0_M8lBdiFexPymsZWgb2UXZz_UKNM%3D&amp;hl=ml&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjQqq6DlauIAxUrXmwGHfu7MyoQ2ZgBCCs">
          മലയാളം
        </a>{" "}
        <a href="https://www.google.com/setprefs?sig=0_M8lBdiFexPymsZWgb2UXZz_UKNM%3D&amp;hl=pa&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjQqq6DlauIAxUrXmwGHfu7MyoQ2ZgBCCw">
          ਪੰਜਾਬੀ
        </a>{" "}
      </div>
    </main>
  );
};

export default Body;
