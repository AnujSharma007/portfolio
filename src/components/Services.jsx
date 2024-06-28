import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndThree: {
      opacity: 0,
      y: "-100%",
    },

    four: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <div id="services">
      <h2>Skills</h2>
      <section>
        <motion.div
          className="serviceBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <p>2.5+ Years Experience</p>
          <p>in FullStack Development</p>
        </motion.div>
        <motion.div
          className="serviceBox2"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
        >
          {/* <AiFillIeCircle /> */}
          <span>Javascript</span>
          <span>HTML</span>
          <span>CSS/SCSS/MUI</span>
        </motion.div>
        <motion.div
          className="serviceBox3"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{
            delay: 0.2,
          }}
        >
          {/* <AiFill /> */}
          <span>React JS</span>
          <span>Node JS</span>
          <span>Express</span>
          <span>Mongo</span>
        </motion.div>
        <motion.div
          className="serviceBox4"
          whileInView={animations.whileInView}
          initial={animations.four}
        >
          {/* <AiFillWindows /> */}
          <span>AWS IOT CORE | DevOps</span>
        </motion.div>
      </section>
    </div>
  );
};

export default Skills;
