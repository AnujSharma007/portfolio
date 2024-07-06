import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";


import github from "../assets/icons8-github.gif"
import instagram from "../assets/icons8-instagram.gif";
import linkedIn from "../assets/icons8-linkedin.gif";

const Footer = () => {
  return (
    <footer>
      <div>
        {/* <img src={""} alt="Founder" /> */}

        <h2>Anuj Sharma</h2>
        <p>Consistency & discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.instagram.com/ankur.anuj/" target={"blank"}>
            <img src={instagram} alt={"instagram"} style={{ width: "40px", height: "40px", marginBottom: "10px" }}/>
          </a>
          <a href="https://www.linkedin.com/in/anujsharma007" target={"blank"}>
            <img src={linkedIn} alt={"LinkedIn"} style={{ width: "40px", height: "40px", marginBottom: "10px" }}/>
          </a>
          <a
            href="https://github.com/AnujSharma007?tab=repositories"
            target={"blank"}
          >
            <img src={github} alt={"Github"} style={{ width: "40px", height: "40px", marginBottom: "10px" }}/>
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
