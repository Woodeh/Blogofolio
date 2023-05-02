import { useState } from "react";
import "./Burger.scss";
import { UserInfo } from "../UserInfo/UserInfo";

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-menu">
      <button onClick={toggleMenu}>
        <div className={`burger-menu__icon ${isOpen ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <ul className={`burger-menu__items ${isOpen ? "open" : ""}`}>
        <UserInfo username={"Arkadiy Cherkassov"} />
      </ul>
    </div>
  );
};
