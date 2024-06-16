import React from "react";
import { downloadIcon } from "../../../util";

const LabResults = () => {
  return (
    <div className="labResult">
      <h2>Lab Results</h2>
      <div className="labResultList">
        <div>
          <p>Blood Tests</p>
          <img src={downloadIcon} />
        </div>
        <div>
          <p>CT Scans</p>
          <img src={downloadIcon} />
        </div>
        <div>
          <p>Radiology Reports</p>
          <img src={downloadIcon} />
        </div>
        <div>
          <p>X rays</p>
          <img src={downloadIcon} />
        </div>
        <div>
          <p>Urine Test</p>
          <img src={downloadIcon} />
        </div>
      </div>
    </div>
  );
};

export default LabResults;
