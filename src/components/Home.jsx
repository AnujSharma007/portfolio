import React, { useRef,useState } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight } from "react-icons/bs";
import toast from "react-hot-toast";
import { Button, Modal, Box, Typography, Grid, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
// import React, { useState } from 'react';
// import me from "../assets/vg.png";

const Home = ({ ratio }) => {
  const projectCount = useRef(null);
  const [open, setOpen] = useState(false);
  const [answersVisible, setAnswersVisible] = useState({});


  const questions = [
    { id: 1, question: 'What is your total year of experience', answerType: 'Answer',answer:"3 years" },
    { id: 2, question: 'What is your current location', answerType: 'Answer',answer:"Pune" },
    { id: 3, question: 'Notice Period', answerType: 'Answer',answer:"1 Month (Negotiable)" },
    { id: 4, question: 'Current and Expected CTC', answerType: 'Answer',answer:"Let's connect on call. Thanks!" },
    // Add more questions here...
  ];

  const handleOpen = () => setOpen(true);
  const handleClose = (

  ) => {
    setOpen(false);
    setAnswersVisible({})
  }

  const toggleAnswer = (id) => {
    setAnswersVisible((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

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
      <div>
      <Button
          variant="contained"
          sx={{ m: 1, whiteSpace: 'nowrap',bgcolor:'chocolate', borderRadius:0 }}
          onClick={handleOpen}
      >
      HR Quick Questions
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: '#013220',
            border: '2px solid chocolate',
            boxShadow: 24,
            p: 4,
          }}
        >
          <div style={{display:'flex', justifyContent:"space-between"}}>
          <Typography id="modal-title" variant="h6" component="h2" color="chocolate">
            HR Favorite Questions
          </Typography>
          <IconButton aria-label="close" onClick={handleClose} sx={{ color: 'chocolate' }}>
              <CloseIcon/>
          </IconButton>
          </div>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            {questions.map((item) => (
              <Grid item xs={12} key={item.id}>
                <Typography variant="body1" color='white'>{item.question}</Typography>
                <Button
                  variant="outlined"
                  sx={{ mt: 1 }}
                  onClick={() => toggleAnswer(item.id)}
                >
                  {answersVisible[item.id] ? 'Hide Answer' : 'Show Answer'}
                </Button>
                {answersVisible[item.id] && (
                  <Typography variant="body2" color='chocolate' sx={{ mt: 1 }}>
                    {item.answer}
                    <hr/>
                  </Typography>
                )}
              </Grid>
            ))}
          </Grid>
        </Box>
      </Modal>
      </div>
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
