import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default class FormDialog extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      open: false
    }
  }
  
  render() {
    return(
      <Dialog open={this.props.open} onClose={this.handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose}>Cancel</Button>
          <Button onClick={this.props.handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    )
  }
};