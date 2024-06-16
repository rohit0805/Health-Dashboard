import React from "react";
import { loginUserLogo, settingLogo, verticalLogo } from "../../util";

const Profile = () => {
  return (
    <div className="profileContainer">
      <div className="profileLeft">
        <img src={loginUserLogo} />
      </div>
      <div className="profileMiddle">
        <h5>Dr. Jose Simmons</h5>
        <p>General Practitioner</p>
      </div>
      <div className="profileRight">
        <img src={settingLogo} />
        <img src={verticalLogo} />
      </div>
    </div>
  );
};

export default Profile;
