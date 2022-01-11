import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextInput from './TextInput';


export default class FormDialog extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: "",
      email: "",
      description: ""
    }

    this.inputName = this.inputName.bind(this)
    this.inputEmail = this.inputEmail.bind(this)
    this.inputDescription = this.inputDescription.bind(this)
  }

  inputName = (e)=> {
    this.setState({name: e.target.value})
  }

  inputEmail = (e)=> {
    this.setState({email: e.target.value})
  }

  inputDescription = (e)=> {
    this.setState({description: e.target.value})
  }

  submitForm = ()=> {
    const name = this.state.name
    const email = this.state.email
    const description = this.state.description

    
  }
  
  render() {
    return(
      <Dialog open={this.props.open} onClose={this.handleClose}>
        <DialogTitle>お問い合わせフォーム</DialogTitle>
        <DialogContent>
            <TextInput
              label={"お名前(必須)"} multiline={false} rows={1}
              value ={this.state.name} type={"text"} onChange={this.inputName}
            />
            <TextInput
              label={"メールアドレス(必須)"} multiline={false} rows={1}
              value ={this.state.email} type={"email"} onChange={this.inputEmail}
            />
            <TextInput
              label={"お問い合わせ内容(必須)"} multiline={true} rows={5}
              value ={this.state.description} type={"text"} onChange={this.inputDescription}
            />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={this.props.handleClose}>キャンセル</Button>
          <Button variant="outlined" onClick={this.props.submitForm}>送信</Button>
        </DialogActions>
      </Dialog>
    )
  }
};