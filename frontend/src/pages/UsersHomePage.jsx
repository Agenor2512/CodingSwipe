import React from "react";
// import EnterpriseJobOffer from "../components/resume_job_offer/EnterpriseJobOffer";
import HomePageUserNav from "../components/resume_job_offer/HomePageUserNav";
import HomePageSwipe from "./HomePageSwipe";

import "../styles/pages/usersHomePage.css";

function UsersHomePage() {
  return (
    <div className="users_homepage">
      <HomePageUserNav />
      <HomePageSwipe />
    </div>
  );
}

export default UsersHomePage;
