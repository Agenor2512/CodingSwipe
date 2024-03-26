import { useState } from "react";
import "../../styles/content_to_swipe/swipeSystem.css";

function SwipeSystem() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  const handleDislikeClick = () => {
    setDislikes(dislikes + 1);
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
        <span>{likes}</span>

        <button type="button" onClick={handleDislikeClick}>
          <img
            className="dislike_icon"
            src="/src/assets/cross_swipe.svg"
            alt="red cross"
          />
        </button>
        <span>{dislikes}</span>
      </div>
    </section>
  );
}

export default SwipeSystem;
