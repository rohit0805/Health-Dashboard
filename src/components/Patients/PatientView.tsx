import React from "react";
import Navbar from "../navbar/Navbar";
import PatientList from "./PatientList/PatientList";
import DiagnosticHistory from "./DiagnosticHistory/DiagnosticHistory";
import PatientInfo from "./PatientInfo/PatientInfo";

import "./patientView.scss";

const PatientView = () => {
  return (
    <div className="patientViewContainer">
      <div className="PatientListContainer">
        <PatientList />
      </div>
      <div className="diaHistContainer">
        <DiagnosticHistory />
      </div>
      <div className="patientInfoContainer">
        <PatientInfo />
      </div>
    </div>
  );
};

export default PatientView;
