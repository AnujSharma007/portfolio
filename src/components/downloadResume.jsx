import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const DownloadResumeButton = () => {
  return (
    <Button
      size="medium"
      href={`${process.env.PUBLIC_URL}/ANUJ_SHARMA_RESUME.pdf`}
      download="ANUJ_SHARMA_RESUME.pdf"
    >
     <Typography variant="button" color={"white"}>
        Download My Resume
      </Typography>
    </Button>
  );
};

export default DownloadResumeButton;
