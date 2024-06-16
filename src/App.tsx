import PatientView from "./components/Patients/PatientView";
import Navbar from "./components/navbar/Navbar";
import "./App.scss";

function App() {
  return (
    <div className="appContainer">
      <div className="navbarContainer">
        <Navbar />
      </div>
      <PatientView />
    </div>
  );
}

export default App;
