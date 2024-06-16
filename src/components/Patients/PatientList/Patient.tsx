import React from "react";
import { SearchLogo, horizontalLogo } from "../../../util";

const Patient = (props) => {
  console.log(props);
  const { name, profile_picture, gender, age } = props;
  return (
    <div className="patientContainer">
      <div className="patientLeft">
        <img src={profile_picture} />
        <div className="patientDetail">
          <h5>{name}</h5>
          <p>
            {gender}, {age}
          </p>
        </div>
      </div>
      <div className="patientRight">
        <img src={horizontalLogo} />
      </div>
    </div>
  );
};

export default Patient;
