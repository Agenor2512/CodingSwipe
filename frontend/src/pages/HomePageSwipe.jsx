import { useContext } from "react";
import LoginUserContext from "../context/LoginUserContext";

import EnterpriseProposal from "../components/content_to_swipe/EnterpriseProposal";
import CandidateCandidacy from "../components/content_to_swipe/CandidateCandidacy";

import "../styles/pages/homePageSwipe.css";

function HomePageSwipe() {
  const { loginUser } = useContext(LoginUserContext);

  console.info(loginUser);

  return (
    <div className="homepage_swipe">
      {loginUser.role === "enterprise" ? (
        <CandidateCandidacy />
      ) : (
        <EnterpriseProposal />
      )}
    </div>
  );
}

export default HomePageSwipe;
