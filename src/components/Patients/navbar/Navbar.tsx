import Container from "../Patients/Container/Container";
import "./navbar.scss";

const Navbar = () => {
  return (
    <Container>
      <div className="navbar">
        Navbar
        <div className="navbarIcon"></div>
        <div className="navbarActions"></div>
      </div>
    </Container>
  );
};

export default Navbar;
