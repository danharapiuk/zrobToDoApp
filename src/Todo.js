import React from 'react';
import './Todo.css';
import { ListItem, List, ListItemText, ListItemAvatar } from '@mui/material';

function Todo(props) {
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemAvatar>
          </ListItemAvatar>
        <ListItemText primary={props.text} secondary={'test'} />
        </ListItem>
    </List>
  )
}

export default Todo;
