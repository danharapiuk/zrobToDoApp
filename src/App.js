import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import Button from '@mui/material/Button';
import { FormControl, Input, InputLabel } from '@mui/material';
import { collection, getDocs } from "firebase/firestore"; 

import './App.css';
import db from './firebase';
import { FirebaseError } from 'firebase/app';

function App() {
  //const [todos, setTodos] = useState(['']);
  const [input, setInput] = useState('');

  //gdy apka się ładuje to musimy pobrac dane z z bazy czy są dodane taski czy usunięte itd

  useEffect(() => {
    const getData = async () => {
      const todoRef = collection(db, 'todos');
      let allTodos = await getDocs(todoRef);
      allTodos.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});

    }
    getData()

  }, []);

  const addTodo = (event) => { //dodanie zadania na klik
    event.preventDefault(); //zakoczenie odświezania
    
    db.collection('todos').add({
      todo: input,
      timestamp: FirebaseError.firestore.FieldValue.serverTimestamp()
    })
    setInput(''); //czyszczenie inputa
  }

  return (
    <div className="App">
      <h1>zrobToDoApp</h1>
      <form>
        
        <FormControl>
          <InputLabel>Wpisz zadanie</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>


        <Button disabled={!input} type='submit' onClick={addTodo} variant='combined' color='red'>
          Dodaj zadania
        </Button>
      </form>
      

      <ul>
        {todos.map(todo => (
          <Todo text={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
