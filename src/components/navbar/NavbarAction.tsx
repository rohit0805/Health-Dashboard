import React from "react";
import "./navbar.scss";

const NavbarAction = ({ src, name, selected }: INavbarAction) => {
  return (
    <div className={`navbarAction ${selected ? 'actionSelected': ''}`}>
      <img src={src} />
      <p>{name}</p>
    </div>
  );
};

export default NavbarAction;
