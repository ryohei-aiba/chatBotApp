import react from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Answer = (props)=> {
  return(
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color="secondary" onClick={() =>{props.select(props.content,props.nextId)}}>
        {props.content}
      </Button>
    </Stack>
  )
}

export default Answer;