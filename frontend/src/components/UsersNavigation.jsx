/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import "../styles/usersNavigation.css";

function UsersNavigation() {
  const [currentUsers, setCurrentUsers] = useState({
    firstName: "John",
    lastName: "Doe",
  });

  const changeUserNameDynamically = () => {
    setCurrentUsers((actualUser) => {
      const newUser = [...actualUser];

      newUser.firstname = "Mika";

      return newUser;
    });
  };

  return (
    <div className="header">
      <h4>
        Coding<span>Swipe</span>
      </h4>
      <div className="square"> </div>
      {currentUsers && (
        <div className="user-info-container">
          <div className="user-avatar">{currentUsers.firstName[0]}</div>
          <div className="user-details">
            <span className="user-name">
              {currentUsers.firstName} {currentUsers.lastName}
            </span>
          </div>
        </div>
      )}

      <hr className="separator" />
    </div>
  );
}

export default UsersNavigation;
