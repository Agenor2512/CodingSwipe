/* eslint-disable react/prop-types */
import { useContext } from "react";
import axios from "axios";
import LoginUserContext from "../../context/LoginUserContext";

import "../../styles/content_to_swipe/swipeSystem.css";

function SwipeSystem({
  candidateId,
  enterpriseId,
  setIsLoading,
  setJobOffer,
  setResume,
}) {
  const { loginUser } = useContext(LoginUserContext);

  const baseURL = import.meta.env.VITE_BACKEND_URL;

  console.info("SETRESUME", setResume);
  console.info("SETJOBOFFER", setJobOffer);

  const fetchResume = () => {
    axios
      .get("http://localhost:3310/api/resume")
      .then((response) => {
        console.info("RESPONSE : ", response);
        setResume(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  };

  const fetchJobOffer = () => {
    axios
      .get("http://localhost:3310/api/joboffer")
      .then((response) => {
        console.info("RESPONSE : ", response);
        setJobOffer(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  };

  const sendLike = () => {
    console.info("CANDIDATE ID:", candidateId);
    console.info("ENTERPRISE ID:", enterpriseId);
    console.info("ROLE :", loginUser.role);

    const info = { candidateId, enterpriseId };

    if (loginUser.role === "enterprise") {
      console.info("INFOS : ", info);

      axios
        .post(`${baseURL}/enterprises/likes`, info)
        .then((response) => console.info(response.data))
        .catch((error) => console.error(error));
    } else {
      console.info("INFOS : ", info);

      axios
        .post(`${baseURL}/candidates/likes`, info)
        .then((response) => console.info(response.data))
        .catch((error) => console.error(error));
    }
  };

  console.info("LOGIN USER", loginUser.role);

  const sendDislike = () => {
    if (loginUser.role === "candidate") {
      fetchJobOffer();
    } else {
      fetchResume();
    }
  };

  // const handleLikeClick = () => {
  //   setLikes(true);
  //   sendLike();
  // };

  // const handleDislikeClick = () => {
  //   setDislikes(true);
  //   sendDislike();
  // };

  return (
    <section className="swipe_system_container">
      <div>
        <button type="button" onClick={sendLike}>
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

export default SwipeSystem;
