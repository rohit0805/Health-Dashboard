import PatientList from "./PatientList/PatientList";
import DiagnosticHistory from "./DiagnosticHistory/DiagnosticHistory";
import PatientInfo from "./PatientInfo/PatientInfo";

import "./patientView.scss";
import { useState } from "react";

const PatientView = () => {
  const [patient, setPatient] = useState(null);

  const onPatientSelection = (patient)=>{
    console.log(patient);
    setPatient(patient);
  }

  return (
    <div className="patientViewContainer">
      <div className="PatientListContainer">
        <PatientList patientSelected={patient} onPatientSelection={onPatientSelection}/>
      </div>
      <div className="diaHistContainer">
        <DiagnosticHistory patient={patient}/>
      </div>
      <div className="patientInfoContainer">
        <PatientInfo />
      </div>
    </div>
  );
};

export default PatientView;
