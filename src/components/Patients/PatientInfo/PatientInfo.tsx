import React from "react";
import Container from "../../Container/Container";
import PatientAvatar from "./PatientAvatar";
import PatientBio from "./PatientBio";
import {
  callLogo,
  genderLogo,
  insuranceIcon,
  scheduleLogo,
} from "../../../util";
import LabResults from "./LabResults";

const PatientInfo = () => {
  return (
    <Container>
      <div className="">
        <PatientAvatar />
        <div className="patientBioContainer">
          <PatientBio
            logo={scheduleLogo}
            heading={"Date of birth"}
            description={"August 23, 1996"}
          />
          <PatientBio
            logo={genderLogo}
            heading={"Gender"}
            description={"Female"}
          />
          <PatientBio
            logo={callLogo}
            heading={"Contacts Info"}
            description={"(415) 555-1234"}
          />
          <PatientBio
            logo={callLogo}
            heading={"Emergency Contacts"}
            description={"(415) 555-2141"}
          />
          <PatientBio
            logo={insuranceIcon}
            heading={"Insurance Provider"}
            description={"Sunrise Health Assurance"}
          />
        </div>
        <button className="patientInfoBtn">Show All Information</button>
      </div>
      <LabResults/>
    </Container>
  );
};

export default PatientInfo;
