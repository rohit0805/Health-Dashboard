import React, { useEffect, useState } from "react";
import Container from "../../Container/Container";
import { getService } from "../../../services";
import Patient from "./Patient";
import "./patient.scss";
import { data } from "../util";
import { searchLogo } from "../../../util";

const PatientList = ({onPatientSelection}) => {
  const [patientList, setPatientList] = useState([]);
  const updatePatientList = async () => {
    //const newPatientList = await getService();
    setPatientList(data);
  };
  useEffect(() => {
    updatePatientList();
  }, []);

  return (
    <Container>
      <div className="patientListContainer">
        <header className="patientHeading">
          <h2>Patients</h2>
          <img src={searchLogo} />
        </header>
        {patientList.map((patient, index) => {
          return <Patient key={index} {...patient} onPatientSelection={onPatientSelection}/>;
        })}
      </div>
    </Container>
  );
};

export default PatientList;
