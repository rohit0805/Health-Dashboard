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
          <LineChartComponent />
        </div>
        <div className="diagnosticInfoContainer">
          <DiagnosisInfo
            logo={heartLogo}
            backgroundColor={"#e0f3fa"}
            heading={"Respiratory Rate"}
            value={"20 bpm"}
            response={"Normal"}
          />
          <DiagnosisInfo
            logo={tempLogo}
            backgroundColor={"#ffe6e9"}
            heading={"Temperature"}
            value={"98.6°F"}
            response={"Normal"}
          />
          <DiagnosisInfo
            logo={respLogo}
            backgroundColor={"#ffe6f1"}
            heading={"Heart Rate"}
            value={"78 bpm"}
            response={"Lower than average"}
          />
        </div>
        <div className="diagnostic">
          <h2>Diagnostic List</h2>
          <table className="diagnosticList">
            <thead>
              <tr>
                <th>Problem/Diagnosis</th>
                <th>Description</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {patient?.diagnostic_list?.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.status}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default DiagnosticHistory;
