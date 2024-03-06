/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useContext } from "react";
import "../../styles/resume_job_offer/homePageUserNav.css";
import Matchs from "./Matchs";
import RegisterContext from "../../context/RegisterContext";

function HomePageUserNav() {
  const matchesData = [
    {
      id: 1,
      name: "Paul",
      category: "Développeur Frontend",
      date: "2024",
      region: "Bordeaux",
      jobName: "CDiscount",
    },
    {
      id: 2,
      name: "Nono",
      category: "Data Scientist",
      date: "2024",
      region: "Lille",
      jobName: "Ubisoft",
    },
    {
      id: 3,
      name: "Mathieu",
      category: "Chef de Projet",
      date: "2024",
      region: "Marseille",
      jobName: "Crédit Agricole",
    },
  ];

  const [isNavOpen, setIsNavOpen] = useState(false);
  const { setUserRole } = useContext(RegisterContext);

  const openNav = () => {
    setIsNavOpen(true);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const handleTabClick = (type) => {
    setUserRole(type);
  };

  return (
    <section className="user_navigation_container">
      <div className="desktop_nav">
        <ul>
          <li onClick={() => handleTabClick("match")}>MATCHS</li>
          <li>MESSAGES</li>
          <li>MON PROFIL</li>
        </ul>
        <Matchs userType={setUserRole} matchesData={matchesData} />
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
            <li onClick={() => handleTabClick("match")}>MATCHS</li>
            <li>MESSAGES</li>
            <li>MON PROFIL</li>
          </ul>
          <Matchs userType={setUserRole} matchesData={matchesData} />
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
