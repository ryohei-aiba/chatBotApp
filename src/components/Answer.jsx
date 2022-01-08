import react from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Answer = (props)=> {
  return(
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color="secondary">
        {props.content}
      </Button>
    </Stack>
  )
}

export default Answer;