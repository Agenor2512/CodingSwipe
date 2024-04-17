import { useContext } from "react";

import Resume from "../components/resume_job_offer/Resume";
import JobOffer from "../components/resume_job_offer/JobOffer";

import LoginUserContext from "../context/LoginUserContext";

import "../styles/pages/homePageProfile.css";

function HomePageProfile() {
  const { loginUser } = useContext(LoginUserContext);

  return (
    <div className="homepage_profile">
      {loginUser.role === "enterprise" ? <JobOffer /> : <Resume />}
    </div>
  );
}

export default HomePageProfile;
