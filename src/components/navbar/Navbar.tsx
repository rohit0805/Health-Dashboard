import Container from "../Container/Container";
import { logo, navbarActionList } from "../../util";
import "./navbar.scss";
import NavbarAction from "./NavbarAction";
import Profile from "./Profile";

const Navbar = () => {
  return (
    <Container>
      <div className="navbar">
        <div className="navbarIcon">
          <img src={logo} />
        </div>
        <div className="navbarActions">
          {navbarActionList.map((action, index) => {
            return <NavbarAction key={index} {...action} />;
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
