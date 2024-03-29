import { useContext } from "react";
import axios from "axios";
import LoginUserContext from "../../context/LoginUserContext";

import "../../styles/content_to_swipe/swipeSystem.css";

// eslint-disable-next-line react/prop-types
function SwipeSystem({ candidateId, enterpriseId }) {
  // const [setLikes] = useState(false);
  // const [setDislikes] = useState(false);
  const { loginUser } = useContext(LoginUserContext);

  const baseURL = import.meta.env.VITE_URL_BACKEND;

  // const client = axios.create({
  //   baseURL,
  //   timeout: 60_000,
  // });

  // const sendLike = () => {
  //   console.info("CANDIDATE ID:", candidateId);
  //   console.info("ENTERPRISE ID:", enterpriseId);
  //   console.info("ROLE :", loginUser.role);

  //   if (loginUser.role === "enterprise") {
  //     client
  //       .post("/candidates/likes", { candidateId, enterpriseId })
  //       .then((response) => console.info(response.data))
  //       .catch((error) => console.error(error));
  //   } else {
  //     client
  //       .post("/enterprises/likes", { candidateId, enterpriseId })
  //       .then((response) => console.info(response.data))
  //       .catch((error) => console.error(error));
  //   }
  // };

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

  // const sendDislike = () => {
  //   client
  //     .post("/dislikes", { userId })
  //     .then((response) => console.info(response.data))
  //     .catch((error) => console.error(error));
  // };

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

        <button type="button">
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
