/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import { Link } from "react-router-dom";

import Matchs from "./Matchs";
import Messages from "./Messages";

import ModalDisconnection from "../ModalDisconnection";

import "../../styles/resume_job_offer/homePageUserNav.css";

function HomePageUserNav({ handleTabClick }) {
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
  const messagesData = [
    {
      id: 1,
      name: "India",
      category: "Développeur Backend",
      date: "2022",
      region: "Bordeaux",
      jobName: "Le slip français",
    },
    {
      id: 2,
      name: "Kevin",
      category: "Data analyst",
      date: "2024",
      region: "Belgigue",
      jobName: "WildCodeSchool",
    },
    {
      id: 3,
      name: "Tibo",
      category: "Devops",
      date: "2024",
      region: "PSG",
      jobName: "NASA",
    },
  ];

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
          <Link to="/usershomepage/match">
            <li onClick={() => handleTabClick("match")}>MATCHS</li>
          </Link>
          <Link to="/usershomepage/messages">
            <li onClick={() => handleTabClick("messages")}>MESSAGES</li>
          </Link>
          <Link to="/usershomepage/profile">
            <li onClick={() => handleTabClick("profile")}>MON PROFIL</li>
          </Link>
        </ul>
        <Matchs matchesData={matchesData} />
        <Messages messagesData={messagesData} />
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
            <Link to="/usershomepage/match">
              <li onClick={() => handleTabClick("match")}>MATCHS</li>
            </Link>
            <Link to="/usershomepage/messages">
              <li onClick={() => handleTabClick("messages")}>MESSAGES</li>
            </Link>
            <Link to="/usershomepage/profile">
              <li onClick={() => handleTabClick("profile")}>MON PROFIL</li>
            </Link>
          </ul>
          <Matchs matchesData={matchesData} />
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
        <ModalDisconnection />
      </nav>
    </section>
  );
}

export default HomePageUserNav;
