/* eslint-disable no-else-return */
import React, { useState } from "react";

import HomePageUserNav from "../components/resume_job_offer/HomePageUserNav";
import HomePageSwipe from "./HomePageSwipe";
import HomePageMessages from "./HomePageMessages";
import HomePageProfile from "./HomePageProfile";

import "../styles/pages/usersHomePage.css";

function UsersHomePage() {
  const [pageType, setPageType] = useState("");

  const handleTabClick = (type) => {
    setPageType(type);
  };

  const displayRightPages = () => {
    if (pageType === "profile") {
      return <HomePageProfile />;
    } else if (pageType === "match") {
      return <HomePageSwipe />;
    } else {
      return <HomePageMessages />;
    }
  };

  return (
    <div className="users_homepage">
      <HomePageUserNav handleTabClick={handleTabClick} />
      {displayRightPages()}
    </div>
  );
}

export default UsersHomePage;
