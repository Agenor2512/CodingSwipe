import React, { useState } from "react";
import "../styles/homePageUserNav.css";

function HomePageUserNav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = () => {
    setIsNavOpen(true);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <section className="user_navigation_container">
      <div className="desktop_nav">
        <ul>
          <li>MATCHS</li>
          <li>MESSAGES</li>
          <li>MON PROFIL</li>
        </ul>
      </div>

      <nav>
        <div id="mySidenav" className={`sidenav ${isNavOpen ? "open" : ""}`}>
          <button
            type="button"
            id="closeBtn"
            className="close"
            onClick={closeNav}
          >
            &times;
          </button>
          <ul>
            <li>MATCHS</li>
            <li>MESSAGES</li>
            <li>MON PROFIL</li>
          </ul>
        </div>
        <div className="button_container">
          <button type="button" id="openBtn" onClick={openNav}>
            <div className="burger_icon">
              <span>-</span>
              <span>-</span>
              <span>-</span>
            </div>
          </button>
        </div>
      </nav>
    </section>
  );
}

export default HomePageUserNav;
