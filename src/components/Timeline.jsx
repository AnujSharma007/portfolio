// import React from "react";
// import { Box, Typography, Container, Paper, Grid } from "@mui/material";
// import data from "../assets/exp.json";

// const Timeline = () => {
//   return (
//     // <div id="timeline" style={{backgroundColor:"rgb(46, 41, 41)"}}>
//     <Container>
//       <Box textAlign="center" marginBottom={4}marginTop={4} >
//         <h2 
//         style={{ 
//           display: "inline-block", 
//           font: "700 2.5rem white", 
//           color: "white"
//         }}>
        
//           Work Experience
//         </h2>
//       </Box>
//       <Box>
//         {data.Experience.map((exp, index) => (
//           <Paper
//             key={index}
//             elevation={3}
//             sx={{
//               padding: 2,
//               margin: "40px 0",
//               backgroundColor: index % 2 === 0 ? "#fff9c4" : "#d7ccc8",
//               color:"black",
//               transition: "transform 0.3s ease-in-out",
//               "&:hover": {
//                 transform: "scale(1.1)"
//               }
//             }}
//           >
//             <Grid container spacing={3}>
//             <Grid item xs={12} sm={2}>
//             </Grid>
//               <Grid item xs={12} sm={4}>
//                 <Typography variant="h8" sx={{fontWeight:"bolder"}}>{exp.duration}</Typography>
//               </Grid>
//               <Grid item xs={12} sm={4}>
//                 <Typography variant="h8" sx={{fontWeight:"bold"}}>{exp.company}</Typography>
//                 <Typography variant="subtitle1" sx={{fontWeight:"bold"}}>
//                   {exp.location}
//                 </Typography>
//                 <Typography variant="body1" sx={{fontWeight:"bold"}}>{exp.Designation}</Typography>
//               </Grid>
//             <Grid item xs={12} sm={1}>
//             </Grid>
//             </Grid>
//           </Paper>
//         ))}
//       </Box>
//     </Container>
//     // </div>
//   );
// };

// export default Timeline;


import React from "react";
import { Box, Typography, Container, Paper, Grid } from "@mui/material";
import data from "../assets/exp.json";

const Timeline = () => {
  return (
    <Container>
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
              margin: "20px 0",
              backgroundColor: "#282c34",
              color: "#333",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 8px 16px rgba(0,0,0,0.2)"
              }
            }}
          >
            <Grid container spacing={5}>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1976d2" }}>
                  {exp.duration}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={5}>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1976d2" }}>
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
                  style={{ maxWidth: "40px", height: "40px", borderRadius: "8px" }}
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
