import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

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
            <AiFillInstagram />
          </a>
          <a href="https://www.linkedin.com/in/anujsharma007" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a
            href="https://github.com/AnujSharma007?tab=repositories"
            target={"blank"}
          >
            <AiFillGithub />
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
