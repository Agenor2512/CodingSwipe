/* eslint-disable  react/require-default-props */
import { useContext } from "react";
import PropTypes from "prop-types";

import LoginUserContext from "../context/LoginUserContext";

import EnterpriseProposal from "../components/content_to_swipe/EnterpriseProposal";
import CandidateCandidacy from "../components/content_to_swipe/CandidateCandidacy";

import "../styles/pages/homePageSwipe.css";

function HomePageSwipe({ triggerMatchesRefresh }) {
  const { loginUser } = useContext(LoginUserContext);

  console.info(loginUser);

  return (
    <div className="homepage_swipe">
      {loginUser.role === "enterprise" ? (
        <CandidateCandidacy triggerMatchesRefresh={triggerMatchesRefresh} />
      ) : (
        <EnterpriseProposal triggerMatchesRefresh={triggerMatchesRefresh} />
      )}
    </div>
  );
}

HomePageSwipe.propTypes = {
  triggerMatchesRefresh: PropTypes.func,
};

export default HomePageSwipe;
