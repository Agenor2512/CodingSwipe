/* eslint-disable no-unused-vars */
import React from "react";
import Logo from "../Logo";

import "../../styles/resume_job_offer/UsersNavigation.css";

function UsersNavigation() {
  /*  const [currentUsers, setCurrentUsers] = useState({
    firstName: "John",
    lastName: "Doe",
  });

  const changeUserNameDynamically = () => {
    setCurrentUsers((actualUser) => {
      const newUser = [...actualUser];

      newUser.firstname = "Mika";

      return newUser;
    });
  }; */

  return (
    <div className="header">
      <Logo />
      <div className="user_info_container">
        <div className="user_avatar">J</div>
        <div className="user_details">
          <span className="user_name">John Doe</span>
        </div>
      </div>
    </div>
  );
}

export default UsersNavigation;
