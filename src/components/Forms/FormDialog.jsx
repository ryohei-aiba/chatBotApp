import React, { useState, useCallback, useEffect } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextInput from './TextInput';
import { WEBHOOK_URL } from "../../webhookconfig";

const FormDialog = (props)=> {

  const [name,setName] = useState([""]);
  const [email,setEmail] = useState([""]);
  const [description,setDescription] = useState([""]);

  const inputName = useCallback((e)=> {
    setName(e.target.value)
  },[setName])

  const inputEmail = useCallback((e)=> {
    setEmail(e.target.value)
  },[setEmail])

  const inputDescription = useCallback((e)=> {
    setDescription(e.target.value)
  },[setDescription])

  const submitForm = ()=> {

    const payload = {
      text: "お問い合わせがありました。\n" +
            "お名前: " + name + "\n" +
            "Email: " + email + "\n" +
            "お問い合わせ内容:\n" + description
    }

    fetch(WEBHOOK_URL, {
      method: 'POST',
      body: JSON.stringify(payload)
    }).then(()=> {
      alert("送信が完了しました。")
      setName("")
      setEmail("")
      setDescription("")
      return props.handleClose()
    })
  }
  

  return(
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogTitle>お問い合わせフォーム</DialogTitle>
      <DialogContent>
          <TextInput
            label={"お名前(必須)"} multiline={false} rows={1}
            value ={name} type={"text"} onChange={inputName}
          />
          <TextInput
            label={"メールアドレス(必須)"} multiline={false} rows={1}
            value ={email} type={"email"} onChange={inputEmail}
          />
          <TextInput
            label={"お問い合わせ内容(必須)"} multiline={true} rows={5}
            value ={description} type={"text"} onChange={inputDescription}
          />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={props.handleClose}>キャンセル</Button>
        <Button variant="outlined" onClick={submitForm}>送信</Button>
      </DialogActions>
    </Dialog>
  )

};

export default FormDialog;