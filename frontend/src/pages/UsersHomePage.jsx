/* eslint-disable no-else-return */
import React, { useState } from "react";

import HomePageUserNav from "../components/resume_job_offer/HomePageUserNav";
import HomePageSwipe from "./HomePageSwipe";
import HomePageMessages from "./HomePageMessages";
import HomePageProfile from "./HomePageProfile";

import "../styles/pages/usersHomePage.css";

function UsersHomePage() {
  const [pageType, setPageType] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const handleTabClick = (type) => {
    setPageType(type);
    setIsClicked(true);
  };

  const displayRightPages = () => {
    if (pageType === "messages") {
      return <HomePageMessages />;
    } else if (pageType === "match") {
      return <HomePageSwipe />;
    } else {
      return <HomePageProfile />;
    }
  };

  return (
    <div className="users_homepage">
      <HomePageUserNav handleTabClick={handleTabClick} isClicked={isClicked} />
      {displayRightPages()}
    </div>
  );
}

export default UsersHomePage;
