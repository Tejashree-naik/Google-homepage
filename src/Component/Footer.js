// src/components/Footer.js

import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  let a = 1;
  const [num, setNum] = useState(1);
  const [name, setName] = useState("no name");
  function updateClickHandler(event) {
    // a = a + 1;
    setNum(num + 1);
    console.log(a);
  }
  function handleInputChange(e) {
    setName(e.target.value);
  }
  return (
    <footer className="App-footer">
      <div className="Footer-top">
        <span>India</span>

        <div>
          {" "}
          <input onChange={handleInputChange} />
          My Name is : {name}
        </div>
      </div>
      <div className="Footer-divider"></div>
      <div className="Footer-links">
        <div className="Footer-left">
          <a href="#">Advertising</a>
          <a href="#">Business</a>
          <a href="#">How Search works</a>
          <a href="#">{name}</a>
        </div>
        <div className="Footer-right">
          <a href="#">Privacy</a>
          <a href="#">Terms: {name}</a>
          <a href="#">Settings</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// Two way binding
