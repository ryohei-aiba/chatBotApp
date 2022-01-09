import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { getThemeProps } from "@mui/system";
import NoProfile from "../assets/img/no-profile.png"
import Profile from "../assets/img/profile.png"


const Chat = (props)=> {
  const isQuestion = (props.type === "question");
  const classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse' 
  return(
    <ListItem>
        <ListItemAvatar>
          {isQuestion ? (
            <Avatar alt="icon" src={Profile} />  
          ):(
            <Avatar alt="icon" src={NoProfile} />
          )}
        </ListItemAvatar>
        <div className="p-chat__bubble">
          {props.text}
        </div>
    </ListItem>
  )
}

export default Chat;