import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../assets/data.json";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useState } from 'react';


const Work = () => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div id="work">
      <h2
      style={{
        background: "linear-gradient(to right, white, chocolate)",
        WebkitBackgroundClip: "text",
        color: "transparent",
        fontSize: "3rem"
      }}
      >Project Experience</h2>
      <section style={{backgroundColor:"#111314"}}>
        <article style={{backgroundColor:"#013220"}}>
          <Carousel
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            interval={1500}
            infiniteLoop={true}
            autoPlay={true}
          >
            {data.projects.map((i) => (
              <div key={i.title} className="workItem" style={{backgroundColor:"#282c34",color:"white"}}>
                <img src={i.imgSrc} alt={i.title} />
                <aside
                style={{
                  background: "linear-gradient(to right, white, chocolate)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontSize: "2rem"
                }}
                >
                  <p>{i.description}</p>
                  <h3>{i.title}</h3>
                  {/* <a 
                  target={"_blank"}
                  rel="noopener noreferrer"
                  // href={i.url}
                  onClick={handleClick}
                  style={{color:'black'}}
                  >
                    Info
                  </a> */}
                </aside>
              </div>
            ))}
          </Carousel>
        </article>
      </section>
      <Snackbar open={open} autoHideDuration={2000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" variant="filled">
          This Project is Under Development
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Work;
