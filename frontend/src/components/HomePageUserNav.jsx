import React, { useState } from "react";
import "../styles/homePageUserNav.css";

function HomePageUserNav() {
  /* const matchesData = [
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
  ]; */

  const [isNavOpen, setIsNavOpen] = useState(false);
  // const [userType, setUserType] = useState();
  // const [matches, setMatches] = useState([]);
  // const [messsages, setMessages] = useState("");
  // const [myProfile, setMyProfile] = useState([]);

  const openNav = () => {
    setIsNavOpen(true);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  /* const handleTabClick = (type) => {
    setUserType(type);
    if (type === "match") {
      setTimeout(() => {
        // setMatches(matchesData);
      }, 1000);
    }
  }; */

  // Commented out the renderMatches function
  /*
  const renderMatches = () => {
    return matchesData.map((match) => {
      return (
        <div key={match.id} className="match_card">
          {userType === "candidat" ? (
            <>
              <div>Initiale id entreprise ??{match.name}</div>
              <div>{match.category}</div>
              <div>Région de l'employeur: {match.region}</div>
              <div>Intitulé du poste {match.jobName}</div>
            </>
          ) : (
            <>
              <div>Initial du candidat ?? {match.name}</div>
              <div>Intitulé de son poste: {match.category}</div>
              <div>Date: {match.date}</div>
              <div>Intitulé du poste qu'il a liké {match.jobName}</div>
            </>
          )}
        </div>
      );
    });
  };
  */

  return (
    <section>
      <div className="desktopNav">
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
