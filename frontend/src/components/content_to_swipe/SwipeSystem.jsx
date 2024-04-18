import { useContext } from "react";
import PropTypes from "prop-types";

import LoginUserContext from "../../context/LoginUserContext";

import sendEnterpriseLike from "../../services/enterpriseLikeService";
import sendCandidateLike from "../../services/candidateLikeService";
import { readAllResume } from "../../services/resumesService";
import { readAllOffer } from "../../services/jobOffersService";

import "../../styles/content_to_swipe/swipeSystem.css";

function SwipeSystem({ candidateId, enterpriseId }) {
  const { loginUser } = useContext(LoginUserContext);

  const sendLike = () => {
    const info = { candidateId, enterpriseId };

    if (loginUser.role === "enterprise") {
      sendEnterpriseLike(info).then(() => readAllResume());
    } else {
      sendCandidateLike(info).then(() => readAllOffer());
    }
  };

  const sendDislike = () => {
    if (loginUser.role === "enterprise") {
      readAllResume();
    } else {
      readAllOffer();
    }
  };

  return (
    <section className="swipe_system_container">
      <div>
        <button type="button" onClick={() => sendLike()}>
          <img
            className="like_icon"
            src="/src/assets/heart_swipe.svg"
            alt="green heart"
          />
        </button>

        <button type="button" onClick={() => sendDislike()}>
          <img
            className="dislike_icon"
            src="/src/assets/cross_swipe.svg"
            alt="red cross"
          />
        </button>
      </div>
    </section>
  );
}

SwipeSystem.propTypes = {
  candidateId: PropTypes.string.isRequired,
  enterpriseId: PropTypes.string.isRequired,
};

export default SwipeSystem;
