import React from "react";
import "../../styles/components/homePageUsersSwipingSystem.css";

function SwipeSystem() {
  return (
    <>
      <section className="icone_container">
        <img
          className="icone_heart"
          src="/src/assets/heart_swipe.svg"
          alt="green hart"
        />
        <img
          className="icone_cross"
          src="/src/assets/cross_swipe.svg"
          alt="red cross"
        />
      </section>
      <div className="blue_container">.</div>
    </>
  );
}

export default SwipeSystem;
