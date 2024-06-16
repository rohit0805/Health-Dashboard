import { heartLogo, respLogo, tempLogo } from "../../../util";
import Container from "../../Container/Container";
import DiagnosisInfo from "./DiagnosisInfo";
import LineChartComponent from "./LineChartComponent";
import "./diagnosticHistory.scss";

const DiagnosticHistory = ({ patient }) => {
  return (
    <Container>
      <div className="diagHistContainer">
        <h2>Diagnosis History</h2>
        <div className="chartContainer">
          <LineChartComponent patient={patient} />
        </div>
        <div className="diagnosticInfoContainer">
          <DiagnosisInfo
            logo={heartLogo}
            backgroundColor={"#e0f3fa"}
            key={"Respiratory Rate"}
            value={"20 bpm"}
            response={"Normal"}
          />
          <DiagnosisInfo
            logo={tempLogo}
            backgroundColor={"#ffe6e9"}
            key={"Temperature"}
            value={"98.6°F"}
            response={"Normal"}
          />
          <DiagnosisInfo
            logo={respLogo}
            backgroundColor={"#ffe6f1"}
            key={"Heart Rate"}
            value={"78 bpm"}
            response={"Lower than average"}
          />
        </div>
      </div>
    </Container>
  );
};

export default DiagnosticHistory;
