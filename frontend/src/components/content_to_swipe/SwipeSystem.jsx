import { useContext, useState } from "react";
import PropTypes from "prop-types";

import LoginUserContext from "../../context/LoginUserContext";

import sendEnterpriseLike from "../../services/enterpriseLikeService";
import sendCandidateLike from "../../services/candidateLikeService";
import { readAllResume } from "../../services/resumesService";
import { readAllOffer } from "../../services/jobOffersService";

import swipeBackground from "../../assets/background_swipe_desktop.png";
import "../../styles/content_to_swipe/swipeSystem.css";

function SwipeSystem({
  jobOfferId,
  candidateId,
  resumeId,
  enterpriseId,
  triggerRefresh,
}) {
  const { loginUser } = useContext(LoginUserContext);
  const [clicked, setClicked] = useState(false);

  const sendLike = () => {
    if (!clicked) {
      if (loginUser.role === "enterprise") {
        sendEnterpriseLike({ resumeId, enterpriseId }).then(() =>
          triggerRefresh()
        );
      } else {
        sendCandidateLike({ jobOfferId, candidateId }).then(() =>
          triggerRefresh()
        );
      }
      setClicked(true);

      setTimeout(() => {
        setClicked(false);
      }, 500);
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
      <img src={swipeBackground} alt="swipe background" />
      <div>
        <button
          type="button"
          onClick={sendLike}
          className={clicked ? "clicked" : ""}
        >
          <img
            className="like_icon"
            src="/src/assets/heart_swipe.svg"
            alt="green heart"
          />
        </button>

        <button type="button" onClick={sendDislike}>
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
  jobOfferId: PropTypes.string,
  candidateId: PropTypes.string,
  resumeId: PropTypes.string,
  enterpriseId: PropTypes.string,
  triggerRefresh: PropTypes.func.isRequired,
};

SwipeSystem.defaultProps = {
  jobOfferId: "",
  candidateId: "",
  resumeId: "",
  enterpriseId: "",
};

export default SwipeSystem;
