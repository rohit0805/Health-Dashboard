import React from "react";

const PatientBio = ({ logo, heading, description }) => {
  return (
    <div className="patientBio">
      <div>
        <img src={logo} />
      </div>
      <div>
        <p>{heading}</p>
        <h5>{description}</h5>
      </div>
    </div>
  );
};

export default PatientBio;
