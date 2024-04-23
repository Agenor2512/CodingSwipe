/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Matchs from "./Matchs";
import Messages from "./Messages";
import UsersNavigationHeader from "./UsersNavigationHeader";

import ModalDisconnection from "../ModalDisconnection";

import "../../styles/resume_job_offer/homePageUserNav.css";

function HomePageUserNav({ handleTabClick, pageType }) {
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
        <UsersNavigationHeader />
        <ul>
          <Link to="/usershomepage/match">
            <li
              className={pageType === "match" ? "clicked" : ""}
              onClick={() => handleTabClick("match")}
            >
              MATCHS
            </li>
          </Link>
          <Link to="/usershomepage/messages">
            <li
              className={pageType === "messages" ? "clicked" : ""}
              onClick={() => handleTabClick("messages")}
            >
              MESSAGES
            </li>
          </Link>
          <Link to="/usershomepage/profile">
            <li
              className={pageType === "profile" ? "clicked" : ""}
              onClick={() => handleTabClick("profile")}
            >
              MON PROFIL
            </li>
          </Link>
        </ul>
        <Matchs />
        <Messages messagesData={messagesData} />
        <ModalDisconnection />
      </div>

      <nav>
        <div id="mobile_nav" className={`sidenav ${isNavOpen ? "open" : ""}`}>
          <button
            type="button"
            id="closeBtn"
            className="close"
            onClick={closeNav}
          >
            &times;
          </button>
          <UsersNavigationHeader />
          <ul>
            <Link to="/usershomepage/match">
              <li
                className={pageType === "match" ? "clicked" : ""}
                onClick={() => handleTabClick("match")}
              >
                MATCHS
              </li>
            </Link>
            <Link to="/usershomepage/messages">
              <li
                className={pageType === "messages" ? "clicked" : ""}
                onClick={() => handleTabClick("messages")}
              >
                MESSAGES
              </li>
            </Link>
            <Link to="/usershomepage/profile">
              <li
                className={pageType === "profile" ? "clicked" : ""}
                onClick={() => handleTabClick("profile")}
              >
                MON PROFIL
              </li>
            </Link>
          </ul>
          <Matchs />
          <ModalDisconnection />
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

HomePageUserNav.propTypes = {
  handleTabClick: PropTypes.func.isRequired,
  pageType: PropTypes.string.isRequired,
};

export default HomePageUserNav;
