import React from "react";
import { Box, Typography, Container, Paper, Grid } from "@mui/material";
import data from "../assets/exp.json";

const Timeline = () => {
  return (
    <Container id="timelines">
      <Box textAlign="center" marginBottom={4} marginTop={4}>
        <Typography 
          variant="h4" 
          component="h2" 
          sx={{ 
            display: "inline-block", 
            fontWeight: 700, 
            color: "chocolate", 
            paddingBottom: "0.5rem"
          }}
          style={{
            background: "linear-gradient(to right, white, chocolate)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontWeight:"bold",
            fontSize: "2rem"
          }}
        >
          Work Experience
        </Typography>
      </Box>
      <Box>
        {data.Experience.map((exp, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              padding: 3,
              margin: "50px 0",
              width:'100%',
              backgroundColor: "#111314",
              color: "#333",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                // transform: "scale(1.05)",
                boxShadow: "4px 5px 10px white"
              }
            }}
          >
            <Grid container spacing={6} >
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "white" }}>
                  {exp.duration}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={5}>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "white" }}>
                  {exp.company}
                </Typography>
                <Typography variant="subtitle1" sx={{fontWeight: "bold", color: "#555" }}>
                  {exp.location}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: "bold", color: "#555" }}>
                  {exp.Designation}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={3}>
                <img 
                  src={exp.url} 
                  alt={exp.company}
                  style={{ maxWidth: "90px", height: "90px", borderRadius: "50%" }}
                />
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Box>
    </Container>
  );
};

export default Timeline;
