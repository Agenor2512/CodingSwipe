/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import "../../styles/resume_job_offer/homePageUserNav.css";
import Matchs from "./Matchs";

function HomePageUserNav() {
  const matchesData = [
    {
      id: 1,
      name: "Paul",
      category: "Développeur Frontend",
      date: "2024-02-23",
      region: "Bordeaux",
      jobName: "Développeur Web Junior",
    },
    {
      id: 2,
      name: "Nono",
      category: "Data Scientist",
      date: "2024-02-23",
      region: "Lille",
      jobName: "Data Analyst",
    },
    {
      id: 3,
      name: "Mathieu",
      category: "Chef de Projet",
      date: "2024-02-23",
      region: "Marseille",
      jobName: "Chef de Projet IT",
    },
  ];

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [userType, setUserType] = useState();

  const openNav = () => {
    setIsNavOpen(true);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const handleTabClick = (type) => {
    setUserType(type);
  };

  return (
    <section className="user_navigation_container">
      <div className="desktop_nav">
        <ul>
          <li onClick={() => handleTabClick("match")}>MATCHS</li>
          <li>MESSAGES</li>
          <li>MON PROFIL</li>
        </ul>
        <Matchs userType={userType} matchesData={matchesData} />
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
          <Matchs userType={userType} matchesData={matchesData} />
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
