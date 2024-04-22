/* eslint-disable no-else-return */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext } from "react";

import { readResumeById } from "../../services/resumesService";
import { readOfferById } from "../../services/jobOffersService";

import Logo from "../Logo";

import LoginUserContext from "../../context/LoginUserContext";

import "../../styles/resume_job_offer/usersNavigationHeader.css";

function UsersNavigation() {
  const {
    loginUser: { id, role },
  } = useContext(LoginUserContext);

  const [isLoading, setIsLoading] = useState(true);

  const [resume, setResume] = useState({});
  const [offer, setOffer] = useState({});

  useEffect(() => {
    if (role === "candidate") {
      readResumeById(id)
        .then((userResume) => setResume(userResume))
        .then(() => setIsLoading(false));
    } else {
      readOfferById(id)
        .then((userOffer) => setOffer(userOffer))
        .then(() => setIsLoading(false));
    }
  }, []);

  const getFirstLetter = () => {
    if (isLoading === false && role === "candidate") {
      const { firstname } = resume.infos;
      return firstname.charAt(0);
    } else if (isLoading === false && role === "enterprise") {
      const { name } = offer.infos;
      return name.charAt(0);
    }
    return "";
  };

  const getName = () => {
    if (isLoading === false && role === "candidate") {
      const identity = [resume.infos.firstname, " ", resume.infos.lastname];
      return identity;
    } else if (isLoading === false && role === "enterprise") {
      return offer.infos.name;
    }
    return "";
  };

  return (
    <div className="nav_header">
      <Logo />
      <div className="user_info_container">
        <div className="user_avatar">{getFirstLetter()}</div>
        <div className="user_details">
          <span className="user_name">{getName()}</span>
        </div>
      </div>
    </div>
  );
}

export default UsersNavigation;
