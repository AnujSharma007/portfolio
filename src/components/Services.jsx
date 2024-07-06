import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, Typography, Box } from "@mui/material";

// Import images
import jsImage from "../assets/icons8-javascript-240.png";
import htmlImage from "../assets/icons8-html5-240.png";
import cssImage from "../assets/icons8-css-100.png";
import gitImage from "../assets/icons8-github-240.png";
import reactImage from "../assets/icons8-react-160.png";
import nodeImage from "../assets/icons8-nodejs-240.png";
import mongoImage from "../assets/icons8-mongo-db-96.png";
import firebaseImage from "../assets/icons8-firebase-240.png";
import dockerImage from "../assets/icons8-docker-240.png";
import awsImage from "../assets/icons8-aws-256.png";
import awslamda from "../assets/icons8-awslambda-240.png";

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

  const skillsData = [
    { name: "Javascript", image: jsImage },
    { name: "HTML", image: htmlImage },
    { name: "CSS/SCSS/MUI", image: cssImage },
    { name: "Git | Github", image: gitImage },
    { name: "React JS", image: reactImage },
    { name: "Node JS | Express JS", image: nodeImage },
    { name: "AWS Lamda", image: awslamda },
    { name: "Mongo", image: mongoImage },
    { name: "Firebase | socket.io", image: firebaseImage },
    { name: "Docker", image: dockerImage },
    { name: "AWS IOT CORE | DevOps | EC2 | Lamda", image: awsImage },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" align="center" gutterBottom marginBottom={"4%"} color={"chocolate"}>
        Skills
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap={3}
      >
        {skillsData.map((skill, index) => (
            <Card
              sx={{
                minWidth: 275,
                textAlign: "center",
                backgroundColor: "#282c34",
                color: "white",
                transition: "transform 0.3s, background-color 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  backgroundColor: "#3a3f47",
                },
              }}
            >
              <CardContent>
                <img
                  src={skill.image}
                  alt={skill.name}
                  style={{ width: "80px", height: "80px", marginBottom: "10px" }}
                />
                <Typography variant="h6">{skill.name}</Typography>
              </CardContent>
            </Card>
        ))}
      </Box>
    </div>
  );
};

export default Skills;
