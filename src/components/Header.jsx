import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = ({ setMenuOpen, menuOpen }) => {
  return (
    <div>
      <nav style={{position:"sticky", color:"chocolate"}}>
        <NavContent setMenuOpen={setMenuOpen} />
      </nav>

      <button className="navBtn" style={{color:"chocolate"}} onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu />
      </button>
    </div>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};

const NavContent = ({ setMenuOpen }) => (
  <div>
    <div>
    <h2 style={{color:"green"}}>Anuj's Portfolio</h2>
    </div>
    {/* <div> */}
      <a onClick={() => setMenuOpen(false)} href="#home">
        Home
      </a>
      <a onClick={() => setMenuOpen(false)} href="#work">
        Work
      </a>
      <a onClick={() => setMenuOpen(false)} href="#timeline">
        Experience
      </a>
      <a onClick={() => setMenuOpen(false)} href="#services">
        Skills
      </a>
      <a onClick={() => setMenuOpen(false)} href="#contact">
        Contact Me
      </a>
    {/* </div> */}
  </div>
);

export default Header;
