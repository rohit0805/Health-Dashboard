import Container from "../Patients/Container/Container";
import { logo, navbarActionList } from "./navbarUtil";
import "./navbar.scss";
import NavbarAction from "./NavbarAction";
import Profile from "./Profile";

const Navbar = () => {
  console.log(logo);
  return (
    <Container>
      <div className="navbar">
        <div className="navbarIcon">
          <img src={logo} />
        </div>
        <div className="navbarActions">
          {navbarActionList.map((action) => {
            return <NavbarAction {...action} />;
          })}
        </div>
        <div className="navbarProfile">
          <Profile />
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
