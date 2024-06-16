import React from "react";
import { SearchLogo, horizontalLogo } from "../../../util";

const Patient = ({ onPatientSelection, ...props }) => {
  const { name, profile_picture, gender, age } = props;
  return (
    <div
      className="patientContainer"
      onClick={() => {
        onPatientSelection(props);
      }}
    >
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
