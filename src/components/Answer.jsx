import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Answer = (props)=> {
  return(
    <Stack>
      <Button
        sx={{
          borderColor: "#FFF549",
          color: "#FFB549",
          fontWeight: 600,
          marginBottom: "8px",
          "&:hover": {
            borderColor: "#FFF549",
            backgroundColor: "#FFB549",
            color: "#FFF"
          }
        }}
        variant="outlined" 
        onClick={() =>{props.select(props.content,props.nextId)}}
      >
        {props.content}
      </Button>
    </Stack>
  )
}

export default Answer;