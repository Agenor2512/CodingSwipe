import { useState } from "react";
import axios from "axios";
import "../../styles/content_to_swipe/swipeSystem.css";

// eslint-disable-next-line react/prop-types
function SwipeSystem({ userId }) {
  const [setLikes] = useState(false);
  const [setDislikes] = useState(false);

  const baseURL = import.meta.env.VITE_URL_BACKEND;

  const client = axios.create({
    baseURL,
    timeout: 60_000,
  });

  const sendLike = () => {
    client
      .post("/likes", { userId })
      .then((response) => console.info(response.data))
      .catch((error) => console.error(error));
  };

  const sendDislike = () => {
    client
      .post("/dislikes", { userId })
      .then((response) => console.info(response.data))
      .catch((error) => console.error(error));
  };

  const handleLikeClick = () => {
    setLikes(true);
    sendLike();
  };

  const handleDislikeClick = () => {
    setDislikes(true);
    sendDislike();
  };

  return (
    <section className="swipe_system_container">
      <div>
        <button type="button" onClick={handleLikeClick}>
          <img
            className="like_icon"
            src="/src/assets/heart_swipe.svg"
            alt="green heart"
          />
        </button>

        <button type="button" onClick={handleDislikeClick}>
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
