/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, useContext } from "react";
import "../../styles/resume_job_offer/homePageUserNav.css";

import Matchs from "./Matchs";
import Messages from "./Messages";
import RegisterContext from "../../context/RegisterContext";

import ModalDisconnection from "../ModalDisconnection";

function HomePageUserNav({ tools }) {
  console.info(tools);

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
  const { setInfos } = useContext(RegisterContext);

  const openNav = () => {
    setIsNavOpen(true);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const handleTabClick = (type) => {
    setInfos(type);
  };

  return (
    <section className="user_navigation_container">
      <div className="desktop_nav">
        <ul>
          <li onClick={() => handleTabClick("match")}>MATCHS</li>
          <li onClick={() => handleTabClick("messages")}>MESSAGES</li>
          <li onClick={() => tools.setPageToDisplay("settings")}>MON PROFIL</li>
        </ul>
        <Matchs userType={setInfos} matchesData={matchesData} />
        <Messages userType={setInfos} messagesData={messagesData} />
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
            <li onClick={() => handleTabClick("messages")}>MESSAGES</li>
            <li>MON PROFIL</li>
          </ul>
          <Matchs userType={setInfos} matchesData={matchesData} />
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
