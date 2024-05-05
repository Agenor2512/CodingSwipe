/* eslint-disable no-else-return */
import React, { useState } from "react";

import HomePageUserNav from "../components/resume_job_offer/HomePageUserNav";
import HomePageSwipe from "./HomePageSwipe";
import HomePageMessages from "./HomePageMessages";
import HomePageProfile from "./HomePageProfile";

import "../styles/pages/usersHomePage.css";

function UsersHomePage() {
  const [pageType, setPageType] = useState("profile");
  const [refreshMatches, setRefreshMatches] = useState(1);

  const triggerMatchesRefresh = () => {
    setRefreshMatches(Math.random());
  };

  const handleTabClick = (type) => {
    setPageType(type);
  };

  const displayRightPages = () => {
    if (pageType === "messages") {
      return <HomePageMessages />;
    } else if (pageType === "match") {
      return <HomePageSwipe triggerMatchesRefresh={triggerMatchesRefresh} />;
    } else {
      return <HomePageProfile />;
    }
  };

  return (
    <div className="users_homepage">
      <HomePageUserNav
        handleTabClick={handleTabClick}
        pageType={pageType}
        refreshMatches={refreshMatches}
      />
      {displayRightPages()}
    </div>
  );
}

export default UsersHomePage;
