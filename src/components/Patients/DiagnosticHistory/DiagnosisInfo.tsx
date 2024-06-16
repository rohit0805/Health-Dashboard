const DiagnosisInfo = ({ logo, backgroundColor, key, value, response }) => {
  return (
    <div
      className="diagnosticInfo"
      style={{ backgroundColor: `${backgroundColor}` }}
    >
      <div>
        <img src={logo} />
      </div>
      <div>
        <p>{key}</p>
        <h1>{value}</h1>
      </div>
      <div>{response}</div>
    </div>
  );
};

export default DiagnosisInfo;
