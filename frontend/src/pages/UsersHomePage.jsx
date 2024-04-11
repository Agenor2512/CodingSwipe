import { useState } from "react";
// import EnterpriseJobOffer from "../components/resume_job_offer/EnterpriseJobOffer";
import HomePageUserNav from "../components/resume_job_offer/HomePageUserNav";
import HomePageSwipe from "./HomePageSwipe";
import Resume from "../components/resume_job_offer/Resume";

import "../styles/pages/usersHomePage.css";

function UsersHomePage() {
  const [pageToDisplay, setPageToDisplay] = useState("home");

  return (
    <div className="users_homepage">
      <HomePageUserNav tools={{ setPageToDisplay }} />

      {pageToDisplay === "home" ? (
        <HomePageSwipe />
      ) : (
        <Resume tools={{ setPageToDisplay }} />
      )}
    </div>
  );
}

export default UsersHomePage;
