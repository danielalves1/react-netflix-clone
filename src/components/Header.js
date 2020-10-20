import React from "react";
import "./Header.css";

export default ({ black }) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <a href="/">
          <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img alt="" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" />
        </a>
      </div>
    </header>
  );
};
