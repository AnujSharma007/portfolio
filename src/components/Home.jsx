import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight } from "react-icons/bs";
import toast from "react-hot-toast";
// import me from "../assets/vg.png";

const Home = ({ ratio }) => {
  const projectCount = useRef(null);

  const animationProjectsCount = () => {
    animate(0, 10, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };

  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1} 
          style={{
            background: "linear-gradient(to right, white, chocolate)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontSize: "4rem"
          }}
          >
            Hi, I Am <br /> Anuj Sharma
          </motion.h1>
          <br />
          <br />
          <span 
          style={{
            background: "linear-gradient(to right, white, chocolate)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontSize: "2rem"
          }}
          >3 years of work experience in<br/> Full Stack Development</span>
          <Typewriter
            options={{
              strings: ["A Full Stack Developer", "A DevOps Engineer","An IOT Enthusiast"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:anujankur13@gmail.com" onClick={()=>{toast.success("Drop your mail @ anujankur13@gmail.com")}} style={{color:"black"}}>Contact Me</a>
            <a href="#work" style={{color:"green"}}>
              Projects <BsArrowUpRight />
            </a>
          </div>
          <aside>
            <article
            style={{
              background: "linear-gradient(to right, white, chocolate)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
            >
              <p> 
                +
                {ratio < 3 && (
                  <motion.span
                    ref={projectCount}
                    whileInView={animationProjectsCount}
                  >
                    10
                  </motion.span>
                )}
              </p>
            <span>Upcoming Projects</span>
            </article>

            <article
             style={{
              background: "linear-gradient(to right, white, chocolate)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
            >
              <p>Contact</p>
              <span>anujankur13@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={"https://cdn.pixabay.com/photo/2016/06/13/09/57/meeting-1453895_1280.png"} alt="Anuj" />
      </section>
    </div>
  );
};

export default Home;
