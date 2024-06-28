import React from "react";
import { Box, Typography, Container, Paper, Grid } from "@mui/material";
import data from "../assets/exp.json";

const Timeline = () => {
  return (
    <div id="timeline" style={{backgroundColor:"rgb(46, 41, 41)"}}>
    <Container>
      <Box textAlign="center" marginBottom={4}marginTop={4} >
        <Typography variant="h4" color={"white"}>
          My Experience
        </Typography>
      </Box>
      <Box>
        {data.Experience.map((exp, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              padding: 2,
              margin: "40px 0",
              backgroundColor: index % 2 === 0 ? "#DBE9FA" : "#FFFDD0",
            }}
          >
            <Grid container spacing={3}>
            <Grid item xs={12} sm={2}>
            </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h8" sx={{fontWeight:"bolder"}}>{exp.duration}</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h8" sx={{fontWeight:"bold"}}>{exp.company}</Typography>
                <Typography variant="subtitle1" sx={{fontWeight:"bold"}}>
                  {exp.location}
                </Typography>
                <Typography variant="body1" sx={{fontWeight:"bold"}}>{exp.Designation}</Typography>
              </Grid>
            <Grid item xs={12} sm={1}>
            </Grid>
            </Grid>
          </Paper>
        ))}
      </Box>
    </Container>
    </div>
  );
};

export default Timeline;
