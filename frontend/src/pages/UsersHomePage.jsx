import { useContext } from "react";

// import HomePageUserNav from "../components/resume_job_offer/HomePageUserNav";
// import HomePageSwipe from "./HomePageSwipe";
import Resume from "../components/resume_job_offer/Resume";
import JobOffer from "../components/resume_job_offer/JobOffer";

import LoginUserContext from "../context/LoginUserContext";

import "../styles/pages/usersHomePage.css";

function UsersHomePage() {
  const { loginUser } = useContext(LoginUserContext);

  // const [pageToDisplay, setPageToDisplay] = useState("home");

  return (
    <div className="users_homepage">
      {/* <HomePageUserNav tools={{ setPageToDisplay }} /> */}

      {/* {pageToDisplay === "home" ? (
        <HomePageSwipe />
      ) : (
        <Resume tools={{ setPageToDisplay }} />
      )} */}

      {loginUser.role === "candidate" ? <Resume /> : <JobOffer />}
    </div>
  );
}

export default UsersHomePage;
