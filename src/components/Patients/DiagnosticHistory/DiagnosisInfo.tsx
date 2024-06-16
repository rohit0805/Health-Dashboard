const DiagnosisInfo = ({ logo, backgroundColor, heading, value, response }) => {
  return (
    <div
      className="diagnosticInfo"
      style={{ backgroundColor: `${backgroundColor}` }}
    >
      <div>
        <img src={logo} />
      </div>
      <div>
        <p>{heading}</p>
        <h1>{value}</h1>
      </div>
      <div>{response}</div>
    </div>
  );
};

export default DiagnosisInfo;
