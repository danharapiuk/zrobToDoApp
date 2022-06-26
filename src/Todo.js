import React from 'react';
import './Todo.css';
import { ListItem, List, ListItemText, ListItemAvatar, Button } from '@mui/material';
import db from './firebase';

function Todo(props) {
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemAvatar>
          </ListItemAvatar>
        <ListItemText primary= {props.todo} secondary={'test'} />
      </ListItem>
      <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}>Delete me</Button>
    </List>
  )
}

export default Todo;
