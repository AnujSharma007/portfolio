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
      <h2 style={{color:"chocolate"}}>Upcoming Projects</h2>
      <section >
        <article>
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
              <div key={i.title} className="workItem" style={{backgroundColor:"rgb(191, 96, 96)"}}>
                <img src={i.imgSrc} alt={i.title} />
                <aside>
                  <h3>{i.title}</h3>
                  <p>{i.description}</p>
                  <a 
                  target={"_blank"}
                  rel="noopener noreferrer"
                  // href={i.url}
                  onClick={handleClick}
                  style={{color:'black'}}
                  >
                    View Demo
                  </a>
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
