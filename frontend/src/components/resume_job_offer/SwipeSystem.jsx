import React from "react";
import "../../styles/resume_job_offer/swipeSystem.css";

function SwipeSystem() {
  return (
    <section className="swipe_system_container">
      <div>
        <button type="button">
          <img
            className="like_icon"
            src="/src/assets/heart_swipe.svg"
            alt="green hart"
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
